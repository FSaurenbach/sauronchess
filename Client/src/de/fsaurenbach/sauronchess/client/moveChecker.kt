package de.fsaurenbach.sauronchess.client

import korlibs.image.color.*


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
    val piece = boardState.pieces.find { it.id == pieceId }
    piece?.positionInt = newPosInt
}

fun removePieceOnBoard(pieceId: PieceId, boardState: BoardState){
    boardState.pieces.remove(boardState.pieces.find { it.id == pieceId })
}

/** Simulates a move for showing available moves.*/
fun simulateMove(
    oldPos: Int, newPos: Int, calledFromKing: Boolean = false
): Boolean {
    val currentBoardState = boardState

    val piece: PieceState = currentBoardState.pieces.find { it.positionInt == oldPos }!!
    if (!calledFromKing) {
        if (!MC(oldPos, newPos).moveChecker(newPos)) {
            return false
        }
    }

//    inCheck(GameState.pieces, calledFromKing)
    val pieceOnNewPos = currentBoardState.pieces.find { it.positionInt == newPos }

    val pieceID: PieceId = currentBoardState.pieces.find { it.positionInt == oldPos }!!.id

    if (piece.color == pieceOnNewPos?.color) return false
    // ${inCheck(GameState.pieces)}
    println("Simulated move: ${oldPos} ->  ${newPos}, inCheck:  , pieceonnewpos $pieceOnNewPos")
    if (GameState.whiteTurn && piece.color == Colors.BLACK) return false
    if (!GameState.whiteTurn && piece.color == Colors.WHITE) return false


    movePieceOnBoard(pieceID, newPos, currentBoardState)

    pieceOnNewPos?.disabled = true

    if ((piece.color == Colors.WHITE && GameState.blackKingInCheck) || (piece.color == Colors.BLACK && GameState.whiteKingInCheck)) {
        movePieceOnBoard(pieceID, oldPos, currentBoardState)
//        println("move is not possible")
        return false
    }
//    val stillInCheck = inCheck(GameState.pieces, calledFromKing)
//    println("Simulated move: ${piece.cx}, ${piece.cy}, stillInCheck: $stillInCheck")
    movePieceOnBoard(pieceID, oldPos, currentBoardState)
    pieceOnNewPos?.disabled = false
    return true // !stillInCheck
}


class MC(
    var oldPosInt: Int,
    var newPosInt: Int
) {

    var piece = boardState.pieces.find { it.positionInt == oldPosInt }
    var isWhite = if (piece?.color == Colors.WHITE) true else false
    private val diff get() = newPosInt - oldPosInt

    fun moveChecker(
        newPosOverride: Int,
    ): Boolean {
        newPosInt = newPosOverride


//        if (diff == 0) return false
        return when (piece!!.type) {
            PieceKind.WhitePawn, PieceKind.BlackPawn -> movePawn()
            PieceKind.WhiteRook, PieceKind.BlackRook -> moveRook()


            /*
            PieceKind.WhiteKnight, PieceKind.BlackKnight -> moveKnight()
            PieceKind.WhiteBishop, PieceKind.BlackBishop -> moveBishop()
            PieceKind.WhiteQueen, PieceKind.BlackQueen -> moveQueen()
            PieceKind.WhiteKing, PieceKind.BlackKing -> moveKing()*/
            else -> {
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
            val p = findPiece(pos)
            p != null && p.id != piece?.id
        }
    }
}
fun converter(positionInt: Int): Pair<Int, Int> {
    require(positionInt in 0..63) { "positionInt must be 0..63" }
    val t = 63 - positionInt
    val y = t / 8
    val x = t % 8
    return x to y // Pair(first = x, second = y)
}
