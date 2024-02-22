import korlibs.image.color.Colors
import korlibs.image.color.RGBA
import korlibs.korge.input.*
import korlibs.korge.render.RenderContext
import korlibs.korge.scene.SceneContainer
import korlibs.korge.view.*
import korlibs.math.geom.*
import kotlinx.coroutines.*

class Piece(kind: PieceKind, color: RGBA, i: Int, j: Int, cont: SceneContainer) : View() {

        var pieceKind:PieceKind = kind
        var piece = Image(whitePawn!!)
        var position = board[i][j].pos
        init {
            if (color == Colors.WHITE) {
                if (kind == PieceKind.whitePawn) {
                    piece.size(Size(64, 64))
                    piece.addTo(cont) // Add the piece to the scene first
                    moveTo(i, j) // Then update its position
                }
            }
            clickListener(i, j)

        }

    private fun moveTo(i: Int, j: Int) {
        // Update the position of 'piece' based on 'i' and 'j'
        piece.pos = board[i][j].pos
    }
    private fun decodePosition(i: Point): Pair<Int, Int> {
        val x = i.x / 64
        val y = i.y / 64
        val yx = "[$y][$x]"
        return Pair(y.toInt(), x.toInt())
    }



    private fun clickListener(i: Int, j: Int){
        piece.onClick {
            println(pieceKind)
            println("position")
            println(position)
            println("pair")
            println(decodePosition(position))
            lastClicked = board[i][j].pos
            println(decodePosition(lastClicked!!))


        }
    }





    override fun renderInternal(ctx: RenderContext) {
        // Implement your rendering logic here
    }
}
