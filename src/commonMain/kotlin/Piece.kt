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
 * @constructor Creates a Piece with the specified parameters.
 * @property color The color of the piece.
 * @property cx The x-coordinate of the piece.
 * @property cy The y-coordinate of the piece.
 * @property cont The scene container.
 */
class Piece(
    kind: PieceKind,
    private val color: RGBA,
    private val cx: Int,
    private val cy: Int,
    private val cont: SceneContainer,
) : View() {

    var pieceKind: PieceKind = kind
    private lateinit var piece: Image
    var position = board[cx][cy].pos

    init {
        if (color == Colors.WHITE) {
            // If the piece is white, set the piece image to the white pawn or rook or knight
            if (
                kind == PieceKind.WhitePawn ||
                    kind == PieceKind.WhiteRook ||
                    kind == PieceKind.WhiteKnight
            ) {
                piece =
                    Image(
                        if (kind == PieceKind.WhitePawn) whitePawn!!
                        else if (kind == PieceKind.WhiteRook) whiteRook!! else whiteKnight!!
                    )
                piece.size(Size(64, 64))
                piece.addTo(cont)
                moveTo(cx, cy)
            }
        } else {
            // If the piece is black, set the piece image to the black pawn or rook or knight
            if (
                kind == PieceKind.BlackPawn ||
                    kind == PieceKind.BlackRook ||
                    kind == PieceKind.BlackKnight
            ) {
                piece =
                    Image(
                        if (kind == PieceKind.BlackPawn) blackPawn!!
                        else if (kind == PieceKind.BlackRook) blackRook!! else blackKnight!!
                    )
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
     * @param withCheck Indicates whether to perform the move or just check its validity.
     * @return true if the move is valid, false otherwise.
     */
    fun moveChecker(oldPos: Pair<Int, Int>, newPos: Pair<Int, Int>, withCheck: Boolean): Boolean {
        val pieceOnNewPos = pieces.find { it.position == board[newPos.second][newPos.first].pos }

        return if (whiteTurn) {
            when (pieceKind) {
                PieceKind.WhitePawn -> moveWhitePawn(oldPos, newPos, pieceOnNewPos, withCheck)
                PieceKind.WhiteRook -> moveWhiteRook(oldPos, newPos, pieceOnNewPos, withCheck)
                PieceKind.WhiteKnight -> moveKnight(oldPos, newPos, pieceOnNewPos, withCheck)
                else -> false
            }
        } else {
            when (pieceKind) {
                PieceKind.BlackPawn -> moveBlackPawn(oldPos, newPos, pieceOnNewPos, withCheck)
                PieceKind.BlackRook -> moveBlackRook(oldPos, newPos, pieceOnNewPos, withCheck)
                PieceKind.BlackKnight -> moveKnight(oldPos, newPos, pieceOnNewPos, withCheck)
                else -> false
            }
        }
    }

    private fun moveWhitePawn(
        oldPos: Pair<Int, Int>,
        newPos: Pair<Int, Int>,
        pieceOnNewPos: Piece?,
        withCheck: Boolean,
    ): Boolean {
        val isPawnMoveForward = newPos.second - oldPos.second == 1 && oldPos.first == newPos.first
        val isInitialPawnMove =
            oldPos.second == 1 && newPos.second == 3 && oldPos.first == newPos.first

        if (isPawnMoveForward || isInitialPawnMove) {
            if (pieceOnNewPos == null) {
                if (withCheck) whiteTurn = false
                return true
            }
        } else if (
            newPos.second - oldPos.second == 1 &&
                ((newPos.first - oldPos.first == 1) || (newPos.first - oldPos.first == -1))
        ) {
            if (pieceOnNewPos != null && pieceOnNewPos.pieceKind == PieceKind.BlackPawn) {
                if (withCheck) {
                    removePiece(pieceOnNewPos)
                    whiteTurn = false
                }
                return true
            }
        }
        return false
    }

    private fun moveBlackPawn(
        oldPos: Pair<Int, Int>,
        newPos: Pair<Int, Int>,
        pieceOnNewPos: Piece?,
        withCheck: Boolean,
    ): Boolean {
        val isPawnMoveForward = newPos.second - oldPos.second == -1 && oldPos.first == newPos.first
        val isInitialPawnMove =
            oldPos.second == 6 && newPos.second == 4 && oldPos.first == newPos.first

        if (isPawnMoveForward || isInitialPawnMove) {
            if (pieceOnNewPos == null) {
                if (withCheck) whiteTurn = true
                return true
            }
        } else if (
            newPos.second - oldPos.second == -1 &&
                ((newPos.first - oldPos.first == 1) || (newPos.first - oldPos.first == -1))
        ) {
            if (pieceOnNewPos != null && pieceOnNewPos.pieceKind == PieceKind.WhitePawn) {
                if (withCheck) {
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
            if (
                (row == oldPos.first && col == oldPos.second) ||
                    (row == newPos.first && col == newPos.second)
            ) {
                continue
            }

            // If the piece is blocking the rook's path, return true
            if (
                (row == oldPos.first || col == oldPos.second) &&
                    row in minRow..maxRow &&
                    col in minCol..maxCol
            ) {
                return true
            }
        }
        return false
    }

    private fun moveWhiteRook(
        oldPos: Pair<Int, Int>,
        newPos: Pair<Int, Int>,
        pieceOnNewPos: Piece?,
        withCheck: Boolean,
    ): Boolean {
        // If the new position is not in the same row or column as the old position, return false
        if (oldPos.first != newPos.first && oldPos.second != newPos.second) {
            return false
        }

        // Determine the minimum and maximum row and column values
        val minRow = minOf(oldPos.first, newPos.first)
        val maxRow = maxOf(oldPos.first, newPos.first)
        val minCol = minOf(oldPos.second, newPos.second)
        val maxCol = maxOf(oldPos.second, newPos.second)

        // Check if there is a piece blocking the rook's path
        if (isPieceBlockingRookPath(oldPos, newPos, minRow, maxRow, minCol, maxCol)) {
            return false
        }

        // If the move is with check and the new position contains a black piece, capture it
        if (withCheck && pieceOnNewPos != null && pieceOnNewPos.color == Colors.BLACK) {
            whiteTurn = false
            removePiece(pieceOnNewPos)
            return true
        }

        // If the new position is empty, return true
        if (pieceOnNewPos == null) {
            return true
        }

        // Otherwise, return false
        return false
    }

    private fun moveBlackRook(
        oldPos: Pair<Int, Int>,
        newPos: Pair<Int, Int>,
        pieceOnNewPos: Piece?,
        withCheck: Boolean,
    ): Boolean {
        // If the new position is not in the same row or column as the old position, return false
        if (oldPos.first != newPos.first && oldPos.second != newPos.second) {
            return false
        }

        // Determine the minimum and maximum row and column values
        val minRow = minOf(oldPos.first, newPos.first)
        val maxRow = maxOf(oldPos.first, newPos.first)
        val minCol = minOf(oldPos.second, newPos.second)
        val maxCol = maxOf(oldPos.second, newPos.second)

        // Check if there is a piece blocking the rook's path
        if (isPieceBlockingRookPath(oldPos, newPos, minRow, maxRow, minCol, maxCol)) {
            return false
        }

        // If the move is with check and the new position contains a white piece, capture it
        if (withCheck && pieceOnNewPos != null && pieceOnNewPos.color == Colors.WHITE) {
            whiteTurn = true
            removePiece(pieceOnNewPos)
            return true
        }

        // If the new position is empty, return true
        if (pieceOnNewPos == null) {
            return true
        }

        // Otherwise, return false
        return false
    }

    private fun moveKnight(
        oldPos: Pair<Int, Int>,
        newPos: Pair<Int, Int>,
        pieceOnNewPos: Piece?,
        withCheck: Boolean
    ): Boolean {
        val rowDiff = abs(newPos.first - oldPos.first)
        val colDiff = abs(newPos.second - oldPos.second)

        if ((rowDiff == 2 && colDiff == 1) || (rowDiff == 1 && colDiff == 2)) {
            if (pieceOnNewPos == null) {
                if (withCheck) {
                    println(whiteTurn)
                    whiteTurn = !whiteTurn
                    println(whiteTurn)
                }
                return true
            } else if (pieceOnNewPos.color != color) {
                if (withCheck) {
                    removePiece(pieceOnNewPos)
                    println(whiteTurn)
                    whiteTurn = !whiteTurn
                    println(whiteTurn)
                }
                return true
            }
        }
        return false
    }

    private fun removePiece(piece: Piece) {
        pieces.remove(piece)
        piece.piece.removeFromParent()
    }

    override fun renderInternal(ctx: RenderContext) {
        // Implement your rendering logic here
    }
}
