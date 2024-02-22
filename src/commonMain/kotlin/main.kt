import korlibs.image.color.*
import korlibs.image.format.*
import korlibs.io.file.std.*
import korlibs.korge.*
import korlibs.korge.scene.*
import korlibs.korge.view.*
import korlibs.math.*
import korlibs.math.geom.*

val board = Array(8) { Array(8) { SolidRect(512 / 8, 512 / 8) } }
var sprite = resourcesVfs["w_pawn.png"]
suspend fun main() = Korge(windowSize = Size(512, 512), backgroundColor = Colors["#2b2b2b"]) {
	val sceneContainer = sceneContainer()

	sceneContainer.changeTo{ GameScene(sceneContainer) }
}
enum class PieceKind(kind: String){
    Pawn("P"),
    Bishop("B"),
    Knight("K"),
    Rook("R"),
    Queen("Q"),
    King("K")

}
class Piece(kind: PieceKind, color: RGBA){

    init {
        if (color == Colors.WHITE){
            if (kind == PieceKind.Pawn){
                println("pawn")
            }
        }
    }
    suspend fun main(){
        Sprite(sprite.readBitmap())
    }
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
    }
}
