@file:Suppress("ktlint:standard:no-wildcard-imports")

import korlibs.image.color.*
import korlibs.korge.scene.*
import korlibs.korge.view.*
import korlibs.math.geom.*

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
class Cell(
    color: RGBA,
    private var cx: Int,
    private var cy: Int,
    cont: SceneContainer,
) : Container() {
    private var position: Point

    init {
        // Retrieve the cell from the board based on the coordinates
        val cell = SolidRect(64, 64)

        // Calculate the x and y coordinates of the cell within the scene
        objektBewegen(cell, cx, cy)

        // Set the position of the cell
        position = Point(cell.x, cell.y)

        // Set the color of the cell
        cell.color = color

        // Add the cell to the specified scene container
        cont.addChild(cell)
    }
}
