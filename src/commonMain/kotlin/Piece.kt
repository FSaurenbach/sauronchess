@file:Suppress("ktlint:standard:no-wildcard-imports")

import korlibs.image.color.*
import korlibs.korge.render.*
import korlibs.korge.view.*
import korlibs.math.geom.*
import kotlin.math.*

enum class PieceKind {
    WhitePawn, BlackPawn, WhiteRook, BlackRook, WhiteKnight, BlackKnight, WhiteBishop, BlackBishop, WhiteQueen, BlackQueen, WhiteKing, BlackKing,
}

class Piece(
    var kind: PieceKind,
    val color: RGBA,
    var cx: Int,
    var cy: Int,
    cont: Container,
    var disabled: Boolean = false,
    val isWhite: Boolean,
) : View() {
    private var pieceKind: PieceKind = kind

    // If the piece is white, set the piece image to the white pawn or rook or knight
    private var piece: Image = Image(
        when (kind) {
            PieceKind.WhitePawn -> whitePawn!!
            PieceKind.WhiteRook -> whiteRook!!
            PieceKind.WhiteKnight -> whiteKnight!!
            PieceKind.WhiteBishop -> whiteBishop!!
            PieceKind.WhiteQueen -> whiteQueen!!
            PieceKind.WhiteKing -> whiteKing!!
            PieceKind.BlackPawn -> blackPawn!!
            PieceKind.BlackRook -> blackRook!!
            PieceKind.BlackKnight -> blackKnight!!
            PieceKind.BlackBishop -> blackBishop!!
            PieceKind.BlackQueen -> blackQueen!!
            PieceKind.BlackKing -> blackKing!!
        },
    )

    init {

        piece.size(Size(64, 64))
        piece.addTo(cont)
        objektBewegen(piece, cx, cy)
    }

    fun bw(
        newX: Int,
        newY: Int,
    ) {
        piece.pos = Point(newX * 64.0 + offsetX, newY * 64.0 + offsetY)
        piece.position(Point(newX * 64.0 + offsetX, newY * 64.0 + offsetY))
    }

    /**
     * Checks if the move of the piece is valid.
     *
     * @param oldPos The old position of the piece.
     * @param newPos The new position of the piece.
     * @return true if the move is valid, false otherwise.
     */
    fun moveChecker(
        oldPos: Pair<Int, Int>,
        newPos: Pair<Int, Int>,
        performMove: Boolean,
    ): Boolean {
        val pieceOnNewPos = findPiece(newPos.first, newPos.second)
        // Check if white or black king in check

        return when (pieceKind) {
            PieceKind.WhitePawn, PieceKind.BlackPawn -> movePawn(oldPos, newPos, pieceOnNewPos, isWhite, performMove)
            PieceKind.WhiteRook, PieceKind.BlackRook -> moveRook(oldPos, newPos, pieceOnNewPos, performMove)
            PieceKind.WhiteKnight, PieceKind.BlackKnight -> moveKnight(oldPos, newPos, pieceOnNewPos)

            PieceKind.WhiteBishop, PieceKind.BlackBishop -> moveBishop(oldPos, newPos, pieceOnNewPos, performMove)

            PieceKind.WhiteQueen, PieceKind.BlackQueen -> moveQueen(oldPos, newPos, pieceOnNewPos, performMove)
            PieceKind.WhiteKing, PieceKind.BlackKing -> moveKing(oldPos, newPos, pieceOnNewPos, isWhite, performMove)
        }
    }

    private fun movePawn(
        oldPos: Pair<Int, Int>,
        newPos: Pair<Int, Int>,
        pieceOnNewPos: Piece?,
        isWhite: Boolean,
        performMove: Boolean,
    ): Boolean {
        val isPawnMoveForward = if (isWhite) {
            newPos.second - oldPos.second == -1 && oldPos.first == newPos.first
        } else {
            newPos.second - oldPos.second == 1 && oldPos.first == newPos.first
        }
        val isInitialPawnMove = if (isWhite) {
            oldPos.second == 6 && newPos.second == 4 && oldPos.first == newPos.first
        } else {
            oldPos.second == 1 && newPos.second == 3 && oldPos.first == newPos.first
        }
        if (isPawnMoveForward || isInitialPawnMove) {
            if (pieceOnNewPos == null) {
                return true
            }
        } else if (abs(newPos.second - oldPos.second) == 1 && abs(newPos.first - oldPos.first) == 1) {
            if (pieceOnNewPos != null && pieceOnNewPos.color != if (isWhite) Colors.WHITE else Colors.BLACK) {
                if (performMove) removePiece(pieceOnNewPos)
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
    ): Boolean {
        val (oldX, oldY) = oldPos
        val (newX, newY) = newPos

        if (oldX == newX) {
            val range = if (newY > oldY) (oldY + 1 until newY) else (newY + 1 until oldY)
            if (range.any { findPiece(oldX, it) != null }) return false
        } else if (oldY == newY) {
            val range = if (newX > oldX) (oldX + 1 until newX) else (newX + 1 until oldX)
            if (range.any { findPiece(it, oldY) != null }) return false
        } else {
            return false
        }

        if (pieceOnNewPos != null) {
            if (pieceOnNewPos.color == color) return false
            if (performMove) removePiece(pieceOnNewPos)
        }
        if (color == Colors.WHITE) whiteCastlingLegal = false
        if (color == Colors.BLACK) blackCastlingLegal = false
        return true
    }

    private fun moveKnight(
        oldPos: Pair<Int, Int>,
        newPos: Pair<Int, Int>,
        pieceOnNewPos: Piece?
    ): Boolean {
        val xDiff = abs(newPos.first - oldPos.first)
        val yDiff = abs(newPos.second - oldPos.second)

        if ((xDiff == 2 && yDiff == 1) || (xDiff == 1 && yDiff == 2)) {
            if (pieceOnNewPos != null && pieceOnNewPos.color == color) {
                return false
            }
            if (pieceOnNewPos != null && pieceOnNewPos.color != color) {

                return true
            }
            if (pieceOnNewPos == null) {

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
    ): Boolean {
        val dx = abs(newPos.first - oldPos.first)
        val dy = abs(newPos.second - oldPos.second)

        // Check if the move is diagonal
        if (dx != dy) return false

        // Check for obstructions on the diagonal path
        val directionX = (newPos.first - oldPos.first).sign
        val directionY = (newPos.second - oldPos.second).sign

        for (i in 1 until dx) {
            val checkPos = oldPos.first + i * directionX to oldPos.second + i * directionY
            if (findPiece(checkPos.first, checkPos.second) != null) {
                return false
            }
        }

        // Check if the target square is empty or contains an enemy piece
        if (pieceOnNewPos == null || pieceOnNewPos.color != color) {
            if (performMove) {
                pieceOnNewPos?.let { removePiece(it) }

            }
            return true
        }

        return false
    }

    private fun moveQueen(
        oldPos: Pair<Int, Int>,
        newPos: Pair<Int, Int>,
        pieceOnNewPos: Piece?,
        performMove: Boolean,
    ): Boolean = moveRook(oldPos, newPos, pieceOnNewPos, performMove) || moveBishop(
        oldPos,
        newPos,
        pieceOnNewPos,
        performMove,
    )

    private fun moveKing(
        oldPos: Pair<Int, Int>,
        newPos: Pair<Int, Int>,
        pieceOnNewPos: Piece?,
        isWhite: Boolean,
        performMove: Boolean,
    ): Boolean {
        // Determine the move direction
        val deltaX = newPos.first - oldPos.first
        val deltaY = newPos.second - oldPos.second

        // Check if the move is within the valid range for a king
        if (abs(deltaX) <= 1 && abs(deltaY) <= 1) {
            // Check if there is a piece on the new position and its color
            if (pieceOnNewPos != null) {
                if (pieceOnNewPos.color == color) {
                    return false
                }
            }

            // If performMove is true, toggle the turn

            println("color: $color , newPosColor: ${pieceOnNewPos?.color}")
            if (color == Colors.WHITE) whiteCastlingLegal = false
            if (color == Colors.BLACK) blackCastlingLegal = false
            return true
        }
        // Rochade
        if (whiteCastlingLegal && isWhite && oldPos.first == 4 && oldPos.second == 7) {
            if (pieceOnNewPos != null) return false
            when {
                newPos.first == 6 && newPos.second == 7 -> {
                    if (performMove) {
                        val rook = findPiece(7, 7)
                        figurBewegen(rook!!, 5, 7)
                        whiteCastlingLegal = false
                    }
                    return true
                }

                newPos.first == 2 && newPos.second == 7 -> {
                    if (performMove) {
                        val rook = findPiece(0, 7)
                        figurBewegen(rook!!, 3, 7)
                        whiteCastlingLegal = false
                    }
                    return true
                }
            }
        }
        if (blackCastlingLegal && !isWhite && oldPos.first == 4 && oldPos.second == 0) {
            when {
                newPos.first == 6 && newPos.second == 0 -> {
                    if (performMove) {
                        val rook = findPiece(7, 0)
                        figurBewegen(rook!!, 5, 0)
                        blackCastlingLegal = false
                    }
                    return true
                }

                newPos.first == 2 && newPos.second == 0 -> {
                    if (performMove) {
                        val rook = findPiece(0, 0)
                        figurBewegen(rook!!, 3, 0)
                        blackCastlingLegal = false
                    }
                    return true
                }
            }
        }

        return false
    }

    fun removePiece(piece: Piece) {
        pieces.remove(piece)
        piece.piece.removeFromParent()

        println("Piece removed: $piece")
    }

    override fun renderInternal(ctx: RenderContext) {}
}

fun addAllPieces(cont: Container) {
    // Add all pieces in right order and add them to the pieces list (white pieces are at the
    // bottom)
    for (i in 0 until 8) {
        pieces.add(Piece(PieceKind.WhitePawn, Colors.WHITE, i, 6, cont, isWhite = true))
    }
    pieces.add(Piece(PieceKind.WhiteRook, Colors.WHITE, 0, 7, cont, isWhite = true))
    pieces.add(Piece(PieceKind.WhiteRook, Colors.WHITE, 7, 7, cont, isWhite = true))
    pieces.add(Piece(PieceKind.WhiteKnight, Colors.WHITE, 1, 7, cont, isWhite = true))
    pieces.add(Piece(PieceKind.WhiteKnight, Colors.WHITE, 6, 7, cont, isWhite = true))
    pieces.add(Piece(PieceKind.WhiteBishop, Colors.WHITE, 2, 7, cont, isWhite = true))
    pieces.add(Piece(PieceKind.WhiteBishop, Colors.WHITE, 5, 7, cont, isWhite = true))
    pieces.add(Piece(PieceKind.WhiteQueen, Colors.WHITE, 3, 7, cont, isWhite = true))
    pieces.add(Piece(PieceKind.WhiteKing, Colors.WHITE, 4, 7, cont, isWhite = true))

    for (i in 0 until 8) {
        pieces.add(Piece(PieceKind.BlackPawn, Colors.BLACK, i, 1, cont, isWhite = false))
    }
    pieces.add(Piece(PieceKind.BlackRook, Colors.BLACK, 0, 0, cont, isWhite = false))
    pieces.add(Piece(PieceKind.BlackRook, Colors.BLACK, 7, 0, cont, isWhite = false))
    pieces.add(Piece(PieceKind.BlackKnight, Colors.BLACK, 1, 0, cont, isWhite = false))
    pieces.add(Piece(PieceKind.BlackKnight, Colors.BLACK, 6, 0, cont, isWhite = false))
    pieces.add(Piece(PieceKind.BlackBishop, Colors.BLACK, 2, 0, cont, isWhite = false))
    pieces.add(Piece(PieceKind.BlackBishop, Colors.BLACK, 5, 0, cont, isWhite = false))
    pieces.add(Piece(PieceKind.BlackQueen, Colors.BLACK, 3, 0, cont, isWhite = false))
    pieces.add(Piece(PieceKind.BlackKing, Colors.BLACK, 4, 0, cont, isWhite = false))
}
