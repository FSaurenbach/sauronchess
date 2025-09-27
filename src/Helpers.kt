import korlibs.image.color.*
import korlibs.image.format.*
import korlibs.io.file.std.*
import korlibs.korge.view.*
import korlibs.math.geom.*

/**
 * Remove a piece from the board and from the pieces list.
 */
fun removePiece(piece: Piece) {
    pieces.remove(piece)
    piece.removeFromParent()
}

/**
 * Add all pieces to the board in their starting positions.
 */
fun addAllPieces(chessboard: Container) {
    // Add white pieces (bottom of board)
    for (i in 0 until 8) {
        chessboard.piece(PieceKind.WhitePawn, Colors.WHITE, i, 6, isWhite = true)
    }
    chessboard.piece(PieceKind.WhiteRook, Colors.WHITE, 0, 7, isWhite = true)
    chessboard.piece(PieceKind.WhiteRook, Colors.WHITE, 7, 7, isWhite = true)
    chessboard.piece(PieceKind.WhiteKnight, Colors.WHITE, 1, 7, isWhite = true)
    chessboard.piece(PieceKind.WhiteKnight, Colors.WHITE, 6, 7, isWhite = true)
    chessboard.piece(PieceKind.WhiteBishop, Colors.WHITE, 2, 7, isWhite = true)
    chessboard.piece(PieceKind.WhiteBishop, Colors.WHITE, 5, 7, isWhite = true)
    chessboard.piece(PieceKind.WhiteQueen, Colors.WHITE, 3, 7, isWhite = true)
    chessboard.piece(PieceKind.WhiteKing, Colors.WHITE, 4, 7, isWhite = true)

    // Add black pieces (top of board)
    for (i in 0 until 8) {
        chessboard.piece(PieceKind.BlackPawn, Colors.BLACK, i, 1, isWhite = false)
    }
    chessboard.piece(PieceKind.BlackRook, Colors.BLACK, 0, 0, isWhite = false)
    chessboard.piece(PieceKind.BlackRook, Colors.BLACK, 7, 0, isWhite = false)
    chessboard.piece(PieceKind.BlackKnight, Colors.BLACK, 1, 0, isWhite = false)
    chessboard.piece(PieceKind.BlackKnight, Colors.BLACK, 6, 0, isWhite = false)
    chessboard.piece(PieceKind.BlackBishop, Colors.BLACK, 2, 0, isWhite = false)
    chessboard.piece(PieceKind.BlackBishop, Colors.BLACK, 5, 0, isWhite = false)
    chessboard.piece(PieceKind.BlackQueen, Colors.BLACK, 3, 0, isWhite = false)
    chessboard.piece(PieceKind.BlackKing, Colors.BLACK, 4, 0, isWhite = false)
}

/**
 * Load all piece bitmap images from resources.
 */
suspend fun loadPictures() {
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
}

/**
 * Simulates a move for showing available moves and move validation.
 * @param oldPos The current position of the piece
 * @param newPos The target position for the piece
 * @param piece The piece to move
 * @param calledFromKing Whether this is called during king move validation
 * @return true if the move is legal, false otherwise
 */
fun simulateMove(
    oldPos: Pair<Int, Int>,
    newPos: Pair<Int, Int>, 
    piece: Piece, 
    calledFromKing: Boolean = false
): Boolean {
    if (!calledFromKing && !piece.moveChecker(oldPos, newPos)) {
        return false
    }

    inCheck(pieces, calledFromKing)
    val pieceOnNewPos = findPiece(newPos.first, newPos.second)
    if (piece.color == pieceOnNewPos?.color) return false
    if (whiteTurn && piece.color == Colors.BLACK) return false
    if (!whiteTurn && piece.color == Colors.WHITE) return false
    
    movePiece(piece, newPos.first, newPos.second)
    pieceOnNewPos?.disabled = true
    
    if ((piece.color == Colors.WHITE && blackKingInCheck) || (piece.color == Colors.BLACK && whiteKingInCheck)) {
        movePiece(piece, oldPos.first, oldPos.second)
        return false
    }
    
    val stillInCheck = inCheck(pieces, calledFromKing)
    movePiece(piece, oldPos.first, oldPos.second)
    pieceOnNewPos?.disabled = false
    return !stillInCheck
}

