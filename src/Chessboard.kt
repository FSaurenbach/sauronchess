import korlibs.image.color.*
import korlibs.korge.view.*
import korlibs.korge.view.align.*
import korlibs.math.*

fun initializeBoard(chessboard: Container) {
    // set the position of the cells RELATIVE to the container
    println("Container position: $offsetX, $offsetY")
    var d = 0
    for (cx in 0 until 8) {
        for (cy in 0 until 8) {
            val cellColor = if (d.isEven) Colors["#ebecd0"] else Colors["#964d22"]
            val text = "${'a' + cx}${8 - cy}"

            val cl = chessboard.cell(cellColor, cx, cy, text, d.isEven)


            cells.add(cl)

            d++
        }
        d++
    }
}

fun findPiece(x: Int, y: Int): Piece? {
    return pieces.find { it.cx == x && it.cy == y }
}

fun movePiece(
    piece: Piece,
    newX: Int,
    newY: Int,
) {
    //piece.position(Point(newX * 64.0 + offsetX, newY * 64.0 + offsetY))

    findCell(newX, newY)?.let { piece.centerOn(it) }

    piece.cx = newX
    piece.cy = newY
}

