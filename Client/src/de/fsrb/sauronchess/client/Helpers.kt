package de.fsrb.sauronchess.client

import korlibs.image.color.*
import korlibs.image.format.*
import korlibs.image.vector.*
import korlibs.image.vector.format.*
import korlibs.io.file.std.*
import korlibs.korge.view.*

fun conv(positionInt: Int): Int {
    return if (UserSettings.whiteOnBottom) positionInt else 63 - positionInt
}

fun Container.addAllPieces() {

    for (i in 0 until 8) {
        piece(PieceKind.WhitePawn, Colors.WHITE, conv(8 + i), isWhite = true)
    }

    piece(PieceKind.WhiteKnight, Colors.WHITE, conv(1), isWhite = true)
    piece(PieceKind.WhiteKnight, Colors.WHITE, conv(6), isWhite = true)
    piece(PieceKind.WhiteBishop, Colors.WHITE, conv(2), isWhite = true)
    piece(PieceKind.WhiteBishop, Colors.WHITE, conv(5), isWhite = true)
    piece(PieceKind.WhiteRook, Colors.WHITE, conv(0), isWhite = true)
    piece(PieceKind.WhiteQueen, Colors.WHITE, conv(3), isWhite = true)
    piece(PieceKind.WhiteRook, Colors.WHITE, conv(7), isWhite = true)
    piece(PieceKind.WhiteKing, Colors.WHITE, conv(4), isWhite = true)


    for (i in 0 until 8) {
        piece(PieceKind.BlackPawn, Colors.BLACK, conv(48 + i), isWhite = false)
    }

    piece(PieceKind.BlackKnight, Colors.BLACK, conv(57), isWhite = false)
    piece(PieceKind.BlackKnight, Colors.BLACK, conv(62), isWhite = false)
    piece(PieceKind.BlackBishop, Colors.BLACK, conv(58), isWhite = false)
    piece(PieceKind.BlackBishop, Colors.BLACK, conv(61), isWhite = false)
    piece(PieceKind.BlackRook, Colors.BLACK, conv(56), isWhite = false)
    piece(PieceKind.BlackRook, Colors.BLACK, conv(63), isWhite = false)
    piece(PieceKind.BlackQueen, Colors.BLACK, conv(59), isWhite = false)
    piece(PieceKind.BlackKing, Colors.BLACK, conv(60), isWhite = false)


    for (piece in Game.pieces) {
        boardState.pieces.add(PieceState(piece.id, piece.kind, piece.isWhite, piece.positionInt))
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

fun <T : View> T.addTo(parent: MutableList<in T>): T {
    parent += this
    return this
}
