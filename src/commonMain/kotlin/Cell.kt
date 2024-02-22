import korlibs.image.color.RGBA
import korlibs.korge.input.*
import korlibs.korge.scene.SceneContainer
import korlibs.korge.view.*

class Cell(color: RGBA, i:Int, j:Int, cont: SceneContainer){
    init {
        var cell = board[i][j]
        cell.x = (j * (512 / 8)).toDouble()
        cell.y = (i * (512 / 8)).toDouble()
        cell.color = color
        cont.addChild(cell)
        clickListener(i, j)

    }
    fun clickListener(i: Int, j: Int){
        var cell = board[i][j]
        cell.onClick {
            println("$i  $j")
        }
    }
}
