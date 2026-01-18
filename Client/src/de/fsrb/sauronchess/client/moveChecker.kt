package de.fsrb.sauronchess.client

import korlibs.image.color.*
import kotlin.math.*


typealias PieceId = Int

data class PieceState(
    val id: PieceId, var type: PieceKind, val color: RGBA, var positionInt: Int, var disabled: Boolean = false
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

    if (piece.color == pieceOnNewPos?.color) return false
    if (!showAvailableMovesCheck) println("Simulated move: $oldPos ->  ${newPos}, inCheck: ${inCheck(currentBoardState)} , pieceonnewpos $pieceOnNewPos")

    if (GameState.whiteTurn && piece.color == Colors.BLACK) return false
    if (!GameState.whiteTurn && piece.color == Colors.WHITE) return false

    movePieceOnBoard(pieceID, newPos, currentBoardState)

    pieceOnNewPos?.disabled = true

    if ((piece.color == Colors.WHITE && GameState.blackKingInCheck) || (piece.color == Colors.BLACK && GameState.whiteKingInCheck)) {
        movePieceOnBoard(pieceID, oldPos, currentBoardState)
        println("move is not possible cause king in check")
        return false
    }
    val stillInCheck = inCheck(currentBoardState)
    if (!showAvailableMovesCheck) println("Simulated move: $oldPos -> $newPos, stillInCheck: $stillInCheck , pieceonnewpos $pieceOnNewPos")

    movePieceOnBoard(pieceID, oldPos, currentBoardState)
    pieceOnNewPos?.disabled = false

    if ((GameState.whiteTurn && GameState.blackKingInCheck) || (!GameState.whiteTurn && GameState.whiteKingInCheck)) return true
    return !stillInCheck
}


class MC(
    var oldPosInt: Int, var newPosInt: Int, var boardState: BoardState
) {

    val oldPos = converter(oldPosInt)
    val newPos = converter(newPosInt)

    private var piece = boardState.pieces.find { it.positionInt == oldPosInt }
    var isWhite = if (piece?.color == Colors.WHITE) true else false
    private val diff get() = newPosInt - oldPosInt

    fun moveChecker(): Boolean {
        return when (piece!!.type) {
            PieceKind.WhitePawn, PieceKind.BlackPawn -> movePawn()
            PieceKind.WhiteKnight, PieceKind.BlackKnight -> moveKnight()
            PieceKind.WhiteBishop, PieceKind.BlackBishop -> moveBishop()
            PieceKind.WhiteRook, PieceKind.BlackRook -> moveRook()
            PieceKind.WhiteQueen, PieceKind.BlackQueen -> moveQueen()
            PieceKind.WhiteKing, PieceKind.BlackKing -> moveKing()
        }

    }

    private fun movePawn(): Boolean {
        val pieceOnNewPos = findPiece(newPosInt)
        val isPawnMoveForward = if (isWhite) diff == 8 else diff == -8

//        white: 8-15 black: 48-55

        val isInitialPawnMove = if (isWhite) {
            diff == 16 && oldPosInt in 8..15
        } else {
            diff == -16 && oldPosInt in 48..55
        }
        // TODO: Reimplement en passant
        /*val isEnPassant = if (isWhite) {
            newY - currentY == -1 && abs(newX - currentX) == 1
        } else {
            newY - currentY == 1 && abs(currentX - newX) == 1
        }*/
        if (isPawnMoveForward || isInitialPawnMove) {
//            enPassantLegal = isInitialPawnMove

            if (pieceOnNewPos == null) {
                return true
            }
        }
        // TODO: EDGE CASE!!!! White pawn on 47 can take rook on 56!!!
        // White: +7 or +9 Black: -7 or -9
        else if (((isWhite && diff == 7 || diff == 9) || (!isWhite && diff == -7 || diff == -9)) && pieceOnNewPos != null && pieceOnNewPos.isWhite != isWhite) {
            return true
        }

//            val pawnToTake = findPiece(newX, currentY)

        /*
        if (isEnPassant && pawnToTake != null && pawnToTake.isWhite == !isWhite && pawnToTake.enPassantLegal) {
            GameState.enPassantVictim = pawnToTake
            return true
        }*/
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
            p != null && p.id != piece?.id
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
        if (GameState.whiteCastlingLegal && isWhite) {
            when (newPosInt) {
                2 -> {

                    if (findPieceOnBoard(newPosInt, boardState) != null || findPieceOnBoard(
                            1, boardState
                        ) != null || findPieceOnBoard(
                            3, boardState
                        ) != null
                    ) return false
                    if (!simulateMove(oldPosInt, newPosInt, calledFromKing = true)) return false


                    GameState.castleAttempt = true
                    return true
                }

                6 -> {

                    if (findPieceOnBoard(newPosInt, boardState) != null || findPieceOnBoard(
                            5, boardState
                        ) != null
                    ) return false
                    if (!simulateMove(oldPosInt, newPosInt, calledFromKing = true)) return false
                    println("castling legalllllll")
                    GameState.castleAttempt = true
                    return true
                }
            }
        }
        if (GameState.blackCastlingLegal && !isWhite) {
            when (newPosInt) {
                58 -> {

                    if (findPieceOnBoard(newPosInt, boardState) != null || findPieceOnBoard(
                            57, boardState
                        ) != null || findPieceOnBoard(
                            59, boardState
                        ) != null
                    ) return false
                    if (!simulateMove(oldPosInt, newPosInt, calledFromKing = true)) return false


                    GameState.castleAttempt = true
                    return true
                }

                62 -> {

                    if (findPieceOnBoard(newPosInt, boardState) != null || findPieceOnBoard(
                            61, boardState
                        ) != null
                    ) return false
                    if (!simulateMove(oldPosInt, newPosInt, calledFromKing = true)) return false


                    GameState.castleAttempt = true
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
    return 63 - (y * 8 + x)
}
