import korlibs.image.color.Colors
import korlibs.image.color.RGBA
import korlibs.korge.input.*
import korlibs.korge.render.RenderContext
import korlibs.korge.scene.SceneContainer
import korlibs.korge.view.Image
import korlibs.korge.view.View
import korlibs.korge.view.addTo
import korlibs.korge.view.size
import korlibs.math.geom.*

class Piece(kind: PieceKind, color: RGBA, i: Int, j: Int, cont: SceneContainer) : View() {

        var pieceKind:PieceKind = kind
        var piece = Image(whitePawn!!)
        var position = board[i][j].pos
        init {
            if (color == Colors.WHITE) {
                if (kind == PieceKind.Pawn) {
                    piece.size(Size(64, 64))
                    piece.addTo(cont) // Add the piece to the scene first
                    moveTo(i, j) // Then update its position
                }
            }
            clickListener()

        }

    fun moveTo(i: Int, j: Int) {
        // Update the position of 'piece' based on 'i' and 'j'
        piece.pos = position
    }
    fun decodePosition(i: Point){
        var x = i.x /64
        var y = i.y/64
        return board[x][y]

    }


    fun clickListener(){
        piece.onClick {
            println(pieceKind)
            println("position")
            println(position)
            println(decodePosition(position))

        }
    }





    override fun renderInternal(ctx: RenderContext) {
        // Implement your rendering logic here
    }
}
