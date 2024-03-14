import korlibs.image.color.*
import korlibs.korge.scene.*
import korlibs.korge.view.*
import korlibs.math.geom.*

/**
 * Represents a cell in a grid with a specified color and position.
 *
 * @constructor Creates a cell with the specified color, x-coordinate, y-coordinate, and scene
 *   container.
 * @param color The color of the cell represented as RGBA.
 * @property cx The x-coordinate of the cell in the grid.
 * @property cy The y-coordinate of the cell in the grid.
 * @param cont The scene container to which the cell belongs.

 */
class Cell(color: RGBA, var cx: Int, var cy: Int, cont: SceneContainer) : Container() {

    private var position: Point

    init {
        // Retrieve the cell from the board based on the coordinates
        val cell = board[cx][cy]

        // Calculate the x and y coordinates of the cell within the scene
        cell.x = (cy * (512 / 8)).toDouble()
        cell.y = (cx * (512 / 8)).toDouble()

        // Set the position of the cell
        position = Point(cell.x, cell.y)

        // Set the color of the cell
        cell.color = color

        // Add the cell to the specified scene container
        cont.addChild(cell)
    }
}
