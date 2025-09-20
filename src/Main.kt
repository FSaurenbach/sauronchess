import korlibs.image.bitmap.*
import korlibs.image.color.*
import korlibs.korge.*
import korlibs.korge.scene.*
import korlibs.korge.view.*
import korlibs.korge.view.align.*
import korlibs.math.geom.*

var sCont: SceneContainer? = null
var cells = ArrayList<Cell>()
var pieces = ArrayList<Piece>()
var whitePawn: NativeImage? = null
var whiteRook: NativeImage? = null
var whiteKnight: NativeImage? = null
var whiteBishop: NativeImage? = null
var whiteQueen: NativeImage? = null
var whiteKing: NativeImage? = null
var whiteCastlingLegal = true
var blackCastlingLegal = true
var blackPawn: NativeImage? = null
var blackRook: NativeImage? = null
var blackKnight: NativeImage? = null
var blackBishop: NativeImage? = null
var blackQueen: NativeImage? = null
var blackKing: NativeImage? = null
var whiteKingInCheck = false
var blackKingInCheck = false
var whiteTurn = true
var screenSizeX = 800
var screenSizeY = 800
var chessBoardX = 512.0
var chessBoardY = 512.0
var offsetX = (screenSizeX - chessBoardX) / 2
var offsetY = (screenSizeY - chessBoardY) / 2
var cellColorWhite = Colors["#ebecd0"]
var cellColorBlack = Colors["#964d22"]
suspend fun main() = Korge(windowSize = Size(screenSizeX, screenSizeY), backgroundColor = Colors["#4b3621"]) {
    val sceneContainer = sceneContainer()
    sCont = sceneContainer
    sceneContainer.changeTo { GameScene() }
}

class GameScene : Scene() {

    override suspend fun SContainer.sceneMain() {
        solidRect(chessBoardX + 18, chessBoardY + 18, color = cellColorBlack).centerOnStage()

        solidRect(chessBoardX + 10, chessBoardY + 10, color = cellColorWhite).centerOnStage()
        solidRect(chessBoardX + 1, chessBoardY + 1, color = Colors.BLACK).centerOnStage()

        val chessboard = container {
            position(offsetX, offsetY)
            width = chessBoardX
            height = chessBoardY
        }
        initializeBoard(chessboard)
        loadPictures()
        addAllPieces(chessboard)

    }


}

/** Check if a piece could take a king from the current position
 *  (Can also be called from simulateMove, as it sets some enemy pieces as disabled).*/
fun inCheck(piecesList: ArrayList<Piece>, fromCastling: Boolean = false): Boolean {
    whiteKingInCheck = false
    blackKingInCheck = false


    val whiteKingPosition = piecesList.find { it.kind == PieceKind.WhiteKing }!!.cxy()
    val blackKingPosition = piecesList.find { it.kind == PieceKind.BlackKing }!!.cxy()
    for (enemyPiece in piecesList) {
        if (enemyPiece.color == Colors.BLACK && !enemyPiece.disabled) {
            if (!whiteTurn && !fromCastling) return false
            val enemyPos = Pair(enemyPiece.cx, enemyPiece.cy)

            if (enemyPiece.moveChecker(enemyPos, whiteKingPosition)) {
                println("White King is in check because of: ${enemyPiece.cx}, ${enemyPiece.cy}, ${enemyPiece.kind} whiteTurn")
                println(whiteKingPosition)
                whiteKingInCheck = true
                return true
            }
        } else if (enemyPiece.color == Colors.WHITE && !enemyPiece.disabled) {
            if (whiteTurn && !fromCastling) return false
            val enemyPos = Pair(enemyPiece.cx, enemyPiece.cy)
            if (enemyPiece.moveChecker(enemyPos, blackKingPosition)) {
                println("Black King is in check because of: ${enemyPiece.cx}, ${enemyPiece.cy}, ${enemyPiece.kind}")
                println(blackKingPosition)
                blackKingInCheck = true
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
    if ((whiteTurn && piece.color == Colors.BLACK) || (!whiteTurn && piece.color == Colors.WHITE)) return false

    inCheck(pieces)
    val pieceOnNewPos = findPiece(
        newPos.first,
        newPos.second
    )
    /*println("Simulated move: ${piece.cx}, ${piece.cy}, inCheck: ${inCheck(pieces)} , pieceonnewpos $pieceOnNewPos")*/

    movePiece(piece, newPos.first, newPos.second)
    pieceOnNewPos?.disabled = true
    inCheck(pieces)
    if ((piece.color == Colors.BLACK && blackKingInCheck) || (piece.color == Colors.WHITE && whiteKingInCheck)) {
        movePiece(piece, oldPos.first, oldPos.second)
        println("King will (still) be in check after this move!")
        return false
    }
    inCheck(pieces)
    println("Doing move: ${piece.cx}, ${piece.cy}, (still) inCheck: ${inCheck(pieces)}")
    piece.cx = newPos.first
    piece.cy = newPos.second
    pieceOnNewPos?.disabled = false
    return true
}
