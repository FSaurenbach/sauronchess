import korlibs.image.color.*
import korlibs.korge.view.*
import korlibs.math.geom.*
import kotlin.properties.*



inline fun Container.cell(
    isWhite: Boolean, cx: Int, cy: Int, text: String, callback: @ViewDslMarker (Cell.() -> Unit) = {}
): Cell = Cell(isWhite, cx, cy, text).addTo(this, callback)
var cellHeight = chessBoardHeight/8
var cellWidth = chessBoardWidth/8
class Cell(
    private var isWhite:Boolean,
    var cx: Int,
    var cy: Int,
    text: String,

) : Container() {
    private var color:RGBA by Delegates.notNull()

    // Retrieve the cell from the board based on the coordinates
    private val cell: SolidRect = solidRect(cellWidth, cellHeight)

    init {
        moveCell(cx, cy)
        colorCell()
        // add location to cell like a1 or h8

        this.text(text, color =Colors.BLACK)

    }
    fun colorCell(){

        if (isWhite){
            color = if (user_settings.darkMode) dark_mode_cellColorWhite else white_mode_cellColorWhite
        }
        if (!isWhite){
            color = if (user_settings.darkMode) dark_mode_cellColorBlack else white_mode_cellColorBlack
        }
        cell.color = color
    }
    private fun moveCell(
        newX: Int,
        newY: Int,
    ) {
        this.pos = Point(newX * cellWidth + offsetX, newY * cellHeight + offsetY)
    }

}


fun findCell(cx: Int, cy: Int): Cell? {
    for (cell in cells) {
        if (cell.cx == cx && cell.cy == cy) return cell
    }
    return null
}
fun reloadCells(){
    for (cell in cells){
        cell.colorCell()
    }
}
