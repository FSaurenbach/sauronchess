import korlibs.image.color.*
import korlibs.korge.scene.*
import korlibs.korge.view.*
import korlibs.math.*
import korlibs.math.geom.*

class Schachbrett(private var cont: SceneContainer) {
    init {
        println("Schachbrett initialized")
        initializeBoard()
    }

    private fun initializeBoard() {
        var d = 0
        for (cx in 0 until 8) {
            for (cy in 0 until 8) {
                val cellColor = if (d.isEven) Colors.WHITE else Colors.MEDIUMSEAGREEN
                val cl = Cell(cellColor, cx, cy, cont)
                cells.add(cl)
                d++
            }
            d++
        }
    }

    private fun coder(cx: Int): Double {
        return (cx * 64.0)
    }


    fun findPiece(x: Int, y: Int): Piece? {
        for (piece in pieces) {
            if (piece.cx == x && piece.cy == y) {
                return piece
            }
        }
        return null
    }
}
fun decode(x: Double): Int {
    return (x / 64).toInt()
}
fun decodePos(pos: Point): Pair<Int, Int> {
    return Pair(decode(pos.x), decode(pos.y))
}
fun figurBewegen(figur: Piece, newX: Int, newY: Int) {
    figur.pos = Point(newX * 64.0, newY * 64.0)
    figur.position(Point(newX * 64.0, newY * 64.0))
    figur.cx = newX
    figur.cy = newY
    figur.bw(newX, newY)
}

fun objektBewegen(figur: View, newX: Int, newY: Int) {
    figur.pos = Point(newX * 64.0, newY * 64.0)
    figur.position(Point(newX * 64.0, newY * 64.0))
}
