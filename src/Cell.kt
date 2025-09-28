import korlibs.image.color.*
import korlibs.korge.view.*
import korlibs.math.geom.*
import kotlin.properties.*


inline fun Container.cell(
    isWhite: Boolean, cx: Int, cy: Int, text: String, callback: @ViewDslMarker (Cell.() -> Unit) = {}
): Cell = Cell(isWhite, cx, cy, text).addTo(this, callback)

val cellHeight get() = DisplayConfig.chessBoardHeight / 8
val cellWidth get() = DisplayConfig.chessBoardWidth / 8

class Cell(
    private var isWhite: Boolean,
    var cx: Int,
    var cy: Int,
    text: String,

    ) : Container() {
    private var color: RGBA by Delegates.notNull()

    // Retrieve the cell from the board based on the coordinates
    private val cell: SolidRect = solidRect(cellWidth, cellHeight)

    init {
        moveCell(cx, cy)
        colorCell()
        // add location to cell like a1 or h8

        this.text(text, color = Colors.BLACK)

    }

    fun colorCell() {
        if (isWhite) {
            color = if (userSettings.darkMode) ThemeColors.darkModeWhite else ThemeColors.whiteModeWhite
        }
        if (!isWhite) {
            color = if (userSettings.darkMode) ThemeColors.darkModeBlack else ThemeColors.whiteModeBlack
        }
        cell.color = color
    }

    private fun moveCell(
        newX: Int,
        newY: Int,
    ) {
        this.pos = Point(newX * cellWidth + DisplayConfig.offsetX, newY * cellHeight + DisplayConfig.offsetY)
    }

}


fun findCell(cx: Int, cy: Int): Cell? {
    for (cell in GameState.cells) {
        if (cell.cx == cx && cell.cy == cy) return cell
    }
    return null
}

fun reloadCells() {
    for (cell in GameState.cells) {
        cell.colorCell()
    }
}
