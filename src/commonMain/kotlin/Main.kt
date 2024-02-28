import korlibs.image.bitmap.*
import korlibs.image.color.*
import korlibs.image.format.*
import korlibs.io.file.std.*
import korlibs.korge.*
import korlibs.korge.input.*
import korlibs.korge.scene.*
import korlibs.korge.view.*
import korlibs.korge.view.filter.*
import korlibs.math.*
import korlibs.math.geom.*

val board = Array(8) { Array(8) { SolidRect(512 / 8, 512 / 8) } }

var cells = ArrayList<Cell>()
var whitePawn: Bitmap? = null
var blackPawn: Bitmap? = null
var whiteRook: Bitmap? = null
var blackRook: Bitmap? = null
var lastClicked: Point? = null
var pieces = ArrayList<Piece>()
var whiteTurn = true
var markedCells = ArrayList<Cell>()
suspend fun main() = Korge(windowSize = Size(512, 512), backgroundColor = Colors["#2b2b2b"]) {
    val sceneContainer = sceneContainer()

    whitePawn = resourcesVfs["w_pawn.png"].readBitmap()
    blackPawn = resourcesVfs["b_pawn.png"].readBitmap()
    whiteRook = resourcesVfs["w_rook.png"].readBitmap()
    blackRook = resourcesVfs["b_rook.png"].readBitmap()
    sceneContainer.changeTo { GameScene(sceneContainer) }
}


class GameScene(private val cont: SceneContainer) : PixelatedScene(512, 512) {


    override suspend fun SContainer.sceneMain() {

        var d = 0
        for (cx in 0 until 8) {
            for (cy in 0 until 8) {

                if (d.isEven) {
                    val cl = Cell(Colors.WHITE, cx, cy, cont)
                    cells.add(cl)


                } else {
                    val cl = Cell(Colors.BLACK, cx, cy, cont)
                    cells.add(cl)

                }
                d++
            }
            d++
        }
        val pw1 = Piece(PieceKind.whitePawn, Colors.WHITE, 0, 1, cont = cont)
        val pb1 = Piece(PieceKind.blackPawn, Colors.BLACK, 0, 6, cont = cont)
        val pw2 = Piece(PieceKind.whitePawn, Colors.WHITE, 1, 1, cont = cont)
        val pb2 = Piece(PieceKind.blackPawn, Colors.BLACK, 1, 6, cont = cont)
        val pw3 = Piece(PieceKind.whitePawn, Colors.WHITE, 2, 1, cont = cont)
        val pb3 = Piece(PieceKind.blackPawn, Colors.BLACK, 2, 6, cont = cont)
        val pw4 = Piece(PieceKind.whitePawn, Colors.WHITE, 3, 1, cont = cont)
        val pb4 = Piece(PieceKind.blackPawn, Colors.BLACK, 3, 6, cont = cont)
        val pw5 = Piece(PieceKind.whitePawn, Colors.WHITE, 4, 1, cont = cont)
        val pb5 = Piece(PieceKind.blackPawn, Colors.BLACK, 4, 6, cont = cont)
        val pw6 = Piece(PieceKind.whitePawn, Colors.WHITE, 5, 1, cont = cont)
        val pb6 = Piece(PieceKind.blackPawn, Colors.BLACK, 5, 6, cont = cont)
        val pw7 = Piece(PieceKind.whitePawn, Colors.WHITE, 6, 1, cont = cont)
        val pb7 = Piece(PieceKind.blackPawn, Colors.BLACK, 6, 6, cont = cont)
        val pw8 = Piece(PieceKind.whitePawn, Colors.WHITE, 7, 1, cont = cont)
        val pb8 = Piece(PieceKind.blackPawn, Colors.BLACK, 7, 6, cont = cont)
        // Rooks
        val rw1 = Piece(PieceKind.whiteRook, Colors.WHITE, 0, 0, cont = cont)
        val rb1 = Piece(PieceKind.blackRook, Colors.BLACK, 0, 7, cont = cont)
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
        pieces.add(rw1)
        pieces.add(rb1)


        var newPosition: Pair<Int, Int>? = null
        var currentPos: Pair<Int, Int>? = null
        var piss: Piece? = null
        draggableCloseable(onMouseDrag {
            newPosition = decodePosition(this.globalMousePos)

        }) { info: DraggableInfo ->
            if (info.start) {
                for (piece in pieces) {

                    if (piece.position == board[newPosition!!.second][newPosition!!.first].pos) {
                        println("${piece.pieceKind}")
                        currentPos = newPosition
                        piss = piece
                        for (cell in cells) {
                            var clx = cell.cx
                            var cly = cell.cy
                            var clxy = Pair(clx, cly)
                            if (newPosition!! == Pair(clx, cly)) {
                                println("Found Cell where piece is located: $clx, $cly")
                            }
                            // Check where the piece can move to by using the move checker function and print out the location of the cells
                            if (moveChecker(newPosition!!, clxy, piss!!.pieceKind, false)) {
                                println("Can move to: $clx, $cly")
                                changeColor(cly, clx, false)
                                markedCells.add(cell)
                            }


                        }



                    }
                }
                // Go through every cell in cells and check with the move checker function on which cell the piece could move and print it out



            }
            if (info.end && piss !=null) {
                println("pieceKind: ${piss!!.pieceKind} location: ${decodePosition(piss!!.position)}")
                println("End \n \n \n \n \n")
                if (moveChecker(currentPos!!, newPosition!!, piss!!.pieceKind, true)) piss!!.moveTo(
                    newPosition!!.first, newPosition!!.second
                )
                else piss!!.moveTo(currentPos!!.first, currentPos!!.second)
                for (cell in markedCells) {
                    changeColor(cell.cy, cell.cx, true)
                }
                piss = null

            }
        }


    }


}

fun changeColor(cly: Int, clx: Int, back: Boolean) {
    if (back) {
        for (cell in cells) {
            if (cell.cx == clx && cell.cy == cly) {
                board[cly][clx].filter = null
            }
        }
    } else {
        board[cly][clx].filter = BlurFilter(20.0)
    }

}

// Check if a piece is in the way of a rook



fun moveChecker(oldPos: Pair<Int, Int>, newPos: Pair<Int, Int>, kind: PieceKind, withCheck: Boolean): Boolean {

    val pieceOnNewPos = pieces.find { it.position == board[newPos.second][newPos.first].pos }



    if (whiteTurn) {
        when (kind) {

            PieceKind.whitePawn -> {
                if ((newPos.second - oldPos.second == 1 && oldPos.first == newPos.first) || (oldPos.second == 1 && newPos.second == 3 && oldPos.first == newPos.first)) {
                    if (pieceOnNewPos == null) {
                        if (withCheck) whiteTurn = false
                        return true

                    }

                }
                // Capture a piece
                else if (newPos.second - oldPos.second == 1 && ((newPos.first - oldPos.first == 1) || (newPos.first - oldPos.first == -1))) {

                    println("Destiny: $pieceOnNewPos")
                    if (pieceOnNewPos != null && pieceOnNewPos.pieceKind == PieceKind.blackPawn) {
                        if (withCheck) {
                            pieces.remove(pieceOnNewPos)
                            pieceOnNewPos.piece.removeFromParent()
                            whiteTurn = false
                            return true
                        }


                    }
                }
            }
            PieceKind.whiteRook -> {
                if (oldPos.first == newPos.first || oldPos.second == newPos.second) {
                    if (pieceOnNewPos == null) {
                        if (withCheck) {
                            whiteTurn = false
                        }
                        return true
                    }
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
                if ((newPos.second - oldPos.second == -1 && oldPos.first == newPos.first) || (oldPos.second == 6 && newPos.second == 4 && oldPos.first == newPos.first)) {
                    if (pieceOnNewPos == null) {
                        if (withCheck) whiteTurn = true

                        return true
                    }
                }
                // If the pawn is trying to capture a piece
                else if (newPos.second - oldPos.second == -1 && ((newPos.first - oldPos.first == 1) || (newPos.first - oldPos.first == -1))) {
                    if (pieceOnNewPos != null && pieceOnNewPos.pieceKind == PieceKind.whitePawn ) {

                        if (withCheck ) {
                            whiteTurn = true
                            pieces.remove(pieceOnNewPos)
                            pieceOnNewPos.piece.removeFromParent()
                            return true
                        }

                    }
                }
            }
            PieceKind.blackRook -> {
                if (oldPos.first == newPos.first || oldPos.second == newPos.second) {
                    if (pieceOnNewPos == null) {
                        if (withCheck) {
                            whiteTurn = true
                        }
                        return true
                    }
                }
            }
            else -> {
                return false
            }
        }
    }
    return false
}

