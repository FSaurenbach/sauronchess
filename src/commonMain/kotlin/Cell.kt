@file:Suppress("ktlint:standard:no-wildcard-imports")

import korlibs.image.color.*
import korlibs.korge.view.*

/**
 * Represents a cell in a grid with a specified color and position.
 *
 * @param color The color of the cell represented as RGBA.
 * @param cont The scene container to which the cell belongs.
 * @constructor Creates a cell with the specified color, x-coordinate, y-coordinate, and scene
 *   container.
 * @property cx The x-coordinate of the cell in the grid.
 * @property cy The y-coordinate of the cell in the grid.
 */

inline fun Container.cell(
    color:RGBA,
    cx: Int,
    cy: Int,
    callback: @ViewDslMarker Cell.() -> Unit = {}
): Cell = Cell(color, cx, cy).addTo(this, callback)

class Cell(
    color: RGBA,
    var cx: Int,
    var cy: Int,
) : Container() {
    // Retrieve the cell from the board based on the coordinates
    private val cell:SolidRect = solidRect(64, 64)
    val baseColor = color

    init {

        // Calculate the x and y coordinates of the cell within the scene
        moveCell(this, cx, cy)

        // Set the position of the cell

        // Set the color of the cell
        cell.color = color

    }
    fun color(color: RGBA) {
        cell.color = color
    }
}


fun findCell(cx: Int, cy: Int): Cell? {
    for (cell in cells){
        if (cell.cx == cx && cell.cy == cy) return cell
    }
    return null
}
