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
    // Retrieve the cell from the board based on the coordinates
    val cell: SolidRect = solidRect(64, 64)

    init {
        moveCell(this, cx, cy)
        cell.color = color

    }
}


fun findCell(cx: Int, cy: Int): Cell? {
    for (cell in cells) {
        if (cell.cx == cx && cell.cy == cy) return cell
    }
    return null
}
