import korlibs.image.bitmap.*
import korlibs.image.color.*
import korlibs.image.format.*
import korlibs.io.file.std.*
import korlibs.korge.*
import korlibs.korge.scene.*
import korlibs.korge.view.*
import korlibs.math.*
import korlibs.math.geom.*

val board = Array(8) { Array(8) { SolidRect(512 / 8, 512 / 8) } }
var whitePawn: Bitmap? = null
var lastClicked: Point? = null
suspend fun main() = Korge(windowSize = Size(512, 512), backgroundColor = Colors["#2b2b2b"]) {
	val sceneContainer = sceneContainer()

    whitePawn = resourcesVfs["w_pawn.png"].readBitmap()
	sceneContainer.changeTo{ GameScene(sceneContainer) }
}
enum class PieceKind(kind: String){
    whitePawn("P"),
    blackPawn("P")
    //Bishop("B"),
    //Knight("K"),
    //Rook("R"),
    //Queen("Q"),
    //King("K");
}


class GameScene(cont: SceneContainer) : PixelatedScene(512, 512) {



    override suspend fun SContainer.sceneMain() {
        var d = 0
        for (i in 0 until 8) {
            for (j in 0 until 8) {

                if (d.isEven) {
                    Cell(Colors.WHITE, i, j, sceneContainer)
                } else {
                    Cell(Colors.BLACK, i, j, sceneContainer)
                }
                d++
            }
            d++
        }

        var p = Piece(PieceKind.whitePawn, Colors.WHITE, 5, 3, cont = sceneContainer)

    }
}
