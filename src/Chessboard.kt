import korlibs.image.color.*
import korlibs.image.text.*
import korlibs.korge.view.*
import korlibs.math.*
import korlibs.math.geom.*

/**
 * Initialize the chessboard with alternating colored squares.
 */
fun initializeBoard(chessboard: Container) {
    var d = 0
    for (cx in 0 until 8) {
        for (cy in 0 until 8) {
            val cellColor = if (d.isEven) Colors.WHITE else Colors["#964d22"]
            val cl = chessboard.cell(cellColor, cx, cy)
            val text = "${'a' + cx}${8 - cy}"

            cells.add(cl)
            Text(
                text,
                textSize = 16.0,
                alignment = TextAlignment.TOP_LEFT,
                color = Colors.BLACK,
            ).position(Point(cx * CELL_SIZE.toDouble() + offsetX, cy * CELL_SIZE.toDouble() + offsetY)).addTo(chessboard)
            cl.text(text)
            d++
        }
        d++
    }
}

fun findPiece(x: Int, y: Int): Piece? {
    return pieces.find { it.cx == x && it.cy == y }
}

fun movePiece(piece: Piece, newX: Int, newY: Int) {
    piece.position(Point(newX * CELL_SIZE.toDouble() + offsetX, newY * CELL_SIZE.toDouble() + offsetY))
    piece.cx = newX
    piece.cy = newY
}

fun moveCell(cell: View, newX: Int, newY: Int) {
    cell.pos = Point(newX * CELL_SIZE.toDouble() + offsetX, newY * CELL_SIZE.toDouble() + offsetY)
}
