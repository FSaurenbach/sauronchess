import korlibs.image.color.*
import korlibs.korge.view.*

inline fun Container.cell(
    color: RGBA, cx: Int, cy: Int, callback: @ViewDslMarker Cell.() -> Unit = {}
): Cell = Cell(color, cx, cy).addTo(this, callback)

class Cell(
    color: RGBA,
    var cx: Int,
    var cy: Int,
) : Container() {
    val cell: SolidRect = solidRect(CELL_SIZE, CELL_SIZE)

    init {
        moveCell(this, cx, cy)
        cell.color = color
    }
}

fun findCell(cx: Int, cy: Int): Cell? {
    return cells.find { it.cx == cx && it.cy == cy }
}
