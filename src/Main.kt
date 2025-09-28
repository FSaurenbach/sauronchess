import korlibs.image.bitmap.*
import korlibs.image.color.*
import korlibs.image.vector.*
import korlibs.image.vector.format.*
import korlibs.io.file.std.*
import korlibs.korge.*
import korlibs.korge.input.*
import korlibs.korge.scene.*
import korlibs.korge.view.*
import korlibs.korge.view.align.*
import korlibs.math.geom.*
import kotlin.properties.*

object GameState {
    var sceneContainer: SceneContainer by Delegates.notNull()
    val cells = ArrayList<Cell>()
    val pieces = ArrayList<Piece>()
    var whiteCastlingLegal = true
    var blackCastlingLegal = true
    var whiteKingInCheck = false
    var blackKingInCheck = false
    var whiteTurn = true
}

object PieceImages {
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
    val offsetY = (screenHeight - chessBoardHeight) / 2
}

// Theme Colors
object ThemeColors {
    val whiteModeWhite = Colors["#ebecd0"]
    val whiteModeBlack = Colors["#964d22"]
    val darkModeWhite = Colors["#9a9c7c"]
    val darkModeBlack = Colors["#7a3a15"]
}

suspend fun main() = Korge(
    windowSize = Size(DisplayConfig.screenWidth, DisplayConfig.screenHeight),
    backgroundColor = Colors["#4b3621"]
) {
    val sceneContainer = sceneContainer()
    GameState.sceneContainer = sceneContainer
    sceneContainer.changeTo { GameScene() }
}

var userSettings = Options()

class GameScene : Scene() {

    override suspend fun SContainer.sceneMain() {
        // Chessboard background(s)
        solidRect(
            DisplayConfig.chessBoardWidth + 18,
            DisplayConfig.chessBoardHeight + 18,
            color = ThemeColors.whiteModeBlack
        ).centerOnStage()

        solidRect(
            DisplayConfig.chessBoardWidth + 10,
            DisplayConfig.chessBoardHeight + 10,
            color = ThemeColors.whiteModeWhite
        ).centerOnStage()
        solidRect(
            DisplayConfig.chessBoardWidth + 1,
            DisplayConfig.chessBoardHeight + 1,
            color = Colors.BLACK
        ).centerOnStage()

        val chessboard = container {
            position(DisplayConfig.offsetX, DisplayConfig.offsetY)
            width = DisplayConfig.chessBoardWidth
            height = DisplayConfig.chessBoardWidth
        }
        val settingsButton = image(resourcesVfs["settings.svg"].readSVG().scaled(1, 1).render()) {
            zIndex(3)
            position(DisplayConfig.screenWidth * 0.8, DisplayConfig.offsetY / 2)

            scale(0.15)
            onClick {
                if (!settingsInForeground) showSettings()
            }
        }

        settingsButton.centerYBetween(DisplayConfig.offsetY, 0.0)
        initializeBoard(chessboard)
        reloadPictures()
        addAllPieces(chessboard)

    }


}

/** Check if a piece could take a king from the current position
 *  (Can also be called from simulateMove, as it sets some enemy pieces as disabled).*/
fun inCheck(piecesList: ArrayList<Piece>, fromCastling: Boolean = false): Boolean {
    GameState.whiteKingInCheck = false
    GameState.blackKingInCheck = false

    val whiteKingPosition = piecesList.find { it.kind == PieceKind.WhiteKing }!!.cxy()
    val blackKingPosition = piecesList.find { it.kind == PieceKind.BlackKing }!!.cxy()
    for (enemyPiece in piecesList) {
        if (enemyPiece.color == Colors.BLACK && !enemyPiece.disabled) {
            if (!GameState.whiteTurn && !fromCastling) return false
            val enemyPos = Pair(enemyPiece.cx, enemyPiece.cy)

            if (enemyPiece.moveChecker(enemyPos, whiteKingPosition)) {
                println("White King is in check because of: ${enemyPiece.cx}, ${enemyPiece.cy}, ${enemyPiece.kind} whiteTurn")
                println(whiteKingPosition)
                GameState.whiteKingInCheck = true
                return true
            }
        } else if (enemyPiece.color == Colors.WHITE && !enemyPiece.disabled) {
            if (GameState.whiteTurn && !fromCastling) return false
            val enemyPos = Pair(enemyPiece.cx, enemyPiece.cy)

            if (enemyPiece.moveChecker(enemyPos, blackKingPosition)) {
                println("Black King is in check because of: ${enemyPiece.cx}, ${enemyPiece.cy}, ${enemyPiece.kind}")
                println(blackKingPosition)
                GameState.blackKingInCheck = true
                return true
            }
        }
    }

    return false
}

/** Execute move after it has been verified by moveChecker, returns false if a king will be in check after move!*/
fun doMove(
    piece: Piece,
    oldPos: Pair<Int, Int>,
    newPos: Pair<Int, Int>,
): Boolean {
    if ((GameState.whiteTurn && piece.color == Colors.BLACK) || (!GameState.whiteTurn && piece.color == Colors.WHITE)) return false

    inCheck(GameState.pieces)
    val pieceOnNewPos = findPiece(newPos.first, newPos.second)

    movePiece(piece, newPos.first, newPos.second)
    pieceOnNewPos?.disabled = true
    inCheck(GameState.pieces)
    if ((piece.color == Colors.BLACK && GameState.blackKingInCheck) || (piece.color == Colors.WHITE && GameState.whiteKingInCheck)) {
        movePiece(piece, oldPos.first, oldPos.second)
        println("King will (still) be in check after this move!")
        return false
    }
    inCheck(GameState.pieces)
    println("Doing move: ${piece.cx}, ${piece.cy}, (still) inCheck: ${inCheck(GameState.pieces)}")
    piece.cx = newPos.first
    piece.cy = newPos.second
    pieceOnNewPos?.disabled = false
    return true
}
