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
            val cl = Cell(cellColor, cx, cy, cont)
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

fun findPiece(
    x: Int,
    y: Int,
): Piece? {
    for (piece in pieces) {
        if (piece.cx == x && piece.cy == y) {
            return piece
        }
    }
    return null
}

fun figurBewegen(
    figur: Piece,
    newX: Int,
    newY: Int,
) {
    figur.pos = Point(newX * 64.0 + offsetX, newY * 64.0 + offsetY)
    figur.position(Point(newX * 64.0 + offsetX, newY * 64.0 + offsetY))
    figur.cx = newX
    figur.cy = newY
    figur.bw(newX, newY)
}

fun objektBewegen(
    figur: View,
    newX: Int,
    newY: Int,
) {
    figur.pos = Point(newX * 64.0 + offsetX, newY * 64.0 + offsetY)
    figur.position(Point(newX * 64.0 + offsetX, newY * 64.0 + offsetY))
}
