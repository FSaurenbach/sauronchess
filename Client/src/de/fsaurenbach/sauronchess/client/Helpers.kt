package de.fsaurenbach.sauronchess.client

import korlibs.image.color.*
import korlibs.image.format.*
import korlibs.image.vector.*
import korlibs.image.vector.format.*
import korlibs.io.file.std.*
import korlibs.korge.view.*

fun removePiece(piece: Piece) {
    GameState.pieces.remove(piece)
    piece.removeFromParent()
}

fun Container.addAllPieces() {
    // Add all pieces in right order and add them to the pieces list (white pieces are at the bottom
    for (i in 0 until 8) {
        piece(PieceKind.WhitePawn, Colors.WHITE, BoardPosition(i, 6), isWhite = true)
    }
    piece(PieceKind.WhiteRook, Colors.WHITE, BoardPosition(0, 7), isWhite = true)
    piece(PieceKind.WhiteRook, Colors.WHITE, BoardPosition(7, 7), isWhite = true)
    piece(PieceKind.WhiteKnight, Colors.WHITE, BoardPosition(1, 7), isWhite = true)
    piece(PieceKind.WhiteKnight, Colors.WHITE, BoardPosition(6, 7), isWhite = true)
    piece(PieceKind.WhiteBishop, Colors.WHITE, BoardPosition(2, 7), isWhite = true)
    piece(PieceKind.WhiteBishop, Colors.WHITE, BoardPosition(5, 7), isWhite = true)
    piece(PieceKind.WhiteQueen, Colors.WHITE, BoardPosition(3, 7), isWhite = true)
    piece(PieceKind.WhiteKing, Colors.WHITE, BoardPosition(4, 7), isWhite = true)

    for (i in 0 until 8) {
        piece(PieceKind.BlackPawn, Colors.BLACK, BoardPosition(i, 1), isWhite = false)
    }
    piece(PieceKind.BlackRook, Colors.BLACK, BoardPosition(0, 0), isWhite = false)
    piece(PieceKind.BlackRook, Colors.BLACK, BoardPosition(7, 0), isWhite = false)
    piece(PieceKind.BlackKnight, Colors.BLACK, BoardPosition(1, 0), isWhite = false)
    piece(PieceKind.BlackKnight, Colors.BLACK, BoardPosition(6, 0), isWhite = false)
    piece(PieceKind.BlackBishop, Colors.BLACK, BoardPosition(2, 0), isWhite = false)
    piece(PieceKind.BlackBishop, Colors.BLACK, BoardPosition(5, 0), isWhite = false)
    piece(PieceKind.BlackQueen, Colors.BLACK, BoardPosition(3, 0), isWhite = false)
    piece(PieceKind.BlackKing, Colors.BLACK, BoardPosition(4, 0), isWhite = false)

    for (piece in GameState.pieces) {
        movePiece(piece, piece.currentPos.x, piece.currentPos.y)
    }
}

/**Load bitmaps of the pieces.*/
suspend fun reloadPictures() {
    // Load pictures
    Images.whitePawn = resourcesVfs["wikipedia/white_pieces/Chess_plt45.svg"].readSVG().scaled(2.2, 2.0).render()
    Images.whiteRook = resourcesVfs["wikipedia/white_pieces/Chess_rlt45.svg"].readSVG().scaled(2.0, 2.0).render()
    Images.whiteKnight = resourcesVfs["wikipedia/white_pieces/Chess_nlt45.svg"].readSVG().scaled(2.0, 2.0).render()
    Images.whiteBishop = resourcesVfs["wikipedia/white_pieces/Chess_blt45.svg"].readSVG().scaled(2.0, 2.0).render()
    Images.whiteQueen = resourcesVfs["wikipedia/white_pieces/Chess_qlt45.svg"].readSVG().scaled(2.0, 2.0).render()
    Images.whiteKing = resourcesVfs["wikipedia/white_pieces/Chess_klt45.svg"].readSVG().scaled(2.0, 2.0).render()

    Images.blackPawn = resourcesVfs["wikipedia/black_pieces/Chess_pdt45.svg"].readSVG().scaled(2.2, 2.0).render()
    Images.blackRook = resourcesVfs["wikipedia/black_pieces/Chess_rdt45.svg"].readSVG().scaled(2.0, 2.0).render()
    Images.blackKnight = resourcesVfs["wikipedia/black_pieces/Chess_ndt45.svg"].readSVG().scaled(2.0, 2.0).render()
    Images.blackBishop = resourcesVfs["wikipedia/black_pieces/Chess_bdt45.svg"].readSVG().scaled(2.0, 2.0).render()
    Images.blackQueen = resourcesVfs["wikipedia/black_pieces/Chess_qdt45.svg"].readSVG().scaled(2.0, 2.0).render()
    Images.blackKing = resourcesVfs["wikipedia/black_pieces/Chess_kdt45.svg"].readSVG().scaled(2.0, 2.0).render()
    Images.creditsSvg = resourcesVfs["credits.png"].readBitmap()
}

/** Simulates a move for showing available moves.*/
fun simulateMove(
    oldPos: BoardPosition, newPos: BoardPosition, piece: Piece, calledFromKing: Boolean = false
): Boolean {
    if (!calledFromKing) {
        if (!piece.moveChecker(newPos)) {
            return false
        }
    }

    inCheck(GameState.pieces, calledFromKing)
    val pieceOnNewPos = findPiece(newPos.x, newPos.y)
    if (piece.color == pieceOnNewPos?.color) return false

//    println("Simulated move: ${piece.cx}, ${piece.cy}, inCheck: ${inCheck(GameState.pieces)} , pieceonnewpos $pieceOnNewPos")
    if (GameState.whiteTurn && piece.color == Colors.BLACK) return false
    if (!GameState.whiteTurn && piece.color == Colors.WHITE) return false
    movePiece(piece, newPos.x, newPos.y)
    pieceOnNewPos?.disabled = true
    if ((piece.color == Colors.WHITE && GameState.blackKingInCheck) || (piece.color == Colors.BLACK && GameState.whiteKingInCheck)) {
        movePiece(piece, oldPos.x, oldPos.y)
//        println("move is not possible")
        return false
    }
    val stillInCheck = inCheck(GameState.pieces, calledFromKing)
//    println("Simulated move: ${piece.cx}, ${piece.cy}, stillInCheck: $stillInCheck")
    movePiece(piece, oldPos.x, oldPos.y)
    pieceOnNewPos?.disabled = false
    return !stillInCheck
}


fun <T : View> T.centerYBetween(y1: Double, y2: Double): T {
    this.y = (y2 + y1 - this.scaledHeight) / 2
    return this
}


fun <T : View> T.addTo(parent: Container): T {
    parent += this
    return this
}

fun <T : View> T.addTo(parent: MutableList<in T>) {
    parent.add(this)

}
