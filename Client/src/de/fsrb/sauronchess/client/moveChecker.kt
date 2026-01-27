package de.fsrb.sauronchess.client

import kotlin.math.*


typealias PieceId = Int

data class PieceState(
    val id: PieceId,
    var kind: PieceKind,
    val isWhite: Boolean,
    var positionInt: Int,
    var disabled: Boolean = false,
    var enPassantLegal: Boolean = false
)

data class BoardState(
    val pieces: MutableList<PieceState> = mutableListOf()
)

fun movePieceOnBoard(pieceId: PieceId, newPosInt: Int, boardState: BoardState) {
    val piece = boardState.pieces.find { it.id == pieceId }
    piece!!.positionInt = newPosInt
}

fun findPieceOnBoard(positionInt: Int, boardState: BoardState): PieceState? =
    boardState.pieces.find { it.positionInt == positionInt }

/** Simulates a move for showing available moves.*/
fun simulateMove(
    oldPos: Int, newPos: Int, calledFromKing: Boolean = false, showAvailableMovesCheck: Boolean = false
): Boolean {
    val currentBoardState = boardState

    val piece: PieceState = currentBoardState.pieces.find { it.positionInt == oldPos }!!
    if (!calledFromKing) {
        if (!MC(oldPos, newPos, currentBoardState).moveChecker()) {
            return false
        }
    }

    inCheck(currentBoardState)
    val pieceOnNewPos = currentBoardState.pieces.find { it.positionInt == newPos }

    val pieceID: PieceId = currentBoardState.pieces.find { it.positionInt == oldPos }!!.id

    if (piece.isWhite == pieceOnNewPos?.isWhite) return false
    if (!showAvailableMovesCheck) println("Simulated move: $oldPos ->  ${newPos}, inCheck: ${inCheck(currentBoardState)} , pieceonnewpos $pieceOnNewPos")

    if (Game.whiteTurn && !piece.isWhite) return false
    if (!Game.whiteTurn && piece.isWhite) return false

    movePieceOnBoard(pieceID, newPos, currentBoardState)

    pieceOnNewPos?.disabled = true

    if ((piece.isWhite && Game.blackKingInCheck) || (!piece.isWhite && Game.whiteKingInCheck)) {
        movePieceOnBoard(pieceID, oldPos, currentBoardState)
        println("move is not possible cause king in check: wk:${Game.whiteKingInCheck}")
        return false
    }
    val stillInCheck = inCheck(currentBoardState)
    if (!showAvailableMovesCheck) println("Simulated move: $oldPos -> $newPos, stillInCheck: $stillInCheck , pieceonnewpos $pieceOnNewPos")

    movePieceOnBoard(pieceID, oldPos, currentBoardState)
    pieceOnNewPos?.disabled = false

    if ((Game.whiteTurn && Game.blackKingInCheck) || (!Game.whiteTurn && Game.whiteKingInCheck)) return true
    return !stillInCheck
}


class MC(
    private var oldPosInt: Int, private var newPosInt: Int, private var boardState: BoardState
) {

    private val oldPos = converter(oldPosInt)
    private val newPos = converter(newPosInt)

    private var piece = boardState.pieces.find { it.positionInt == oldPosInt }!!
    private val diff get() = newPosInt - oldPosInt

    fun moveChecker(): Boolean {
        return when (piece.kind) {
            PieceKind.WhitePawn, PieceKind.BlackPawn -> movePawn()
            PieceKind.WhiteKnight, PieceKind.BlackKnight -> moveKnight()
            PieceKind.WhiteBishop, PieceKind.BlackBishop -> moveBishop()
            PieceKind.WhiteRook, PieceKind.BlackRook -> moveRook()
            PieceKind.WhiteQueen, PieceKind.BlackQueen -> moveQueen()
            PieceKind.WhiteKing, PieceKind.BlackKing -> moveKing()
        }

    }

    private fun movePawn(): Boolean {
        val pieceOnNewPos = findPieceOnBoard(newPosInt, boardState)

        val isPawnMoveForward = if ((piece.isWhite && UserSettings.whiteOnBottom) || (!piece.isWhite && !UserSettings.whiteOnBottom)) {
            newPos.second - oldPos.second == -1 && newPos.first == oldPos.first
        } else {
            newPos.second - oldPos.second == 1 && newPos.first == oldPos.first
        }

        val isInitialPawnMove = if ((piece.isWhite && UserSettings.whiteOnBottom) || (!piece.isWhite && !UserSettings.whiteOnBottom)) {
            oldPos.second == 6 && newPos.second == 4 && oldPos.first == newPos.first
        } else {
            oldPos.second == 1 && newPos.second == 3 && newPos.first == oldPos.first
        }
        val isEnPassant = if ((piece.isWhite && UserSettings.whiteOnBottom) || (!piece.isWhite && !UserSettings.whiteOnBottom)) {
            newPos.second - oldPos.second == -1 && abs(newPos.first - oldPos.first) == 1
        } else {
            newPos.second - oldPos.second == 1 && abs(oldPos.first - newPos.first) == 1
        }

        if (isPawnMoveForward || (isInitialPawnMove && findPieceOnBoard(oldPosInt + diff / 2, boardState) == null)) {
            piece.enPassantLegal = isInitialPawnMove
            if (pieceOnNewPos == null) {
                return true
            }
        } else if ((abs(newPos.second - oldPos.second) == 1 && abs(newPos.first - oldPos.first) == 1)) {
            // Fix that pawns can take pieces behind themselves (check correct direction if taking a piece)
            if (((piece.isWhite && UserSettings.whiteOnBottom) && newPos.second > oldPos.second) || ((!piece.isWhite && !UserSettings.whiteOnBottom) && newPos.second < oldPos.second)) return false

            if (pieceOnNewPos != null && pieceOnNewPos.isWhite != piece.isWhite) {
                println("im: $oldPos and i")
                return true
            }
        }

        val pawnToTake = findPieceOnBoard(converter(newPos.first, oldPos.second), boardState)

        if (isEnPassant && pawnToTake != null && pawnToTake.isWhite == !piece.isWhite && pawnToTake.enPassantLegal) {
            Game.enPassantVictim = boardState.pieces.find { it.id == pawnToTake.id }
            return true
        }
        return false
    }

    private fun moveKnight(): Boolean {
        val xDiff = abs(newPos.first - oldPos.first)
        val yDiff = abs(newPos.second - oldPos.second)

        return (xDiff == 2 && yDiff == 1) || (xDiff == 1 && yDiff == 2)
    }

    private fun moveBishop(): Boolean {
        val dx = abs(newPos.first - oldPos.first)
        val dy = abs(newPos.second - oldPos.second)

        // Check if the move is diagonal
        if (dx != dy) return false

        // Check for obstructions on the diagonal path
        val directionX = (newPos.first - oldPos.first).sign
        val directionY = (newPos.second - oldPos.second).sign

        for (i in 1 until dx) {
            val checkPos = oldPos.first + i * directionX to oldPos.second + i * directionY

            if (findPieceOnBoard(converter(checkPos.first, checkPos.second), boardState) != null) {
                return false
            }
        }

        return true
    }

    private fun moveRook(): Boolean {


        val isVerticalMove = oldPos.second == newPos.second
        val isHorizontalMove = oldPos.first == newPos.first
        val range = when {
            isHorizontalMove -> {
                if (diff > 0) oldPosInt + 8 until newPosInt step 8 else oldPosInt downTo newPosInt + 8 step 8
            }

            isVerticalMove -> {
                if (diff > 0) oldPosInt + 1 until newPosInt else oldPosInt downTo newPosInt + 1
            }

            else -> return false
        }

        return !range.any { pos ->
            val p = findPieceOnBoard(pos, boardState)
            p != null && p.id != piece.id
        }
    }

    private fun moveQueen(): Boolean = moveRook() || moveBishop()

    private fun moveKing(): Boolean {

        // Determine the move direction
        val deltaX = newPos.first - oldPos.first
        val deltaY = newPos.second - oldPos.second

        // Check if the move is within the valid range for a king

        if (abs(deltaX) <= 1 && abs(deltaY) <= 1) return true

        // Castling
        if (Game.whiteCastlingLegal && piece.isWhite) {
            when (newPosInt) {
                2 -> {

                    if (findPieceOnBoard(newPosInt, boardState) != null || findPieceOnBoard(
                            1, boardState
                        ) != null || findPieceOnBoard(
                            3, boardState
                        ) != null
                    ) return false
                    if (!simulateMove(oldPosInt, newPosInt, calledFromKing = true)) return false


                    Game.castleAttempt = true
                    return true
                }

                6 -> {

                    if (findPieceOnBoard(newPosInt, boardState) != null || findPieceOnBoard(
                            5, boardState
                        ) != null
                    ) return false
                    if (!simulateMove(oldPosInt, newPosInt, calledFromKing = true)) return false
                    println("castling legalllllll")
                    Game.castleAttempt = true
                    return true
                }
            }
        }
        if (Game.blackCastlingLegal && !piece.isWhite) {
            when (newPosInt) {
                58 -> {

                    if (findPieceOnBoard(newPosInt, boardState) != null || findPieceOnBoard(
                            57, boardState
                        ) != null || findPieceOnBoard(
                            59, boardState
                        ) != null
                    ) return false
                    if (!simulateMove(oldPosInt, newPosInt, calledFromKing = true)) return false


                    Game.castleAttempt = true
                    return true
                }

                62 -> {

                    if (findPieceOnBoard(newPosInt, boardState) != null || findPieceOnBoard(
                            61, boardState
                        ) != null
                    ) return false
                    if (!simulateMove(oldPosInt, newPosInt, calledFromKing = true)) return false


                    Game.castleAttempt = true
                    return true
                }
            }
        }

        return false
    }
}

fun converter(positionInt: Int): Pair<Int, Int> {
    require(positionInt in 0..63) { "positionInt must be 0..63" }
    val t = 63 - positionInt
    val y = t / 8
    val x = t % 8
    return x to y // Pair(first = x, second = y)
}

fun converter(x: Int, y: Int): Int {
    require(x in 0..7 && y in 0..7)
    return 63 - (y * 8 + x)
}
