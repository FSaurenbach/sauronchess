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
        var p = Piece(PieceKind.whitePawn, Colors.WHITE, 5, 3, cont = cont)
        var z = Piece(PieceKind.blackPawn, Colors.BLACK, 1, 3, cont = cont)
        pieces.add(p)
        pieces.add(z)

        z.draggableCloseable(
            onMouseDrag {
                val newPosition = decodePosition(this.globalMousePos)
                val currentPos = decodePosition(z.position)

                // Ensure the piece is moving forward
                println("Old Position $currentPos")
                println("New Position $newPosition")
                if (moveChecker(currentPos, newPosition, z.pieceKind)) z.moveTo(newPosition.first, newPosition.second)


            },
            false
        ) { info: DraggableInfo ->
            info.view.x = info.viewNextXY.x
        }

         p.draggableCloseable(
            onMouseDrag {
                val newPosition = decodePosition(this.globalMousePos)
                val currentPos = decodePosition(p.position)

                // Ensure the piece is moving forward
                println("Old Position $currentPos")
                println("New Position $newPosition")
                if (moveChecker(currentPos, newPosition, p.pieceKind)) p.moveTo(newPosition.first, newPosition.second)


            },
            false
        ) { info: DraggableInfo ->
            info.view.x = info.viewNextXY.x
        }



    }
    

}
fun moveChecker(oldPos: Pair<Int, Int>, newPos: Pair<Int, Int>, kind: PieceKind): Boolean {
    when (kind){


        PieceKind.whitePawn -> {
            if (newPos.second < oldPos.second){
                println("true but")
                return true
            }

        }
        PieceKind.blackPawn ->{
            if (newPos.second > oldPos.second){
                println("true but")
                return true
            }
        }
    }
    return false
}

