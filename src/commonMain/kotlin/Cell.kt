import korlibs.image.color.*
import korlibs.korge.scene.*
import korlibs.korge.view.*
import korlibs.math.geom.*


class Cell(color: RGBA, var cx: Int, var cy: Int, cont: SceneContainer) : Container() {
    lateinit var position:Point
    val prevColor = color
    init {
        var cell = board[cx][cy]

        cell.x = (cy * (512 / 8)).toDouble()
        cell.y = (cx * (512 / 8)).toDouble()
        position = Point(cell.x, cell.y)
        cell.color = color
        cont.addChild(cell)

    }


}
