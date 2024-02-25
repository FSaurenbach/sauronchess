import korlibs.image.bitmap.*
import korlibs.image.color.*
import korlibs.image.format.*
import korlibs.io.file.std.*
import korlibs.korge.*
import korlibs.korge.input.*
import korlibs.korge.scene.*
import korlibs.korge.view.*
import korlibs.math.*
import korlibs.math.geom.*

val board = Array(8) { Array(8) { SolidRect(512 / 8, 512 / 8) } }
var whitePawn: Bitmap? = null
var blackPawn: Bitmap? = null
var lastClicked: Point? = null
var pieces = ArrayList<Piece>()
suspend fun main() = Korge(windowSize = Size(512, 512), backgroundColor = Colors["#2b2b2b"]) {
    val sceneContainer = sceneContainer()

    whitePawn = resourcesVfs["w_pawn.png"].readBitmap()
    blackPawn = resourcesVfs["b_pawn.png"].readBitmap()
    sceneContainer.changeTo { GameScene(sceneContainer) }
}


class GameScene(private val cont: SceneContainer) : PixelatedScene(512, 512) {


    override suspend fun SContainer.sceneMain() {

        var d = 0
        for (cx in 0 until 8) {
            for (cy in 0 until 8) {

                if (d.isEven) {
                    Cell(Colors.WHITE, cx, cy, cont)
                } else {
                    Cell(Colors.BLACK, cx, cy, cont)
                }
                d++
            }
            d++
        }
        var p = Piece(PieceKind.whitePawn, Colors.WHITE, 1, 2, cont = cont)
        var z = Piece(PieceKind.blackPawn, Colors.BLACK, 5, 6, cont = cont)
        pieces.add(p)
        pieces.add(z)


        var newPosition: Pair<Int, Int>? = null
        var currentPos: Pair<Int, Int>? = null
        var piss: Piece? = null
        draggableCloseable(
            onMouseDrag {
                newPosition = decodePosition(this.globalMousePos)

                // Ensure the piece is moving forward


            }, false
        ) { info: DraggableInfo ->
            info.view.x = info.viewNextXY.x
            if (info.start) {
                currentPos = decodePosition(info.viewNextXY)
                for (piece in pieces) {

                    if (piece.position == board[newPosition!!.second][newPosition!!.first].pos) {
                        println("${piece.pieceKind}")
                        piss = piece

                    }
                }


            }
            if (info.end) {

                println("End")
                if (moveChecker(currentPos!!, newPosition!!, piss!!.pieceKind)) piss!!.moveTo(
                    newPosition!!.first, newPosition!!.second
                )

            }
        }


    }


}

fun moveChecker(oldPos: Pair<Int, Int>, newPos: Pair<Int, Int>, kind: PieceKind): Boolean {
    return true
    when (kind) {

        // General Code for moving black and white pawns in chess
        PieceKind.blackPawn -> {
            if (oldPos.second == 6 && newPos.second == 4) {
                return true
            } else if (oldPos.second - newPos.second == 1) {
                return true
            } else {
                return false
            }
        }

        PieceKind.whitePawn -> {
            if (oldPos.second == 1 && newPos.second == 3) {
                return true
            } else if (newPos.second - oldPos.second == 1) {
                return true
            } else {
                return false
            }
        }


    }
    return false
}

