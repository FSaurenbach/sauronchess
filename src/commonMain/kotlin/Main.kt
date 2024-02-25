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
var whiteTurn = true
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
        var pw1 = Piece(PieceKind.whitePawn, Colors.WHITE, 0, 1, cont = cont)
        var pb1 = Piece(PieceKind.blackPawn, Colors.BLACK, 0, 6, cont = cont)
        var pw2 = Piece(PieceKind.whitePawn, Colors.WHITE, 1, 1, cont = cont)
        var pb2 = Piece(PieceKind.blackPawn, Colors.BLACK, 1, 6, cont = cont)
        var pw3 = Piece(PieceKind.whitePawn, Colors.WHITE, 2, 1, cont = cont)
        var pb3 = Piece(PieceKind.blackPawn, Colors.BLACK, 2, 6, cont = cont)
        var pw4 = Piece(PieceKind.whitePawn, Colors.WHITE, 3, 1, cont = cont)
        var pb4 = Piece(PieceKind.blackPawn, Colors.BLACK, 3, 6, cont = cont)
        var pw5 = Piece(PieceKind.whitePawn, Colors.WHITE, 4, 1, cont = cont)
        var pb5 = Piece(PieceKind.blackPawn, Colors.BLACK, 4, 6, cont = cont)
        var pw6 = Piece(PieceKind.whitePawn, Colors.WHITE, 5, 1, cont = cont)
        var pb6 = Piece(PieceKind.blackPawn, Colors.BLACK, 5, 6, cont = cont)
        var pw7 = Piece(PieceKind.whitePawn, Colors.WHITE, 6, 1, cont = cont)
        var pb7 = Piece(PieceKind.blackPawn, Colors.BLACK, 6, 6, cont = cont)
        var pw8 = Piece(PieceKind.whitePawn, Colors.WHITE, 7, 1, cont = cont)
        var pb8 = Piece(PieceKind.blackPawn, Colors.BLACK, 7, 6, cont = cont)
        pieces.add(pw1)
        pieces.add(pb1)
        pieces.add(pw2)
        pieces.add(pb2)
        pieces.add(pw3)
        pieces.add(pb3)
        pieces.add(pw4)
        pieces.add(pb4)
        pieces.add(pw5)
        pieces.add(pb5)
        pieces.add(pw6)
        pieces.add(pb6)
        pieces.add(pw7)
        pieces.add(pb7)
        pieces.add(pw8)
        pieces.add(pb8)


        var newPosition: Pair<Int, Int>? = null
        var currentPos: Pair<Int, Int>? = null
        var piss: Piece? = null
        draggableCloseable(onMouseDrag {
            newPosition = decodePosition(this.globalMousePos)

        }) { info: DraggableInfo ->
            info.view.x = info.viewNextXY.x
            if (info.start) {
                for (piece in pieces) {

                    if (piece.position == board[newPosition!!.second][newPosition!!.first].pos) {
                        println("${piece.pieceKind}")
                        currentPos = newPosition
                        piss = piece


                    }
                }


            }
            if (info.end) {

                println("End")
                if (moveChecker(currentPos!!, newPosition!!, piss!!.pieceKind)) piss!!.moveTo(
                    newPosition!!.first, newPosition!!.second
                )
                else piss!!.moveTo(currentPos!!.first, currentPos!!.second)

            }
        }


    }


}

fun moveChecker(oldPos: Pair<Int, Int>, newPos: Pair<Int, Int>, kind: PieceKind): Boolean {
    println("oldPos: $oldPos")
    println("newPos: $newPos")

    var destiny = pieces.find { it.position == board[newPos.second][newPos.first].pos }
    println("Destiny: $destiny")
    if (destiny != null) {
            pieces.remove(destiny)
            destiny.piece.removeFromParent()

    }



    if (whiteTurn) {
        when (kind) {
            PieceKind.whitePawn -> {
                println("White Pawn: OldPosSecond: ${oldPos.second} NewPosSecond: ${newPos.second} OldPosFirst: ${oldPos.first} NewPosFirst: ${newPos.first}")
                if ((newPos.second - oldPos.second == 1 && oldPos.first == newPos.first) || (oldPos.second == 1 && newPos.second == 3 && oldPos.first == newPos.first)) {
                    whiteTurn = false
                    return true
                }
            }

            else -> {
                return false
            }
        }
    }
    if (!whiteTurn) {
        when (kind) {
            PieceKind.blackPawn -> {
                println("Black Pawn: OldPosSecond: ${oldPos.second} NewPosSecond: ${newPos.second} OldPosFirst: ${oldPos.first} NewPosFirst: ${newPos.first}")
                if ((newPos.second - oldPos.second == -1 && oldPos.first == newPos.first) || (oldPos.second == 6 && newPos.second == 4 && oldPos.first == newPos.first)) {
                    whiteTurn = true
                    return true
                }
            }

            else -> {
                return false
            }
        }
    }
    return false
}

