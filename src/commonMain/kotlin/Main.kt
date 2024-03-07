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
var whiteKnight: Bitmap? = null
var blackKnight: Bitmap? = null
var whiteBishop: Bitmap? = null
var blackBishop: Bitmap? = null
var pieces = ArrayList<Piece>()
var whiteTurn = true
var markedCells = ArrayList<Cell>()
/** Entry point of the application. Initializes the game window and sets up the game scene. */
suspend fun main() =
    Korge(windowSize = Size(512, 512), backgroundColor = Colors["#2b2b2b"]) {
        // Create a scene container
        val sceneContainer = sceneContainer()

        // Load bitmap resources for game pieces
        whitePawn = resourcesVfs["w_pawn.png"].readBitmap()
        blackPawn = resourcesVfs["b_pawn.png"].readBitmap()
        whiteRook = resourcesVfs["w_rook.png"].readBitmap()
        blackRook = resourcesVfs["b_rook.png"].readBitmap()
        whiteKnight = resourcesVfs["w_knight.png"].readBitmap()
        blackKnight = resourcesVfs["b_knight.png"].readBitmap()
        whiteBishop = resourcesVfs["w_bishop.png"].readBitmap()
        blackBishop = resourcesVfs["b_bishop.png"].readBitmap()

        // Change the scene to the game scene
        sceneContainer.changeTo { GameScene(sceneContainer) }
    }

/**
 * Represents the main game scene.
 *
 * @constructor Creates a GameScene with the specified scene container.
 * @property cont The scene container for this game scene.
 */
class GameScene(private val cont: SceneContainer) : PixelatedScene(512, 512) {

    /** This method is called to render the main content of the game scene. */
    /** Main function to set up the chessboard, pieces, and handle piece movement. */
    override suspend fun SContainer.sceneMain() {
        initializeBoard()
        initializePieces()
        handlePieceMovement()
    }

    private fun initializeBoard() {
        var d = 0
        for (cx in 0 until 8) {
            for (cy in 0 until 8) {
                val cellColor = if (d.isEven) Colors.WHITE else Colors.BLACK
                val cl = Cell(cellColor, cx, cy, cont)
                cells.add(cl)
                d++
            }
            d++
        }
    }

    private fun initializePieces() {
        val whitePawns =
            (0 until 8).map { Piece(PieceKind.WhitePawn, Colors.WHITE, it, 1, cont = cont) }
        val blackPawns =
            (0 until 8).map { Piece(PieceKind.BlackPawn, Colors.BLACK, it, 6, cont = cont) }
        // Set up all the rooks
        val whiteRook1 = Piece(PieceKind.WhiteRook, Colors.WHITE, 0, 0, cont = cont)
        val whiteRook2 = Piece(PieceKind.WhiteRook, Colors.WHITE, 7, 0, cont = cont)
        val blackRook1 = Piece(PieceKind.BlackRook, Colors.BLACK, 0, 7, cont = cont)
        val blackRook2 = Piece(PieceKind.BlackRook, Colors.BLACK, 7, 7, cont = cont)
        // Set up all the knights
        val whiteKnight1 = Piece(PieceKind.WhiteKnight, Colors.WHITE, 1, 0, cont = cont)
        val whiteKnight2 = Piece(PieceKind.WhiteKnight, Colors.WHITE, 6, 0, cont = cont)
        val blackKnight1 = Piece(PieceKind.BlackKnight, Colors.BLACK, 1, 7, cont = cont)
        val blackKnight2 = Piece(PieceKind.BlackKnight, Colors.BLACK, 6, 7, cont = cont)
        val whiteBishop1 = Piece(PieceKind.WhiteBishop, Colors.WHITE, 2, 0, cont = cont)
        val whiteBishop2 = Piece(PieceKind.WhiteBishop, Colors.WHITE, 5, 0, cont = cont)
        val blackBishop1 = Piece(PieceKind.BlackBishop, Colors.BLACK, 2, 7, cont = cont)
        val blackBishop2 = Piece(PieceKind.BlackBishop, Colors.BLACK, 5, 7, cont = cont)

        pieces.addAll(
            whitePawns +
                blackPawns +
                listOf(
                    whiteRook1,
                    whiteRook2,
                    blackRook1,
                    blackRook2,
                    whiteKnight1,
                    whiteKnight2,
                    blackKnight1,
                    blackKnight2,
                    whiteBishop1,
                    whiteBishop2,
                    blackBishop1,
                    blackBishop2
                )
        )
    }

    private fun SContainer.handlePieceMovement() {

        var newPosition: Pair<Int, Int>? = null
        var currentPos: Pair<Int, Int>? = null
        var selectedPiece: Piece? = null
        var error = false
        println("Stufe -1")
        draggableCloseable(onMouseDrag { newPosition = decodePosition(this.globalMousePos) }) { info
            ->
            error = false
            if (info.start) {
                println("Stufe 0")
                for (piece in pieces) {
                    if (piece.position == board[newPosition!!.second][newPosition!!.first].pos) {
                        currentPos = newPosition
                        selectedPiece = piece
                        for (cell in cells) {
                            val clxy = Pair(cell.cx, cell.cy)
                            if (newPosition!! == clxy) {
                                println("Found Cell where piece is located: ${cell.cx}, ${cell.cy}")
                            }
                            if (selectedPiece!!.moveChecker(newPosition!!, clxy, false)) {
                                println("Can move to: ${cell.cx}, ${cell.cy}")
                                changeColor(cell.cy, cell.cx, false)
                                markedCells.add(cell)
                            }
                        }
                    }
                }
            }
            if (info.end && selectedPiece != null) {
                // Check if the mouse position is within the game window decode the position and
                // check if it's smaller than 8, 8

                if (
                    newPosition!!.first < 0 ||
                        newPosition!!.first >= 8 ||
                        newPosition!!.second < 0 ||
                        newPosition!!.second >= 8
                ) {
                    error = true
                    println(
                        "Invalid move: Position out of bounds. newPosition: (${newPosition!!.first}, ${newPosition!!.second})"
                    )

                    // Resetting variables
                    selectedPiece = null
                    markedCells.clear()
                    error = false
                    newPosition = null
                    currentPos = null
                    println(
                        "Invalid move: Position out of bounds. newPosition: (${newPosition!!.first}, ${newPosition!!.second})"
                    )
                }
                println(
                    "ALL STATES: newPosition: $newPosition currentPos: $currentPos selectedPiece: $selectedPiece error: $error \n \n \n \n \n"
                )
                println("End \n \n \n \n \n")
                if (!error) {
                    if (selectedPiece!!.moveChecker(currentPos!!, newPosition!!, true)) {
                        selectedPiece!!.moveTo(newPosition!!.first, newPosition!!.second)
                    } else {
                        selectedPiece!!.moveTo(currentPos!!.first, currentPos!!.second)
                    }
                }
                for (cell in markedCells) {
                    changeColor(cell.cy, cell.cx, true)
                }
                selectedPiece = null
                markedCells.clear()
                error = false
                newPosition = null
                currentPos = null
                println("Stufe 1")
            }
            println("Stufe 2")
        }

        println("Stufe 3")
    }
}

/**
 * Changes the color of a cell on the game board.
 *
 * @param cly The y-coordinate of the cell.
 * @param clx The x-coordinate of the cell.
 * @param back Indicates whether to revert the color change.
 */
fun changeColor(cly: Int, clx: Int, back: Boolean) {
    if (back) {
        // Revert the color change by removing the filter
        for (cell in cells) {
            if (cell.cx == clx && cell.cy == cly) {
                board[cly][clx].filter = null
            }
        }
    } else {
        // Apply a blur filter to the cell to indicate selection
        board[cly][clx].filter = BlurFilter(20.0)
    }
}
