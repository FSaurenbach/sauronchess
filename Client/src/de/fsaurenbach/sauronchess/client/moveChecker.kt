package de.fsaurenbach.sauronchess.client

import korlibs.image.color.*
import kotlin.math.*


typealias PieceId = Int

data class PieceState(
    val id: PieceId,
    val type: PieceKind,
    val color: RGBA,
    var positionInt: Int,
    var disabled: Boolean = false
)

data class BoardState(
    val pieces: MutableList<PieceState> = mutableListOf()
)

fun movePieceOnBoard(pieceId: PieceId, newPosInt: Int, boardState: BoardState) {
    //println("pieceID: $pieceId")
    val piece = boardState.pieces.find { it.id == pieceId }
    //println("piece: $piece")
    piece!!.positionInt = newPosInt
}

fun removePieceOnBoard(pieceId: PieceId, boardState: BoardState){
    boardState.pieces.remove(boardState.pieces.find { it.id == pieceId })
}

fun findPieceOnBoard(positionInt: Int, boardState: BoardState): PieceState? = boardState.pieces.find { it.positionInt == positionInt }


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
    if (!showAvailableMovesCheck)  println("Simulated move: $oldPos ->  ${newPos}, inCheck: ${inCheck(currentBoardState)} , pieceonnewpos $pieceOnNewPos")

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
    var oldPosInt: Int,
    var newPosInt: Int,
    var boardState: BoardState
) {

    private var piece = boardState.pieces.find { it.positionInt == oldPosInt }
    var isWhite = if (piece?.color == Colors.WHITE) true else false
    private val diff get() = newPosInt - oldPosInt

    fun moveChecker(): Boolean {


//        if (diff == 0) return false
        return when (piece!!.type) {
            PieceKind.WhitePawn, PieceKind.BlackPawn -> movePawn()
            PieceKind.WhiteRook, PieceKind.BlackRook -> moveRook()
            PieceKind.WhiteKing, PieceKind.BlackKing -> moveKing()

            /*
            PieceKind.WhiteKnight, PieceKind.BlackKnight -> moveKnight()
            PieceKind.WhiteBishop, PieceKind.BlackBishop -> moveBishop()
            PieceKind.WhiteQueen, PieceKind.BlackQueen -> moveQueen()
            */
            else -> {
                println("error: ${piece!!.type}")
                throw Error()
            }
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



    private fun moveRook(): Boolean {
        val oldPos = converter(oldPosInt)
        val newPos = converter(newPosInt)


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


    private fun moveKing(): Boolean {

        val oldPos = converter(oldPosInt)
        val newPos = converter(newPosInt)
        // Determine the move direction
        val deltaX = newPos.first - oldPos.first
        val deltaY = newPos.second - oldPos.second

        // Check if the move is within the valid range for a king

        if (abs(deltaX) <= 1 && abs(deltaY) <= 1) return true

        // Castling
        /*if (GameState.whiteCastlingLegal && isWhite && currentX == 4 && currentY == 7) {
            when {
                newX == 6 && newY == 7 -> {

                    if (findPiece(newX, newY) != null || findPiece(5, 7) != null) return false
                    if (!simulateMove(currentPos, newPos, this, true)) return false

                    GameState.castleAttempt = true
                    return true
                }

                newX == 2 && newY == 7 -> {

                    if (findPiece(1, 7) != null || findPiece(newX, newY) != null || findPiece(
                            3, 7
                        ) != null
                    ) return false
                    if (!simulateMove(currentPos, newPos, this, true)) return false

                    GameState.castleAttempt = true
                    return true
                }
            }
        }
        if (GameState.blackCastlingLegal && !isWhite && currentX == 4 && currentY == 0) {
            when {
                newX == 6 && newY == 0 -> {

                    if (findPiece(newX, newY) != null || findPiece(5, 0) != null) return false
                    if (!simulateMove(currentPos, newPos, this, true)) return false

                    GameState.castleAttempt = true
                    return true
                }

                newX == 2 && newY == 0 -> {

                    if (findPiece(1, 0) != null || findPiece(newX, newY) != null || findPiece(
                            3, 0
                        ) != null
                    ) return false
                    if (!simulateMove(currentPos, newPos, this, true)) return false

                    GameState.castleAttempt = true
                    return true
                }
            }
        }*/

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
