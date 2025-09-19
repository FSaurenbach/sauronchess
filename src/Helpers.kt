import korlibs.image.color.*
import korlibs.image.format.*
import korlibs.io.file.std.*
import korlibs.korge.view.*
import korlibs.korge.view.Circle
import korlibs.korge.view.align.*
import korlibs.math.geom.*
import korlibs.math.geom.shape.*
import korlibs.math.geom.vector.*

fun removePiece(piece: Piece) {
    pieces.remove(piece)
    piece.removeFromParent()
}

fun addAllPieces(chessboard: Container) {
    // Add all pieces in right order and add them to the pieces list (white pieces are at the
    // bottom)
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

    for (piece in pieces) {
        movePiece(piece, piece.cx, piece.cy)
    }
}

/**Load bitmaps of the pieces.*/
suspend fun loadPictures() {
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

    inCheck(pieces, calledFromKing)
    val pieceOnNewPos = findPiece(newPos.first, newPos.second)
    if (piece.color == pieceOnNewPos?.color) return false
    println("Simulated move: ${piece.cx}, ${piece.cy}, inCheck: ${inCheck(pieces)} , pieceonnewpos $pieceOnNewPos")
    if (whiteTurn && piece.color == Colors.BLACK) return false
    if (!whiteTurn && piece.color == Colors.WHITE) return false
    movePiece(piece, newPos.first, newPos.second)
    pieceOnNewPos?.disabled = true
    if ((piece.color == Colors.WHITE && blackKingInCheck) || (piece.color == Colors.BLACK && whiteKingInCheck)) {
        movePiece(piece, oldPos.first, oldPos.second)
        println("move is not possible")
        return false
    }
    val stillInCheck = inCheck(pieces, calledFromKing)
    println("Simulated move: ${piece.cx}, ${piece.cy}, stillInCheck: $stillInCheck")
    movePiece(piece, oldPos.first, oldPos.second)
    pieceOnNewPos?.disabled = false
    return !stillInCheck
}

fun Container.moveIndicator(callback: @ViewDslMarker (MoveIndicator.() -> Unit) = {}): MoveIndicator = MoveIndicator().addTo(this, callback)
class MoveIndicator : Container()  {
    var cx = 0
    var cy = 0
   // private var outline: Circle = circle()
    private var circle:Circle = circle()
    private var isRed: Boolean = false

    init {


        markGrey()
        circle.zIndex = 2.0
    }
    fun markRed() {
        circle.color = Colors["#cccccc"]

        circle.fill = Colors.TRANSPARENT
        circle.stroke = Colors.RED
        circle.strokeThickness = 6.5
        //circle.alpha = 5.0
        circle.radius = 25.0
        isRed = true
    }

    fun markGrey() {

        if (isRed) {
            markRed()
            return
        }
        circle.color = Colors["#3b3b3b81"]
        circle.radius = 10.0
        circle.stroke = Colors.BLACK
        circle.strokeThickness =2.0
        isRed = false

    }

    fun markWhite() {
        circle.color = Colors.WHITE
    }
}
