import korlibs.image.color.*
import korlibs.korge.input.*
import korlibs.korge.render.*
import korlibs.korge.scene.*
import korlibs.korge.view.*
import korlibs.math.geom.*


enum class PieceKind(kind: String) {
    whitePawn("wP"),
    blackPawn("bP")

}

fun decodePosition(cxy: Point): Pair<Int, Int> {
    val x = cxy.x / 64
    val y = cxy.y / 64
    return Pair(x.toInt(), y.toInt())
}


fun decode2(cx: Double, cy: Double): Point {
    val x = cx / 64
    val y = cy / 64
    return Point(x, y)
}

class Piece(kind: PieceKind, color: RGBA, cx: Int, cy: Int, cont: SceneContainer) : View() {

    var pieceKind: PieceKind = kind
    lateinit var piece:Image
    var position = board[cx][cy].pos

    init {
        if (color == Colors.WHITE) {
            if (kind == PieceKind.whitePawn) {
                piece = Image(whitePawn!!)
                piece.size(Size(64, 64))
                piece.addTo(cont) // Add the piece to the scene first
                moveTo(cx, cy) // Then update its position
            }
        }
        if (color == Colors.BLACK) {
            if (kind == PieceKind.blackPawn) {
                piece = Image(blackPawn!!)
                piece.size(Size(64, 64))
                piece.addTo(cont) // Add the piece to the scene first
                moveTo(cx, cy) // Then update its position
            }
        }

        //clickListener(cx, cy)

    }

    fun moveTo(cx: Int, cy: Int) {
        // Update the position of 'piece' based on 'cx' and 'cy'
        piece.position((cx * 64), (cy * 64))
        position = board[cy][cx].pos
    }


    private fun clickListener(cx: Int, cy: Int) {
        piece.onClick {
            println(pieceKind)
            println("pair")
            lastClicked = board[cx][cy].pos
            println(decodePosition(lastClicked!!))


        }
    }


    override fun renderInternal(ctx: RenderContext) {
        // Implement your rendering logic here
    }
}
