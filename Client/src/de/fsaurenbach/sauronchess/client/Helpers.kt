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

    for (i in 0 until 8) {
        piece(PieceKind.WhitePawn, Colors.WHITE, 8 + i, isWhite =  true)
    }

    piece(PieceKind.WhiteKnight, Colors.WHITE, 1, isWhite =  true)
    piece(PieceKind.WhiteKnight, Colors.WHITE, 6, isWhite =  true)
    piece(PieceKind.WhiteBishop, Colors.WHITE, 2, isWhite =  true)
    piece(PieceKind.WhiteBishop, Colors.WHITE, 5, isWhite =  true)
    piece(PieceKind.WhiteRook, Colors.WHITE, 0, isWhite =  true)
    piece(PieceKind.WhiteQueen, Colors.WHITE, 3, isWhite =  true)
    piece(PieceKind.WhiteRook, Colors.WHITE, 7, isWhite =  true)
    piece(PieceKind.WhiteKing, Colors.WHITE, 4, isWhite =  true)


    for (i in 0 until 8) {
        piece(PieceKind.BlackPawn, Colors.BLACK, 48 + i, isWhite = false)
    }

    piece(PieceKind.BlackKnight, Colors.BLACK, 57, isWhite = false)
    piece(PieceKind.BlackKnight, Colors.BLACK, 62, isWhite = false)
    piece(PieceKind.BlackBishop, Colors.BLACK, 58, isWhite = false)
    piece(PieceKind.BlackBishop, Colors.BLACK, 61, isWhite = false)
    piece(PieceKind.BlackRook, Colors.BLACK, 56, isWhite = false)
    piece(PieceKind.BlackRook, Colors.BLACK, 63, isWhite = false)
    piece(PieceKind.BlackQueen, Colors.BLACK, 59, isWhite = false)
    piece(PieceKind.BlackKing, Colors.BLACK, 60, isWhite = false)


    for (piece in GameState.pieces) {
        boardState.pieces.add(PieceState(piece.id, piece.kind, piece.color, piece.positionInt))
        movePiece(piece, piece.positionInt)
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
