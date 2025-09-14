@file:Suppress("ktlint:standard:no-wildcard-imports")

import korlibs.image.color.*
import korlibs.image.text.*
import korlibs.korge.view.*
import korlibs.math.*
import korlibs.math.geom.*

fun initializeBoard(cont: Container) {
    // set the position of the cells RELATIVE to the container
    println("Container position: $offsetX, $offsetY")
    var d = 0
    for (cx in 0 until 8) {
        for (cy in 0 until 8) {
            val cellColor = if (d.isEven) Colors.WHITE else Colors["#964d22"]
            val cl = cont.cell(cellColor, cx, cy)
            // add location to cell like a1 or h8
            val text = "${'a' + cx}${8 - cy}"

            cells.add(cl)
            Text(
                text,
                textSize = 16.0,
                alignment = TextAlignment.TOP_LEFT,
                color = Colors.BLACK,
            ).position(Point(cx * 64.0 + offsetX, cy * 64.0 + offsetY)).addTo(cont) // Use `this` to add to Schachbrett
            cl.text(text)
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
    piece.position(Point(newX * 64.0 + offsetX, newY * 64.0 + offsetY))

    piece.cx = newX
    piece.cy = newY
}

fun moveCell(
    cell: View,
    newX: Int,
    newY: Int,
) {
    cell.pos = Point(newX * 64.0 + offsetX, newY * 64.0 + offsetY)
    cell.position(Point(newX * 64.0 + offsetX, newY * 64.0 + offsetY))
}
