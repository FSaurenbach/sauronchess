package de.fsaurenbach.sauronchess

import korlibs.korge.view.*
import korlibs.korge.view.align.*
import korlibs.math.*
import kotlinx.serialization.Serializable

fun initializeBoard(chessboard: Container) {
    var d = 0
    for (cx in 0 until 8) {
        for (cy in 0 until 8) {
            val text = "${'a' + cx}${8 - cy}"

            GameState.cells.add(chessboard.cell(d.isEven, cx, cy, text))

            d++
        }
        d++
    }
}

fun findPiece(x: Int, y: Int): Piece? = GameState.pieces.find { it.cx == x && it.cy == y }

fun movePiece(
    piece: Piece,
    newX: Int,
    newY: Int,
) {
    findCell(newX, newY).let { piece.centerOn(it) }

    piece.cx = newX
    piece.cy = newY
}
@Serializable
data class Position(var cx: Int, var cy: Int, var newX: Int, var newY: Int)
