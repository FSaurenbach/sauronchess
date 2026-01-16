package de.fsaurenbach.sauronchess.client

import korlibs.korge.view.*
import korlibs.korge.view.align.*
import korlibs.math.*

fun initializeBoard(chessboard: Container) {
    var d = 0

    //TEMP
    var positionInt = 0
    for (cy in 7 downTo 0) {
        for (cx in 0 until 8) {
            val text = "${'a' + cx}${8 - cy}"

            GameState.cells.add(chessboard.cell(!d.isEven, cx, cy, text, positionInt))
            positionInt++
            d++
        }
        d++
    }
}

fun findPiece(positionInt: Int): Piece? = GameState.pieces.find { it.positionInt == positionInt }

fun movePiece(
    piece: Piece, newPositionInt: Int
) {
    findCell(newPositionInt)?.let {
        piece.centerOn(it)
    }
    piece.positionInt = (newPositionInt)
    movePieceOnBoard(piece.id, newPositionInt, boardState)

}
