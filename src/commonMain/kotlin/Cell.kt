import korlibs.image.color.*
import korlibs.korge.scene.*
import korlibs.korge.view.*

fun isPiece(i: Int, cy: Int): Piece? {
    var piss: Piece? = null
    for (element in pieces) {
        var pPos = decodePosition(element.piece.pos)

        println("nigg")
        println(pPos)
        if (pPos == Pair(i, cy)) {
            println("ndfsaaaaaaaaaaaaaa")
            piss = element
        }
    }
    return piss
}

class Cell(color: RGBA, var cx: Int, var cy: Int, cont: SceneContainer) : Container() {
    init {
        var cell = board[cx][cy]
        cell.x = (cy * (512 / 8)).toDouble()
        cell.y = (cx * (512 / 8)).toDouble()
        cell.color = color
        cont.addChild(cell)

    }


}
