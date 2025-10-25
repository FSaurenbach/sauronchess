package de.fsaurenbach.sauronchess

import korlibs.image.bitmap.*
import korlibs.image.color.*
import korlibs.image.vector.*
import korlibs.image.vector.format.*
import korlibs.io.file.std.*
import korlibs.io.net.ws.*
import korlibs.io.serialization.json.*
import korlibs.korge.*
import korlibs.korge.input.*
import korlibs.korge.scene.*
import korlibs.korge.view.*
import korlibs.korge.view.align.*
import korlibs.math.geom.*
import korlibs.math.random.*
import korlibs.render.*
import kotlinx.coroutines.*
import kotlin.properties.*
import kotlin.random.*

object GameState {
    var sceneContainer: SceneContainer by Delegates.notNull()
    val cells = ArrayList<Cell>()
    val pieces = ArrayList<Piece>()
    var whiteCastlingLegal = true
    var blackCastlingLegal = true
    var whiteKingInCheck = false
    var blackKingInCheck = false
    var whiteTurn = true
    var promotionActive = false
    var castleAttempt = false
    var settingsInForeground = false
    var aboutPageInForeground = false
    var settingsContainer: Container by Delegates.notNull()
    var enPassantVictim: Piece? = null
    val circles = ArrayList<MoveIndicator>()
    val whiteCircles = ArrayList<MoveIndicator>()
    var userIsWhite = true
    var currentSlot = 0
    var onlinePlay = false
    fun reset() {
        cells.clear()
        pieces.clear()
        whiteCastlingLegal = true
        blackCastlingLegal = true
        whiteKingInCheck = false
        blackKingInCheck = false
        whiteTurn = true
        promotionActive = false
        castleAttempt = false
        settingsInForeground = false
        aboutPageInForeground = false
        enPassantVictim = null
        circles.clear()
        whiteCircles.clear()
        userIsWhite = true
        currentSlot = 0
        onlinePlay = false
    }
}

object Images {
    var whitePawn: NativeImage? = null
    var whiteRook: NativeImage? = null
    var whiteKnight: NativeImage? = null
    var whiteBishop: NativeImage? = null
    var whiteQueen: NativeImage? = null
    var whiteKing: NativeImage? = null
    var blackPawn: NativeImage? = null
    var blackRook: NativeImage? = null
    var blackKnight: NativeImage? = null
    var blackBishop: NativeImage? = null
    var blackQueen: NativeImage? = null
    var blackKing: NativeImage? = null
    var creditsSvg: Bitmap? = null
}

// Display Configuration
object DisplayConfig {
    val screenWidth = 900
    val screenHeight = 900
    val userScale = 0.74
    val chessBoardWidth = screenWidth * userScale
    val chessBoardHeight = screenHeight * userScale
    val offsetX = (screenWidth - chessBoardWidth) / 2
    val offsetY get() = (screenHeight - chessBoardHeight) / 2
    val cellHeight get() = chessBoardHeight / 8
    val cellWidth get() = chessBoardWidth / 8
}

// Theme Colors
object ThemeColors {
    val whiteModeWhite = Colors["#ebecd0"]
    val whiteModeBlack = Colors["#964d22"]
    val darkModeWhite = Colors["#9a9c7c"]
    val darkModeBlack = Colors["#7a3a15"]
}

object UserSettings {
    var darkMode: Boolean = false
    var autoPromote: Boolean = false
    var debugMode: Boolean = false
}

const val DEFAULT_PORT = 443
const val DEFAULT_SERVER = "chessapi.fsrb.de"
const val DEBUG_PORT = 9999
const val DEBUG_SERVER = "127.0.0.1"

val serverPort get() = if (UserSettings.debugMode) DEBUG_PORT else DEFAULT_PORT
val serverAddress get() = if (UserSettings.debugMode) DEBUG_SERVER else DEFAULT_SERVER


var wsClient: WebSocketClient? = null
suspend fun main() = Korge(
    windowSize = Size(DisplayConfig.screenWidth, DisplayConfig.screenHeight),
    backgroundColor = Colors["#4b3621"],
    quality = GameWindow.Quality.QUALITY
) {
    sceneContainer().apply {
        GameState.sceneContainer = this
        this.changeTo { Wizard() }
    }
}

var clientID = Random[1, 1000].toString()
var uniqueIdentifier: Map<String, String>? = null

class GameScene : Scene() {

    override suspend fun SContainer.sceneMain() {
        // Chessboard backgrounds
        solidRect(
            DisplayConfig.chessBoardWidth + 18, DisplayConfig.chessBoardHeight + 18, color = ThemeColors.whiteModeBlack
        ).centerOnStage()

        solidRect(
            DisplayConfig.chessBoardWidth + 10, DisplayConfig.chessBoardHeight + 10, color = ThemeColors.whiteModeWhite
        ).centerOnStage()
        solidRect(
            DisplayConfig.chessBoardWidth + 1, DisplayConfig.chessBoardHeight + 1, color = Colors.BLACK
        ).centerOnStage()

        val chessboard = container {
            position(DisplayConfig.offsetX, DisplayConfig.offsetY)
            width = DisplayConfig.chessBoardWidth
            height = DisplayConfig.chessBoardWidth
        }
        val settingsButton = image(resourcesVfs["settings.svg"].readSVG().scaled(0.5).render()) {
            zIndex(3)

            position(DisplayConfig.screenWidth * 0.8, 26)
            onClick {
                if (!GameState.settingsInForeground) showSettings()
            }
        }

        image(resourcesVfs["resign.svg"].readSVG().scaled(0.5).render()) {
            alignRightToLeftOf(settingsButton)

            zIndex(3)
            onClick {
                launch { sendResign() }
            }

        }.positionY(26)

        if (GameState.onlinePlay) {
            wsClient = WebSocketClient("wss://$serverAddress:$serverPort")
            println("Opened socket")
            uniqueIdentifier = mapOf(
                "id" to clientID,
                "color" to GameState.userIsWhite.toString(),
                "slot" to GameState.currentSlot.toString()
            )
            println("sending: ${uniqueIdentifier!!.toJson()}")
            launch { wsClient!!.send(uniqueIdentifier!!.toJson()) }

            wsClient!!.onStringMessage {
                launch { webSockerListener(it) }
            }
        }

        settingsButton.centerYBetween(DisplayConfig.offsetY, 0.0)
        initializeBoard(chessboard)
        reloadPictures()
        chessboard.addAllPieces()
    }


}

suspend fun webSockerListener(message: String) {
    println("INCOMING MESSAGE: $message")
    val map: Map<String, *>
    try {
        map = message.fromJson() as Map<String, String>
    } catch (e: Exception) {
        return
    }
    if (map.containsKey("gameOver")) {
        handleGameEnd(resign = map["resign"].toString().toBoolean(), draw = map["draw"].toString().toBoolean())
        return
    }
    if (map.containsKey("castling")) GameState.castleAttempt = true
    println("cx: ${map["cx"]}, cy: ${map["cy"]}, newX, ${map["newX"]}, newY: ${map["newY"]}")

    if (map["cx"] == null || map["cy"] == null || map["newX"] == null || map["newY"] == null) return
    val piece = findPiece(map["cx"]!!.toInt(), map["cy"]!!.toInt())
    // var piece = findPiece(4,4)
    println("cx: ${piece?.cxy}")
    piece?.doMove(map["newX"]!!.toInt(), map["newY"]!!.toInt(), true)


}


/** Check if a piece could take a king from the current position
 *  (Can also be called from simulateMove, as it sets some enemy pieces as disabled).*/
fun inCheck(piecesList: ArrayList<Piece>, fromCastling: Boolean = false): Boolean {
    GameState.whiteKingInCheck = false
    GameState.blackKingInCheck = false

    val whiteKingPosition = piecesList.find { it.kind == PieceKind.WhiteKing }!!.cxy
    val blackKingPosition = piecesList.find { it.kind == PieceKind.BlackKing }!!.cxy
    for (enemyPiece in piecesList) {
        if (enemyPiece.color == Colors.BLACK && !enemyPiece.disabled) {
            if (!GameState.whiteTurn && !fromCastling) return false

            if (enemyPiece.moveChecker(whiteKingPosition)) {/*println("White King is in check because of: ${enemyPiece.cx}, ${enemyPiece.cy}, ${enemyPiece.kind} whiteTurn")
                println(whiteKingPosition)*/
                GameState.whiteKingInCheck = true
                return true
            }
        } else if (enemyPiece.color == Colors.WHITE && !enemyPiece.disabled) {
            if (GameState.whiteTurn && !fromCastling) return false

            if (enemyPiece.moveChecker(blackKingPosition)) {/* println("Black King is in check because of: ${enemyPiece.cx}, ${enemyPiece.cy}, ${enemyPiece.kind}")
                 println(blackKingPosition)*/
                GameState.blackKingInCheck = true
                return true
            }
        }
    }

    return false
}

suspend fun handleGameEnd(resign: Boolean, draw: Boolean) {
    val text = GameState.sceneContainer.text("GAME END\nBecause of resign?\n$resign\nDraw?\n$draw", 50, Colors.RED)
    text.centerOnStage()
    delay(4000)
    GameState.sceneContainer.launch { GameState.sceneContainer.changeTo { Wizard() } }.invokeOnCompletion {
        text.removeFromParent()
        wsClient?.close()
        GameState.reset()
    }

}

suspend fun sendResign() {
    val map = uniqueIdentifier!!.toMutableMap()
    map["gameOver"] = "true"
    map["resign"] = "true"

    GameState.sceneContainer.launch { wsClient?.send(map.toJson()) }
    handleGameEnd(resign = true, draw = false)
}


suspend fun sendGameOver(draw: Boolean) {
    if (GameState.onlinePlay) {
        val map = uniqueIdentifier!!.toMutableMap()
        map["gameOver"] = "true"
        map["resign"] = "false"
        map["draw"] = draw.toString()

        GameState.sceneContainer.launch { wsClient?.send(map.toJson()) }
    }

    handleGameEnd(resign = false, draw = draw)
}
