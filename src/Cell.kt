import korlibs.image.color.*
import korlibs.korge.view.*
import korlibs.math.geom.*


inline fun Container.cell(
    color: RGBA, cx: Int, cy: Int, text: String, callback: @ViewDslMarker (Cell.() -> Unit) = {}
): Cell = Cell(color, cx, cy, text).addTo(this, callback)
var cellHeight = chessBoardHeight/8
var cellWidth = chessBoardWidth/8
class Cell(
    color: RGBA,
    var cx: Int,
    var cy: Int,
    text: String,
) : Container() {
    // Retrieve the cell from the board based on the coordinates
    private val cell: SolidRect = solidRect(cellWidth, cellHeight)

    init {
        moveCell(cx, cy)
        cell.color = color
        // add location to cell like a1 or h8

        this.text(text, color =Colors.BLACK)

    }
    private fun moveCell(
        newX: Int,
        newY: Int,
    ) {
        this.pos = Point(newX * cellHeight + offsetX, newY * cellHeight + offsetY)
    }

}


fun findCell(cx: Int, cy: Int): Cell? {
    for (cell in cells) {
        if (cell.cx == cx && cell.cy == cy) return cell
    }
    return null
}
