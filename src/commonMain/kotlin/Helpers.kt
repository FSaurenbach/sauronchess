import korlibs.image.color.*
import korlibs.korge.view.*

fun removePiece(piece: Piece) {
    pieces.remove(piece)
    piece.removeFromParent()
}
fun addAllPieces(cont: Container) {
    // Add all pieces in right order and add them to the pieces list (white pieces are at the
    // bottom)
    for (i in 0 until 8) {
        cont.piece(PieceKind.WhitePawn, Colors.WHITE, i, 6, isWhite = true)
    }
    cont.piece(PieceKind.WhiteRook, Colors.WHITE, 0, 7, isWhite = true)
    cont.piece(PieceKind.WhiteRook, Colors.WHITE, 7, 7, isWhite = true)
    cont.piece(PieceKind.WhiteKnight, Colors.WHITE, 1, 7, isWhite = true)
    cont.piece(PieceKind.WhiteKnight, Colors.WHITE, 6, 7, isWhite = true)
    cont.piece(PieceKind.WhiteBishop, Colors.WHITE, 2, 7, isWhite = true)
    cont.piece(PieceKind.WhiteBishop, Colors.WHITE, 5, 7, isWhite = true)
    cont.piece(PieceKind.WhiteQueen, Colors.WHITE, 3, 7, isWhite = true)
    cont.piece(PieceKind.WhiteKing, Colors.WHITE, 4, 7, isWhite = true)

    for (i in 0 until 8) {
        cont.piece(PieceKind.BlackPawn, Colors.BLACK, i, 1, isWhite = false)
    }
    cont.piece(PieceKind.BlackRook, Colors.BLACK, 0, 0, isWhite = false)
    cont.piece(PieceKind.BlackRook, Colors.BLACK, 7, 0, isWhite = false)
    cont.piece(PieceKind.BlackKnight, Colors.BLACK, 1, 0, isWhite = false)
    cont.piece(PieceKind.BlackKnight, Colors.BLACK, 6, 0, isWhite = false)
    cont.piece(PieceKind.BlackBishop, Colors.BLACK, 2, 0, isWhite = false)
    cont.piece(PieceKind.BlackBishop, Colors.BLACK, 5, 0, isWhite = false)
    cont.piece(PieceKind.BlackQueen, Colors.BLACK, 3, 0, isWhite = false)
    cont.piece(PieceKind.BlackKing, Colors.BLACK, 4, 0, isWhite = false)
}


