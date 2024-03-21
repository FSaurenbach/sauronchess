import korlibs.image.color.*
import korlibs.korge.render.*
import korlibs.korge.scene.*
import korlibs.korge.view.*
import korlibs.math.geom.*
import kotlin.math.*

/** Enum class representing the kinds of chess pieces. */
enum class PieceKind {
    WhitePawn,
    BlackPawn,
    WhiteRook,
    BlackRook,
    WhiteKnight,
    BlackKnight,
    WhiteBishop,
    BlackBishop,
    WhiteQueen,
    BlackQueen,
    WhiteKing,
    BlackKing
}

/**
 * Decodes the position of a cell represented by a Point into x and y coordinates.
 *
 * @param cxy The Point representing the position of the cell.
 * @return A Pair containing the x and y coordinates of the cell.
 */
fun decodePosition(cxy: Point): Pair<Int, Int> {
    val x = cxy.x / 64
    val y = cxy.y / 64
    return Pair(x.toInt(), y.toInt())
}

/**
 * Represents a chess piece.
 *
 * @param kind The kind of chess piece.
 * @constructor Creates a Piece with the provided properties.
 * @property color The color of the chess piece.
 * @property cx The x-coordinate of the chess piece on the board.
 * @property cy The y-coordinate of the chess piece on the board.
 * @property cont The scene container.
 */
class Piece(
    private var kind: PieceKind,
    val color: RGBA,
    private val cx: Int,
    private val cy: Int,
    private val cont: SceneContainer,
) : View() {

    private var pieceKind: PieceKind = kind
    private lateinit var piece: Image
    var position = board[cx][cy].pos
    private var newPosi: Point? = null

    init {
        if (color == Colors.WHITE) {
            // If the piece is white, set the piece image to the white pawn or rook or knight
            piece =
                Image(
                    when (kind) {
                        PieceKind.WhitePawn -> whitePawn!!
                        PieceKind.WhiteRook -> whiteRook!!
                        PieceKind.WhiteKnight -> whiteKnight!!
                        PieceKind.WhiteBishop -> whiteBishop!!
                        PieceKind.WhiteQueen -> whiteQueen!!
                        PieceKind.WhiteKing -> whiteKing!!
                        else -> throw Error("Invalid Piece !?")
                    })

            piece.size(Size(64, 64))
            piece.addTo(cont)
            moveTo(cx, cy)
        } else {
            // If the piece is black, set the piece image to the black pawn or rook or knight
            if (color == Colors.BLACK) {
                piece =
                    Image(
                        when (kind) {
                            PieceKind.BlackPawn -> blackPawn!!
                            PieceKind.BlackRook -> blackRook!!
                            PieceKind.BlackKnight -> blackKnight!!
                            PieceKind.BlackBishop -> blackBishop!!
                            PieceKind.BlackQueen -> blackQueen!!
                            PieceKind.BlackKing -> blackKing!!
                            else -> throw Error("Invalid Piece !?")
                        })
                piece.size(Size(64, 64))
                piece.addTo(cont)
                moveTo(cx, cy)
            }
        }
    }

    /**
     * Moves the piece to a new position on the board.
     *
     * @param cx The new x-coordinate of the piece.
     * @param cy The new y-coordinate of the piece.
     */
    fun moveTo(cx: Int, cy: Int) {
        piece.position((cx * 64), (cy * 64))
        position = board[cy][cx].pos
    }

    /**
     * Checks if the move of the piece is valid.
     *
     * @param oldPos The old position of the piece.
     * @param newPos The new position of the piece.
     * @param performMove Indicates whether to perform the move or just check its validity.
     * @return true if the move is valid, false otherwise.
     */
    fun moveChecker(
        oldPos: Pair<Int, Int>,
        newPos: Pair<Int, Int>,
        performMove: Boolean,
        king: Boolean
    ): Boolean {
        val pieceOnNewPos = pieces.find { it.position == board[newPos.second][newPos.first].pos }
        if (pieceOnNewPos != null && pieceOnNewPos.color == color) {
            // Prevent moving to a cell occupied by a piece of the same color during the check for
            // valid moves
            return false
        }
        if (!king) {
            return if (whiteTurn) {
                when (pieceKind) {
                    PieceKind.WhitePawn -> moveWhitePawn(oldPos, newPos, pieceOnNewPos, performMove)
                    PieceKind.WhiteRook ->
                        moveRook(oldPos, newPos, pieceOnNewPos, performMove, true)
                    PieceKind.WhiteKnight ->
                        moveWhiteKnight(oldPos, newPos, pieceOnNewPos, performMove)
                    PieceKind.WhiteBishop ->
                        moveBishop(oldPos, newPos, pieceOnNewPos, performMove, true)
                    PieceKind.WhiteQueen -> TODO()
                    PieceKind.WhiteKing -> moveWhiteKing(oldPos, newPos, pieceOnNewPos, performMove)
                    else -> false
                }
            } else {
                when (pieceKind) {
                    PieceKind.BlackPawn -> moveBlackPawn(oldPos, newPos, pieceOnNewPos, performMove)
                    PieceKind.BlackRook ->
                        moveRook(oldPos, newPos, pieceOnNewPos, performMove, false)
                    PieceKind.BlackKnight ->
                        moveBlackKnight(oldPos, newPos, pieceOnNewPos, performMove)
                    PieceKind.BlackBishop ->
                        moveBishop(oldPos, newPos, pieceOnNewPos, performMove, false)
                    PieceKind.BlackQueen -> TODO()
                    PieceKind.BlackKing -> TODO()
                    else -> false
                }
            }
        }

        if (king) {
            return if (whiteTurn) {
                when (pieceKind) {
                    PieceKind.WhitePawn -> moveWhitePawn(oldPos, newPos, pieceOnNewPos, performMove)
                    PieceKind.WhiteRook ->
                        moveRook(oldPos, newPos, pieceOnNewPos, performMove, true)
                    PieceKind.WhiteKnight ->
                        moveWhiteKnight(oldPos, newPos, pieceOnNewPos, performMove)
                    PieceKind.WhiteBishop ->
                        moveBishop(oldPos, newPos, pieceOnNewPos, performMove, true)
                    PieceKind.WhiteQueen -> TODO()
                    PieceKind.WhiteKing -> moveWhiteKing(oldPos, newPos, pieceOnNewPos, performMove)
                    PieceKind.BlackPawn -> moveBlackPawn(oldPos, newPos, pieceOnNewPos, performMove)
                    PieceKind.BlackRook ->
                        moveRook(oldPos, newPos, pieceOnNewPos, performMove, false)
                    PieceKind.BlackKnight ->
                        moveBlackKnight(oldPos, newPos, pieceOnNewPos, performMove)
                    PieceKind.BlackBishop ->
                        moveBishop(oldPos, newPos, pieceOnNewPos, performMove, false)
                    PieceKind.BlackQueen -> TODO()
                    PieceKind.BlackKing -> TODO()
                }
            } else {
                when (pieceKind) {
                    PieceKind.WhitePawn -> moveWhitePawn(oldPos, newPos, pieceOnNewPos, performMove)
                    PieceKind.WhiteRook ->
                        moveRook(oldPos, newPos, pieceOnNewPos, performMove, true)
                    PieceKind.WhiteKnight ->
                        moveWhiteKnight(oldPos, newPos, pieceOnNewPos, performMove)
                    PieceKind.WhiteBishop ->
                        moveBishop(oldPos, newPos, pieceOnNewPos, performMove, true)
                    PieceKind.WhiteQueen -> TODO()
                    PieceKind.WhiteKing -> moveWhiteKing(oldPos, newPos, pieceOnNewPos, performMove)
                    PieceKind.BlackPawn -> moveBlackPawn(oldPos, newPos, pieceOnNewPos, performMove)
                    PieceKind.BlackRook ->
                        moveRook(oldPos, newPos, pieceOnNewPos, performMove, false)
                    PieceKind.BlackKnight ->
                        moveBlackKnight(oldPos, newPos, pieceOnNewPos, performMove)
                    PieceKind.BlackBishop ->
                        moveBishop(oldPos, newPos, pieceOnNewPos, performMove, false)
                    PieceKind.BlackQueen -> TODO()
                    PieceKind.BlackKing -> TODO()
                }
            }
        }

        return false
    }

    private fun moveWhiteKing(
        oldPos: Pair<Int, Int>,
        newPos: Pair<Int, Int>,
        pieceOnNewPos: Piece?,
        performMove: Boolean,
    ): Boolean {
        val rowDiff = abs(newPos.first - oldPos.first)
        val colDiff = abs(newPos.second - oldPos.second)

        // Check if the king is in check by iterating through all the pieces and checking if any of
        // them can move to the kings position

        if (rowDiff <= 1 && colDiff <= 1) {
            if (pieceOnNewPos == null) {
                if (performMove) {
                    whiteTurn = false
                    whiteKingPosition = decodePosition(board[newPos.second][newPos.first].pos)
                    println("king position: $whiteKingPosition")
                }

                return true
            } else if (pieceOnNewPos.color == Colors.BLACK) {
                if (performMove) {
                    removePiece(pieceOnNewPos)
                    whiteTurn = false
                    whiteKingPosition = decodePosition(board[newPos.second][newPos.first].pos)
                    println("king position: $whiteKingPosition")
                }
                return true
            }
        }
        return false
    }

    private fun moveWhitePawn(
        oldPos: Pair<Int, Int>,
        newPos: Pair<Int, Int>,
        pieceOnNewPos: Piece?,
        performMove: Boolean,
    ): Boolean {
        val isPawnMoveForward = newPos.second - oldPos.second == 1 && oldPos.first == newPos.first
        val isInitialPawnMove =
            oldPos.second == 1 && newPos.second == 3 && oldPos.first == newPos.first

        if (isPawnMoveForward || isInitialPawnMove) {
            if (pieceOnNewPos == null) {

                // println("legal")
                newPosi = board[newPos.second][newPos.first].pos
                if (whiteKingInCheck()) {
                    println("nah")
                    return false
                } else {
                    if (performMove) whiteTurn = false
                    return true
                }
            }
        } else if (newPos.second - oldPos.second == 1 &&
            ((newPos.first - oldPos.first == 1) || (newPos.first - oldPos.first == -1))) {
            if (pieceOnNewPos != null && pieceOnNewPos.color == Colors.BLACK) {
                if (performMove) {
                    removePiece(pieceOnNewPos)
                    whiteTurn = false
                }
                // println("legal")
                return true
            }
        }
        // println("illegal")
        return false
    }

    private fun moveBlackPawn(
        oldPos: Pair<Int, Int>,
        newPos: Pair<Int, Int>,
        pieceOnNewPos: Piece?,
        performMove: Boolean,
    ): Boolean {
        val isPawnMoveForward = newPos.second - oldPos.second == -1 && oldPos.first == newPos.first
        val isInitialPawnMove =
            oldPos.second == 6 && newPos.second == 4 && oldPos.first == newPos.first

        if (isPawnMoveForward || isInitialPawnMove) {
            if (pieceOnNewPos == null) {
                if (performMove) whiteTurn = true
                return true
            }
        } else if (newPos.second - oldPos.second == -1 &&
            ((newPos.first - oldPos.first == 1) || (newPos.first - oldPos.first == -1))) {
            if (pieceOnNewPos != null && pieceOnNewPos.color == Colors.WHITE) {

                if (performMove) {
                    removePiece(pieceOnNewPos)
                    whiteTurn = true
                }
                return true
            }
        }
        return false
    }

    private fun isPieceBlockingRookPath(
        oldPos: Pair<Int, Int>,
        newPos: Pair<Int, Int>,
        minRow: Int,
        maxRow: Int,
        minCol: Int,
        maxCol: Int,
    ): Boolean {
        for (piece in pieces) {
            val row = decodePosition(piece.position).first
            val col = decodePosition(piece.position).second

            // Skip the current piece if it's at the old or new position
            if ((row == oldPos.first && col == oldPos.second) ||
                (row == newPos.first && col == newPos.second)) {
                continue
            }

            // If the piece is blocking the rook's path, return true
            if ((row == oldPos.first || col == oldPos.second) &&
                row in minRow..maxRow &&
                col in minCol..maxCol) {
                return true
            }
        }
        return false
    }

    private fun moveRook(
        oldPos: Pair<Int, Int>,
        newPos: Pair<Int, Int>,
        pieceOnNewPos: Piece?,
        performMove: Boolean,
        isWhite: Boolean
    ): Boolean {
        if (oldPos.first != newPos.first && oldPos.second != newPos.second) {
            return false
        }

        val minRow = minOf(oldPos.first, newPos.first)
        val maxRow = maxOf(oldPos.first, newPos.first)
        val minCol = minOf(oldPos.second, newPos.second)
        val maxCol = maxOf(oldPos.second, newPos.second)

        if (isPieceBlockingRookPath(oldPos, newPos, minRow, maxRow, minCol, maxCol)) {
            return false
        }

        if (performMove &&
            pieceOnNewPos != null &&
            pieceOnNewPos.color == if (isWhite) Colors.BLACK else Colors.WHITE) {
            removePiece(pieceOnNewPos)
            return true
        } else if (performMove) whiteTurn = !isWhite

        return pieceOnNewPos == null
    }

    private fun moveWhiteKnight(
        oldPos: Pair<Int, Int>,
        newPos: Pair<Int, Int>,
        pieceOnNewPos: Piece?,
        performMove: Boolean
    ): Boolean {
        val rowDiff = abs(newPos.first - oldPos.first)
        val colDiff = abs(newPos.second - oldPos.second)

        if ((rowDiff == 2 && colDiff == 1) || (rowDiff == 1 && colDiff == 2)) {
            if (pieceOnNewPos == null) {
                if (performMove) {
                    println(whiteTurn)
                    whiteTurn = false
                    println(whiteTurn)
                }
                return true
            } else if (pieceOnNewPos.color != color) {
                if (performMove) {
                    removePiece(pieceOnNewPos)
                    println(whiteTurn)
                    whiteTurn = false
                    println(whiteTurn)
                }
                return true
            }
        }
        return false
    }

    private fun moveBlackKnight(
        oldPos: Pair<Int, Int>,
        newPos: Pair<Int, Int>,
        pieceOnNewPos: Piece?,
        performMove: Boolean
    ): Boolean {
        val rowDiff = abs(newPos.first - oldPos.first)
        val colDiff = abs(newPos.second - oldPos.second)

        if ((rowDiff == 2 && colDiff == 1) || (rowDiff == 1 && colDiff == 2)) {
            if (pieceOnNewPos == null) {
                if (performMove) {
                    println(whiteTurn)
                    whiteTurn = true
                    println(whiteTurn)
                }
                return true
            } else if (pieceOnNewPos.color != color) {
                if (performMove) {
                    removePiece(pieceOnNewPos)
                    println(whiteTurn)
                    whiteTurn = true
                    println(whiteTurn)
                }
                return true
            }
        }
        return false
    }

    private fun moveBishop(
        oldPos: Pair<Int, Int>,
        newPos: Pair<Int, Int>,
        pieceOnNewPos: Piece?,
        performMove: Boolean,
        isWhite: Boolean
    ): Boolean {
        val p1 = abs(oldPos.first - newPos.first)
        val p2 = abs(oldPos.second - newPos.second)
        val p = if (p1 == p2) p1 else null
        val color = if (isWhite) Colors.WHITE else Colors.BLACK

        // println("Old position: $oldPos")
        // println("New position: $newPos")
        // println("All pieces:")
        for (piece in pieces) {
            decodePosition(piece.position)
            // println("Piece at position: $piecePos")
        }

        if (p != null) {
            // Check for obstacles in the bishop's path
            for (i in 1 until p) {
                val x = if (oldPos.first < newPos.first) oldPos.first + i else oldPos.first - i
                val y = if (oldPos.second < newPos.second) oldPos.second + i else oldPos.second - i
                for (piece in pieces) {
                    val piecePos = decodePosition(piece.position)
                    if (piecePos.first == x && piecePos.second == y) {
                        // Obstacle found
                        return false
                    }
                }
            }
            // If there are no obstacles, perform the move
            if (performMove) {
                if (pieceOnNewPos != null) {
                    if (pieceOnNewPos.color == color) {
                        return false
                    } else {
                        removePiece(pieceOnNewPos)
                    }
                }
                whiteTurn = !isWhite
            }
            return true
        }
        return false
    }

    private fun removePiece(piece: Piece) {
        pieces.remove(piece)
        piece.piece.removeFromParent()
    }

    override fun renderInternal(ctx: RenderContext) {}
}
