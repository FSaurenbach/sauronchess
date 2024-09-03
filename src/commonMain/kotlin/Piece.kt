import korlibs.image.color.*
import korlibs.korge.render.*
import korlibs.korge.scene.*
import korlibs.korge.view.*
import korlibs.math.geom.*
import kotlin.math.*

enum class PieceKind {
    WhitePawn, BlackPawn, WhiteRook, BlackRook, WhiteKnight, BlackKnight, WhiteBishop, BlackBishop, WhiteQueen, BlackQueen, WhiteKing, BlackKing
}

class Piece(
    var kind: PieceKind,
    val color: RGBA,
    var cx: Int,
    var cy: Int,
    cont: SceneContainer,
) : View() {

    private var pieceKind: PieceKind = kind
    private lateinit var piece: Image

    init {
        if (color == Colors.WHITE) {
            // If the piece is white, set the piece image to the white pawn or rook or knight
            piece = Image(
                when (kind) {
                    PieceKind.WhitePawn -> whitePawn!!
                    PieceKind.WhiteRook -> whiteRook!!
                    PieceKind.WhiteKnight -> whiteKnight!!
                    PieceKind.WhiteBishop -> whiteBishop!!
                    PieceKind.WhiteQueen -> whiteQueen!!
                    PieceKind.WhiteKing -> whiteKing!!
                    else -> throw Error("Invalid Piece !?")
                }
            )

            piece.size(Size(64, 64))
            piece.addTo(cont)
            objektBewegen(piece, cx, cy)
        } else {
            // If the piece is black, set the piece image to the black pawn or rook or knight
            if (color == Colors.BLACK) {
                piece = Image(
                    when (kind) {
                        PieceKind.BlackPawn -> blackPawn!!
                        PieceKind.BlackRook -> blackRook!!
                        PieceKind.BlackKnight -> blackKnight!!
                        PieceKind.BlackBishop -> blackBishop!!
                        PieceKind.BlackQueen -> blackQueen!!
                        PieceKind.BlackKing -> blackKing!!
                        else -> throw Error("Invalid Piece !?")
                    }
                )
                piece.size(Size(64, 64))
                piece.addTo(cont)
                objektBewegen(piece, cx, cy)
            }
        }
    }

    fun bw(newX: Int, newY: Int) {
        piece.pos = Point(newX * 64.0, newY * 64.0)
        piece.position(Point(newX * 64.0, newY * 64.0))
    }

    /**
     * Moves the piece to a new position on the board.
     *
     * @param cx The new x-coordinate of the piece.
     * @param cy The new y-coordinate of the piece.
     */

    /**
     * Checks if the move of the piece is valid.
     *
     * @param oldPos The old position of the piece.
     * @param newPos The new position of the piece.
     * @return true if the move is valid, false otherwise.
     */
    fun moveChecker(
        oldPos: Pair<Int, Int>, newPos: Pair<Int, Int>, performMove: Boolean, fromInCheck: Boolean
    ): Boolean {
        val pieceOnNewPos = schachbrett!!.findPiece(newPos.first, newPos.second)
        // Check if white or black king in check

        if (whiteTurn && performMove) {
            return when (pieceKind) {
                PieceKind.WhitePawn -> moveWhitePawn(oldPos, newPos, pieceOnNewPos, performMove)
                PieceKind.WhiteRook -> moveRook(oldPos, newPos, pieceOnNewPos, true, performMove)
                PieceKind.WhiteKnight -> moveKnight(oldPos, newPos, pieceOnNewPos, true, performMove)

                PieceKind.WhiteBishop -> moveBishop(oldPos, newPos, pieceOnNewPos, true, performMove)

                PieceKind.WhiteQueen -> moveQueen(oldPos, newPos, pieceOnNewPos, true, performMove)
                PieceKind.WhiteKing -> moveKing(oldPos, newPos, pieceOnNewPos, true, performMove)
                else -> false
            }
        }
        if (!whiteTurn && performMove) {
            return when (pieceKind) {
                PieceKind.BlackPawn -> moveBlackPawn(oldPos, newPos, pieceOnNewPos, performMove)
                PieceKind.BlackRook -> moveRook(oldPos, newPos, pieceOnNewPos, false, performMove)
                PieceKind.BlackKnight -> moveKnight(oldPos, newPos, pieceOnNewPos, false, performMove)

                PieceKind.BlackBishop -> moveBishop(oldPos, newPos, pieceOnNewPos, false, performMove)

                PieceKind.BlackQueen -> moveQueen(oldPos, newPos, pieceOnNewPos, false, performMove)
                PieceKind.BlackKing -> moveKing(oldPos, newPos, pieceOnNewPos, false, performMove)
                else -> false
            }
        }
        if (!performMove) {
            return when (pieceKind) {
                PieceKind.WhitePawn -> moveWhitePawn(oldPos, newPos, pieceOnNewPos, performMove)
                PieceKind.BlackPawn -> moveBlackPawn(oldPos, newPos, pieceOnNewPos, performMove)
                PieceKind.WhiteRook -> moveRook(oldPos, newPos, pieceOnNewPos, true, performMove)
                PieceKind.BlackRook -> moveRook(oldPos, newPos, pieceOnNewPos, false, performMove)
                PieceKind.WhiteKnight -> moveKnight(oldPos, newPos, pieceOnNewPos, true, performMove)

                PieceKind.BlackKnight -> moveKnight(oldPos, newPos, pieceOnNewPos, false, performMove)

                PieceKind.WhiteBishop -> moveBishop(oldPos, newPos, pieceOnNewPos, true, performMove)

                PieceKind.BlackBishop -> moveBishop(oldPos, newPos, pieceOnNewPos, false, performMove)

                PieceKind.WhiteQueen -> moveQueen(oldPos, newPos, pieceOnNewPos, true, performMove)
                PieceKind.BlackQueen -> moveQueen(oldPos, newPos, pieceOnNewPos, false, performMove)
                PieceKind.WhiteKing -> moveKing(oldPos, newPos, pieceOnNewPos, true, performMove)
                PieceKind.BlackKing -> moveKing(oldPos, newPos, pieceOnNewPos, false, performMove)
            }
        }

        return false
    }

    private fun moveWhitePawn(
        oldPos: Pair<Int, Int>, newPos: Pair<Int, Int>, pieceOnNewPos: Piece?, performMove: Boolean
    ): Boolean {
        val isPawnMoveForward = newPos.second - oldPos.second == -1 && oldPos.first == newPos.first
        val isInitialPawnMove = oldPos.second == 6 && newPos.second == 4 && oldPos.first == newPos.first
        if (isPawnMoveForward || isInitialPawnMove) {

            if (pieceOnNewPos == null) {
                if (performMove) whiteTurn = false

                return true
            }
        } else if (oldPos.second - newPos.second == 1 && ((newPos.first - oldPos.first == 1) || (newPos.first - oldPos.first == -1))) {
            if (pieceOnNewPos != null && pieceOnNewPos.color == Colors.BLACK) {

                if (performMove) removePiece(pieceOnNewPos)
                if (performMove) whiteTurn = false

                return true
            }
        }
        return false
    }

    private fun moveBlackPawn(
        oldPos: Pair<Int, Int>, newPos: Pair<Int, Int>, pieceOnNewPos: Piece?, performMove: Boolean
    ): Boolean {
        val isPawnMoveForward = newPos.second - oldPos.second == 1 && oldPos.first == newPos.first
        val isInitialPawnMove = oldPos.second == 1 && newPos.second == 3 && oldPos.first == newPos.first
        if (isPawnMoveForward || isInitialPawnMove) {

            if (pieceOnNewPos == null) {
                if (performMove) whiteTurn = true

                return true
            }
        } else if (newPos.second - oldPos.second == 1 && ((newPos.first - oldPos.first == 1) || (newPos.first - oldPos.first == -1))) {
            if (pieceOnNewPos != null && pieceOnNewPos.color == Colors.WHITE) {

                if (performMove) removePiece(pieceOnNewPos)
                if (performMove) whiteTurn = true

                return true
            }
        }
        return false
    }

    private fun moveRook(
        oldPos: Pair<Int, Int>, newPos: Pair<Int, Int>, pieceOnNewPos: Piece?, isWhite: Boolean, performMove: Boolean
    ): Boolean {
        // Case moving up or down
        if (oldPos.first == newPos.first) {
            // going down
            if (newPos.second > oldPos.second) {
                val cellstocheck = newPos.second - oldPos.second - 1
                for (i in 1..cellstocheck) {
                    val pp = schachbrett!!.findPiece(oldPos.first, oldPos.second + i)?.pos
                    if (pp != null) {
                        return false
                    }
                }
                if (pieceOnNewPos != null && pieceOnNewPos.color == color) {
                    return false
                }
                if (pieceOnNewPos != null && pieceOnNewPos.color != color) {
                    if (performMove) removePiece(pieceOnNewPos)
                    if (performMove) whiteTurn = !isWhite
                    return true
                }
                // Case moving one down
                if (pieceOnNewPos == null && cellstocheck == 0) {
                    if (performMove) whiteTurn = !isWhite
                    return true
                }
                whiteTurn = !isWhite
                return true
            }
            if (newPos.second < oldPos.second) {
                val cellstocheck = oldPos.second - newPos.second - 1
                for (i in 1..cellstocheck) {
                    val pp = schachbrett!!.findPiece(oldPos.first, oldPos.second - i)?.pos
                    if (pp != null) {
                        return false
                    }
                }
                if (pieceOnNewPos != null && pieceOnNewPos.color == color) {
                    return false
                }
                if (pieceOnNewPos != null && pieceOnNewPos.color != color) {
                    if (performMove) removePiece(pieceOnNewPos)
                    if (performMove) whiteTurn = !isWhite
                    return true
                }
                // Case moving one down
                if (pieceOnNewPos == null && cellstocheck == 0) {
                    if (performMove) whiteTurn = !isWhite
                    return true
                }
                if (performMove) whiteTurn = !isWhite
                return true
            }
        }

        // Case moving left or right
        if (oldPos.second == newPos.second) {
            // going right
            if (newPos.first > oldPos.first) {
                val cellstocheck = newPos.first - oldPos.first - 1
                for (i in 1..cellstocheck) {
                    val pp = schachbrett!!.findPiece(oldPos.first + i, oldPos.second)?.pos
                    if (pp != null) {
                        return false
                    }
                }
                if (pieceOnNewPos != null && pieceOnNewPos.color == color) {
                    return false
                }
                if (pieceOnNewPos != null && pieceOnNewPos.color != color) {
                    if (performMove) removePiece(pieceOnNewPos)
                    if (performMove) whiteTurn = !isWhite
                    return true
                }

                // Case moving one right
                if (pieceOnNewPos == null && cellstocheck == 0) {
                    if (performMove) whiteTurn = !isWhite
                    return true
                }
                if (performMove) whiteTurn = !isWhite
                return true
            }
            if (newPos.first < oldPos.first) {
                val cellstocheck = oldPos.first - newPos.first - 1
                for (i in 1..cellstocheck) {
                    val pp = schachbrett!!.findPiece(oldPos.first - i, oldPos.second)?.pos
                    if (pp != null) {
                        return false
                    }
                }
                if (pieceOnNewPos != null && pieceOnNewPos.color == color) {
                    return false
                }
                if (pieceOnNewPos != null && pieceOnNewPos.color != color) {
                    if (performMove) removePiece(pieceOnNewPos)
                    if (performMove) whiteTurn = !isWhite
                    return true
                }

                // Case moving one left
                if (pieceOnNewPos == null && cellstocheck == 0) {
                    if (performMove) whiteTurn = !isWhite
                    return true
                }
                whiteTurn = !isWhite
                return true
            }
        }

        return false
    }

    private fun moveKnight(
        oldPos: Pair<Int, Int>, newPos: Pair<Int, Int>, pieceOnNewPos: Piece?, isWhite: Boolean, performMove: Boolean
    ): Boolean {
        val xDiff = abs(newPos.first - oldPos.first)
        val yDiff = abs(newPos.second - oldPos.second)

        if ((xDiff == 2 && yDiff == 1) || (xDiff == 1 && yDiff == 2)) {
            if (pieceOnNewPos != null && pieceOnNewPos.color == color) {
                return false
            }
            if (pieceOnNewPos != null && pieceOnNewPos.color != color) {
                if (performMove) {
                    removePiece(pieceOnNewPos)
                    whiteTurn = !isWhite
                }
                return true
            }
            if (pieceOnNewPos == null) {
                if (performMove) {
                    whiteTurn = !isWhite
                }
                return true
            }
        }
        return false
    }

    private fun moveBishop(
        oldPos: Pair<Int, Int>, newPos: Pair<Int, Int>, pieceOnNewPos: Piece?, isWhite: Boolean, performMove: Boolean
    ): Boolean {
        val realMove =
            ((newPos.first - oldPos.first) == (newPos.second - oldPos.second)) || ((oldPos.first - newPos.first) == (oldPos.second - newPos.first)) || ((newPos.first - oldPos.first) == (oldPos.second - newPos.first)) || ((oldPos.first - newPos.first) == (newPos.second - oldPos.second))
        if (realMove) {
            if (newPos.first > oldPos.first && newPos.second > oldPos.second) {
                val cellstocheck = newPos.first - oldPos.first - 1
                for (i in 1..cellstocheck) {
                    val pp = schachbrett!!.findPiece(oldPos.first + i, oldPos.second + i)?.pos
                    if (pp != null) {
                        return false
                    }
                }
                if (pieceOnNewPos != null && pieceOnNewPos.color == color) {
                    return false
                }
                if (pieceOnNewPos != null && pieceOnNewPos.color != color) {
                    if (performMove) removePiece(pieceOnNewPos)
                    if (performMove) whiteTurn = !isWhite
                    return true
                }
                // Case moving one down right
                if (pieceOnNewPos == null && cellstocheck == 0) {
                    if (performMove) whiteTurn = !isWhite
                    return true
                }
                if (performMove) whiteTurn = !isWhite
                return true
            }
            if (newPos.first < oldPos.first && newPos.second < oldPos.second) {
                val cellstocheck = oldPos.first - newPos.first - 1
                for (i in 1..cellstocheck) {
                    val pp = schachbrett!!.findPiece(oldPos.first - i, oldPos.second - i)?.pos
                    if (pp != null) {
                        return false
                    }
                }
                if (pieceOnNewPos != null && pieceOnNewPos.color == color) {
                    return false
                }
                if (pieceOnNewPos != null && pieceOnNewPos.color != color) {
                    if (performMove) removePiece(pieceOnNewPos)
                    if (performMove) whiteTurn = !isWhite
                    return true
                }
                // Case moving one up left
                if (pieceOnNewPos == null && cellstocheck == 0) {
                    if (performMove) whiteTurn = !isWhite
                    return true
                }
                if (performMove) whiteTurn = !isWhite
                return true
            }
            if (newPos.first > oldPos.first && newPos.second < oldPos.second) {
                val cellstocheck = newPos.first - oldPos.first - 1
                for (i in 1..cellstocheck) {
                    val pp = schachbrett!!.findPiece(oldPos.first + i, oldPos.second - i)?.pos
                    if (pp != null) {
                        return false
                    }
                }
                if (pieceOnNewPos != null && pieceOnNewPos.color == color) {
                    return false
                }
                if (pieceOnNewPos != null && pieceOnNewPos.color != color) {
                    if (performMove) removePiece(pieceOnNewPos)
                    if (performMove) whiteTurn = !isWhite
                    return true
                }
                // Case moving one up right
                if (pieceOnNewPos == null && cellstocheck == 0) {
                    if (performMove) whiteTurn = !isWhite
                    return true
                }
                if (performMove) whiteTurn = !isWhite
                return true
            }
            if (newPos.first < oldPos.first && newPos.second > oldPos.second) {
                val cellstocheck = oldPos.first - newPos.first - 1
                for (i in 1..cellstocheck) {
                    val pp = schachbrett!!.findPiece(oldPos.first - i, oldPos.second + i)?.pos
                    if (pp != null) {
                        println("Found Piece blocking bishops path!")
                        return false
                    }
                }
                if (pieceOnNewPos != null && pieceOnNewPos.color == color) {
                    return false
                }
                if (pieceOnNewPos != null && pieceOnNewPos.color != color) {
                    if (performMove) removePiece(pieceOnNewPos)
                    if (performMove) whiteTurn = !isWhite
                    return true
                }
                // Case moving one down left
                if (pieceOnNewPos == null && cellstocheck == 0) {
                    if (performMove) whiteTurn = !isWhite
                    return true
                }
                if (performMove) whiteTurn = !isWhite
                return true
            }
        }
        return false
    }

    private fun moveQueen(
        oldPos: Pair<Int, Int>, newPos: Pair<Int, Int>, pieceOnNewPos: Piece?, isWhite: Boolean, performMove: Boolean
    ): Boolean {
        return moveRook(oldPos, newPos, pieceOnNewPos, isWhite, performMove) || moveBishop(
            oldPos, newPos, pieceOnNewPos, isWhite, performMove
        )
    }

    private fun moveKing(
        oldPos: Pair<Int, Int>, newPos: Pair<Int, Int>, pieceOnNewPos: Piece?, isWhite: Boolean, performMove: Boolean
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
                } else {
                    if (performMove) {
                        removePiece(pieceOnNewPos)
                    }
                }
            }

            // If performMove is true, toggle the turn
            if (performMove) {
                whiteTurn = !isWhite
            }
            println("color: $color , newPosColor: ${pieceOnNewPos?.color}")
            return true
        }
        // Rochade
        if (whiteRochade && isWhite && oldPos.first == 4 && oldPos.second == 7) {
            when {
                newPos.first == 6 && newPos.second == 7 -> {
                    if (performMove) {
                        val rook = schachbrett!!.findPiece(7, 7)
                        figurBewegen(rook!!, 5, 7)
                        whiteRochade = false
                        whiteTurn = false
                    }
                    return true
                }

                newPos.first == 2 && newPos.second == 7 -> {
                    if (performMove) {
                        val rook = schachbrett!!.findPiece(0, 7)
                        figurBewegen(rook!!, 3, 7)
                        whiteRochade = false
                        whiteTurn = false
                    }
                    return true
                }
            }
        }
        if (blackRochade && !isWhite && oldPos.first == 4 && oldPos.second == 0) {
            when {
                newPos.first == 6 && newPos.second == 0 -> {
                    if (performMove) {
                        val rook = schachbrett!!.findPiece(7, 0)
                        figurBewegen(rook!!, 5, 0)
                        blackRochade = false
                        whiteTurn = true
                    }
                    return true
                }

                newPos.first == 2 && newPos.second == 0 -> {
                    if (performMove) {
                        val rook = schachbrett!!.findPiece(0, 0)
                        figurBewegen(rook!!, 3, 0)
                        blackRochade = false
                        whiteTurn = true
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
        piece.removeFromParent()

        println("Piece removed: $piece")
    }

    override fun renderInternal(ctx: RenderContext) {}
}

fun addAllPieces(cont: SceneContainer) {
    // Add all pieces in right order and add them to the pieces list (white pieces are at the
    // bottom)
    for (i in 0 until 8) {
        pieces.add(Piece(PieceKind.WhitePawn, Colors.WHITE, i, 6, cont))
    }
    pieces.add(Piece(PieceKind.WhiteRook, Colors.WHITE, 0, 7, cont))
    pieces.add(Piece(PieceKind.WhiteRook, Colors.WHITE, 7, 7, cont))
    pieces.add(Piece(PieceKind.WhiteKnight, Colors.WHITE, 1, 7, cont))
    pieces.add(Piece(PieceKind.WhiteKnight, Colors.WHITE, 6, 7, cont))
    pieces.add(Piece(PieceKind.WhiteBishop, Colors.WHITE, 2, 7, cont))
    pieces.add(Piece(PieceKind.WhiteBishop, Colors.WHITE, 5, 7, cont))
    pieces.add(Piece(PieceKind.WhiteQueen, Colors.WHITE, 3, 7, cont))
    pieces.add(Piece(PieceKind.WhiteKing, Colors.WHITE, 4, 7, cont))

    for (i in 0 until 8) {
        pieces.add(Piece(PieceKind.BlackPawn, Colors.BLACK, i, 1, cont))
    }
    pieces.add(Piece(PieceKind.BlackRook, Colors.BLACK, 0, 0, cont))
    pieces.add(Piece(PieceKind.BlackRook, Colors.BLACK, 7, 0, cont))
    pieces.add(Piece(PieceKind.BlackKnight, Colors.BLACK, 1, 0, cont))
    pieces.add(Piece(PieceKind.BlackKnight, Colors.BLACK, 6, 0, cont))
    pieces.add(Piece(PieceKind.BlackBishop, Colors.BLACK, 2, 0, cont))
    pieces.add(Piece(PieceKind.BlackBishop, Colors.BLACK, 5, 0, cont))
    pieces.add(Piece(PieceKind.BlackQueen, Colors.BLACK, 3, 0, cont))
    pieces.add(Piece(PieceKind.BlackKing, Colors.BLACK, 4, 0, cont))
}

/*fun isMoveSafe(oldPos: Pair<Int, Int>, newPos: Pair<Int, Int>): Boolean {
    return true
    val piece = schachbrett?.findPiece(oldPos.first, oldPos.second)
    //println("Piece: $piece oldPos: $oldPos newPos: $newPos")
    val newPosPiece = schachbrett?.findPiece(newPos.first, newPos.second)

    if (piece != null) {
        figurBewegen(piece, newPos.first, newPos.second)
    }
    inCheck()
    if (whiteKingInCheck || blackKingInCheck) {
        if (piece != null) {
            //println("Piece position after moving: ${decodePos(piece.pos)}")
            figurBewegen(piece, oldPos.first, oldPos.second)

            //println("Piece position after moving back: ${decodePos(piece.pos)}")
        }
        // If the piece at the new position is threatening the king, allow the move
        if (newPosPiece != null &&
            (newPosPiece.kind == PieceKind.WhitePawn || newPosPiece.kind == PieceKind.BlackPawn)) {
            piece?.removePiece(newPosPiece)
            // Move the piece to the new position after capturing the pawn
            if (piece != null) {
                figurBewegen(piece, newPos.first, newPos.second)
            }
            return true
        }
        return false
    }
    // Only remove the piece if the move is safe
    if (newPosPiece != null) {
        piece?.removePiece(newPosPiece)
    }
    return true
}*/
