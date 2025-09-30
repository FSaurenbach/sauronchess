import korlibs.image.color.*
import korlibs.image.format.*
import korlibs.image.vector.*
import korlibs.image.vector.format.*
import korlibs.io.file.std.*
import korlibs.korge.view.*
import kotlin.properties.*

fun removePiece(piece: Piece) {
    GameState.pieces.remove(piece)
    piece.removeFromParent()
}

fun <chessboard : Container> chessboard.addAllPieces() {

    // Add all pieces in right order and add them to the pieces list (white pieces are at the bottom
    for (i in 0 until 8) {
        piece(PieceKind.WhitePawn, Colors.WHITE, i, 6, isWhite = true)
    }
    piece(PieceKind.WhiteRook, Colors.WHITE, 0, 7, isWhite = true)
    piece(PieceKind.WhiteRook, Colors.WHITE, 7, 7, isWhite = true)
    piece(PieceKind.WhiteKnight, Colors.WHITE, 1, 7, isWhite = true)
    piece(PieceKind.WhiteKnight, Colors.WHITE, 6, 7, isWhite = true)
    piece(PieceKind.WhiteBishop, Colors.WHITE, 2, 7, isWhite = true)
    piece(PieceKind.WhiteBishop, Colors.WHITE, 5, 7, isWhite = true)
    piece(PieceKind.WhiteQueen, Colors.WHITE, 3, 7, isWhite = true)
    piece(PieceKind.WhiteKing, Colors.WHITE, 4, 7, isWhite = true)

    for (i in 0 until 8) {
        piece(PieceKind.BlackPawn, Colors.BLACK, i, 1, isWhite = false)
    }
    piece(PieceKind.BlackRook, Colors.BLACK, 0, 0, isWhite = false)
    piece(PieceKind.BlackRook, Colors.BLACK, 7, 0, isWhite = false)
    piece(PieceKind.BlackKnight, Colors.BLACK, 1, 0, isWhite = false)
    piece(PieceKind.BlackKnight, Colors.BLACK, 6, 0, isWhite = false)
    piece(PieceKind.BlackBishop, Colors.BLACK, 2, 0, isWhite = false)
    piece(PieceKind.BlackBishop, Colors.BLACK, 5, 0, isWhite = false)
    piece(PieceKind.BlackQueen, Colors.BLACK, 3, 0, isWhite = false)
    piece(PieceKind.BlackKing, Colors.BLACK, 4, 0, isWhite = false)

    for (piece in GameState.pieces) {
        movePiece(piece, piece.cx, piece.cy)
    }
}

/**Load bitmaps of the pieces.*/
suspend fun reloadPictures() {
    // Load pictures
    PieceImages.whitePawn = resourcesVfs["wikipedia/white_pieces/Chess_plt45.svg"].readSVG().scaled(2.2, 2.0).render()
    PieceImages.whiteRook = resourcesVfs["wikipedia/white_pieces/Chess_rlt45.svg"].readSVG().scaled(2.0, 2.0).render()
    PieceImages.whiteKnight = resourcesVfs["wikipedia/white_pieces/Chess_nlt45.svg"].readSVG().scaled(2.0, 2.0).render()
    PieceImages.whiteBishop = resourcesVfs["wikipedia/white_pieces/Chess_blt45.svg"].readSVG().scaled(2.0, 2.0).render()
    PieceImages.whiteQueen = resourcesVfs["wikipedia/white_pieces/Chess_qlt45.svg"].readSVG().scaled(2.0, 2.0).render()
    PieceImages.whiteKing = resourcesVfs["wikipedia/white_pieces/Chess_klt45.svg"].readSVG().scaled(2.0, 2.0).render()

    PieceImages.blackPawn = resourcesVfs["wikipedia/black_pieces/Chess_pdt45.svg"].readSVG().scaled(2.2, 2.0).render()
    PieceImages.blackRook = resourcesVfs["wikipedia/black_pieces/Chess_rdt45.svg"].readSVG().scaled(2.0, 2.0).render()
    PieceImages.blackKnight = resourcesVfs["wikipedia/black_pieces/Chess_ndt45.svg"].readSVG().scaled(2.0, 2.0).render()
    PieceImages.blackBishop = resourcesVfs["wikipedia/black_pieces/Chess_bdt45.svg"].readSVG().scaled(2.0, 2.0).render()
    PieceImages.blackQueen = resourcesVfs["wikipedia/black_pieces/Chess_qdt45.svg"].readSVG().scaled(2.0, 2.0).render()
    PieceImages.blackKing = resourcesVfs["wikipedia/black_pieces/Chess_kdt45.svg"].readSVG().scaled(2.0, 2.0).render()
    PieceImages.creditsSvg = resourcesVfs["credits.png"].readBitmap()
}

/** Simulates a move for showing available moves.*/
fun simulateMove(
    oldPos: Pair<Int, Int>, newPos: Pair<Int, Int>, piece: Piece, calledFromKing: Boolean = false
): Boolean {
    if (!calledFromKing) if (!piece.moveChecker(
            Pair(oldPos.first, oldPos.second), Pair(newPos.first, newPos.second)
        )
    ) {
        return false
    }

    inCheck(GameState.pieces, calledFromKing)
    val pieceOnNewPos = findPiece(newPos.first, newPos.second)
    if (piece.color == pieceOnNewPos?.color) return false
//    println("Simulated move: ${piece.cx}, ${piece.cy}, inCheck: ${inCheck(GameState.pieces)} , pieceonnewpos $pieceOnNewPos")
    if (GameState.whiteTurn && piece.color == Colors.BLACK) return false
    if (!GameState.whiteTurn && piece.color == Colors.WHITE) return false
    movePiece(piece, newPos.first, newPos.second)
    pieceOnNewPos?.disabled = true
    if ((piece.color == Colors.WHITE && GameState.blackKingInCheck) || (piece.color == Colors.BLACK && GameState.whiteKingInCheck)) {
        movePiece(piece, oldPos.first, oldPos.second)
//        println("move is not possible")
        return false
    }
    val stillInCheck = inCheck(GameState.pieces, calledFromKing)
//    println("Simulated move: ${piece.cx}, ${piece.cy}, stillInCheck: $stillInCheck")
    movePiece(piece, oldPos.first, oldPos.second)
    pieceOnNewPos?.disabled = false
    return !stillInCheck
}



fun <T : View> T.centerYBetween(y1: Double, y2: Double): T {
    this.y = (y2 + y1 - this.scaledHeight) / 2
    return this
}

var settingsContainer: Container by Delegates.notNull()
var settingsInForeground = false
var aboutPageInForeground = false


data class Options(var darkMode: Boolean = false, var autoPromote: Boolean = false)


