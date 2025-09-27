import korlibs.korge.view.*
import korlibs.math.*

fun initializeBoard(chessboard: Container) {
    var d = 0
    for (cx in 0 until DisplayConfig.boardSize) {
        for (cy in 0 until DisplayConfig.boardSize) {
            val text = "${'a' + cx}${DisplayConfig.boardSize - cy}"
            GameState.cells.add(chessboard.cell(d.isEven, cx, cy, text))
            d++
        }
        d++
    }
}

fun findPiece(x: Int, y: Int): Piece? {
    return GameState.pieces.find { it.cx == x && it.cy == y }
}

fun movePiece(
    piece: Piece,
    newX: Int,
    newY: Int,
) {
    findCell(newX, newY)?.let { piece.centerOn(it) }
    piece.cx = newX
    piece.cy = newY
}

