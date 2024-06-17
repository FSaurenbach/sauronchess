import korlibs.image.color.*
import korlibs.image.text.*
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
                // add location to cell like a1 or h8
                var text = "${'a' + cx}${8 - cy}"

                cells.add(cl)
                Text(text, textSize = 16.0, alignment = TextAlignment.TOP_LEFT, color = Colors.BLACK).position(Point(cx * 64.0, cy * 64.0)).addTo(cont)
                cl.text(text)
                d++
            }
            d++
        }
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
