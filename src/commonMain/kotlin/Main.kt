@file:Suppress("ktlint:standard:no-wildcard-imports")

import korlibs.image.bitmap.*
import korlibs.image.color.*
import korlibs.image.format.*
import korlibs.io.file.std.*
import korlibs.korge.*
import korlibs.korge.input.*
import korlibs.korge.scene.*
import korlibs.korge.view.*
import korlibs.korge.view.align.*
import korlibs.math.geom.*

var cells = ArrayList<Cell>()
var pieces = ArrayList<Piece>()
var whitePawn: Bitmap? = null
var whiteRook: Bitmap? = null
var whiteKnight: Bitmap? = null
var whiteBishop: Bitmap? = null
var whiteQueen: Bitmap? = null
var whiteKing: Bitmap? = null
var whiteCastlingLegal = true
var blackCastlingLegal = true
var blackPawn: Bitmap? = null
var blackRook: Bitmap? = null
var blackKnight: Bitmap? = null
var blackBishop: Bitmap? = null
var blackQueen: Bitmap? = null
var blackKing: Bitmap? = null
var whiteKingInCheck = false
var blackKingInCheck = false
var whiteTurn = true
var screenSizeX = 800
var screenSizeY = 800
var chessBoardX = 512
var chessBoardY = 512
var offsetX = (screenSizeX - chessBoardX) / 2
var offsetY = (screenSizeY - chessBoardY) / 2

suspend fun main() = Korge(windowSize = Size(screenSizeX, screenSizeY), backgroundColor = Colors["#4b3621"]) {
    val sceneContainer = sceneContainer()
    sceneContainer.changeTo { GameScene() }
}

class GameScene : Scene() {

    override suspend fun SContainer.sceneMain() {

        val chessboard = container {
            position(offsetX, offsetY)
            width = chessBoardX.toDouble()
            height = chessBoardY.toDouble()
            println("Schachbrett initialized")
            initializeBoard(this)
        }

        // Load pictures
        whitePawn = resourcesVfs["w_pawn.png"].readBitmap()
        whiteRook = resourcesVfs["w_rook.png"].readBitmap()
        whiteKnight = resourcesVfs["w_knight.png"].readBitmap()
        whiteBishop = resourcesVfs["w_bishop.png"].readBitmap()
        whiteQueen = resourcesVfs["w_queen.png"].readBitmap()
        whiteKing = resourcesVfs["w_king.png"].readBitmap()

        blackPawn = resourcesVfs["b_pawn.png"].readBitmap()
        blackRook = resourcesVfs["b_rook.png"].readBitmap()
        blackKnight = resourcesVfs["b_knight.png"].readBitmap()
        blackBishop = resourcesVfs["b_bishop.png"].readBitmap()
        blackQueen = resourcesVfs["b_queen.png"].readBitmap()
        blackKing = resourcesVfs["b_king.png"].readBitmap()



        // Add the shadow and play button
        val shadow = solidRect(chessBoardX, chessBoardY, Colors["#000000"].withAd(0.5)) {
            position(offsetX, offsetY)
            visible = true
        }
        val title: Text = text("Chess") {
            textSize = 50.0
            centerXOnStage()
            y = 20.0
            color = Colors.WHITE
        }

        roundRect(Size(title.width + 20, title.height + 20), RectCorners(10), Colors["#3b7d88"]) {
            this.zIndex(-1)
        }.centerOn(title)
        val playButtonBackground = roundRect(Size(200, 80), RectCorners(20), Colors["#3b7d88"]) {
            centerOn(chessboard)
        }

        text("Play") {
            color = Colors.WHITE
            textSize = 40.0
            centerOn(playButtonBackground)

            onClick {
                shadow.visible = false
                playButtonBackground.visible = false
                this.visible = false
                addAllPieces(chessboard)
            }
        }
    }


}

fun inCheck(piecesList: ArrayList<Piece>): Boolean {
    whiteKingInCheck = false
    blackKingInCheck = false
    var whiteKingPosition = Pair(0, 0)
    var blackKingPosition = Pair(0, 0)
    for (piece in piecesList) {
        if (piece.kind == PieceKind.WhiteKing) {
            whiteKingPosition = Pair(piece.cx, piece.cy)
        } else if (piece.kind == PieceKind.BlackKing) {
            blackKingPosition = Pair(piece.cx, piece.cy)
        }
    }
    for (piece in piecesList) {
        if (piece.color == Colors.WHITE && !piece.disabled) {
            val oldPos = Pair(piece.cx, piece.cy)
            if (piece.moveChecker(oldPos, blackKingPosition)) {
                println("true: ${piece.cx}, ${piece.cy}, ${piece.kind}")
                println(blackKingPosition)
                blackKingInCheck = true
                return true
            }
        }
        if (piece.color == Colors.BLACK && !piece.disabled) {
            val oldPos = Pair(piece.cx, piece.cy)

            if (piece.moveChecker(oldPos, whiteKingPosition)) {
                println("White King is in check because of: ${piece.cx}, ${piece.cy}, ${piece.kind}")
                println(whiteKingPosition)
                whiteKingInCheck = true
                return true
            }
        }
    }

    return false
}

@Suppress("SuspiciousIndentation")
fun doMove(
    piece: Piece,
    oldPos: Pair<Int, Int>,
    newPos: Pair<Int, Int>,
): Boolean {
    inCheck(pieces)
    val pieceOnNewPos = findPiece(newPos.first, newPos.second)
    println("Simulated move: ${piece.cx}, ${piece.cy}, inCheck: ${inCheck(pieces)} , pieceonnewpos $pieceOnNewPos")
    if (whiteTurn && piece.color == Colors.BLACK) return false
    if (!whiteTurn && piece.color == Colors.WHITE) return false
        movePiece(piece, newPos.first, newPos.second)
        pieceOnNewPos?.disabled = true
    inCheck(pieces)
    if ((piece.color == Colors.BLACK && blackKingInCheck) || (piece.color == Colors.WHITE && whiteKingInCheck)) {
        movePiece(piece, oldPos.first, oldPos.second)
        println("move is not possible")
        return false
    }
    inCheck(pieces)
    println("Simulated move: ${piece.cx}, ${piece.cy}, stillInCheck: ${inCheck(pieces)}")
    piece.cx = newPos.first
    piece.cy = newPos.second
    pieceOnNewPos?.disabled = false
    return true
}
