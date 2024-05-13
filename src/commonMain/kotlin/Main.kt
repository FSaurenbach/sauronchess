import korlibs.image.bitmap.*
import korlibs.image.color.*
import korlibs.image.format.*
import korlibs.io.file.std.*
import korlibs.korge.*
import korlibs.korge.input.*
import korlibs.korge.scene.*
import korlibs.korge.view.*
import korlibs.math.geom.*

var cells = ArrayList<Cell>()
var schachbrett: Schachbrett? = null
var pieces = ArrayList<Piece>()
var whitePawn: Bitmap? = null
var whiteRook: Bitmap? = null
var whiteKnight: Bitmap? = null
var whiteBishop: Bitmap? = null
var whiteQueen: Bitmap? = null

var blackPawn: Bitmap? = null
var blackRook: Bitmap? = null
var blackKnight: Bitmap? = null
var blackBishop: Bitmap? = null
var blackQueen: Bitmap? = null

var whiteTurn = true

suspend fun main() =
    Korge(windowSize = Size(512, 512), backgroundColor = Colors["#2b2b2b"]) {
        val sceneContainer = sceneContainer()

        sceneContainer.changeTo { MyScene(sceneContainer) }
    }

class MyScene(private val cont: SceneContainer) : PixelatedScene(512, 512) {

    /**
     * This method is called to render the main content of the game scene. Main function to set up
     * the chessboard, pieces, and handle piece movement.
     */
    override suspend fun SContainer.sceneMain() {
        schachbrett = Schachbrett(cont)
        whitePawn = resourcesVfs["w_pawn.png"].readBitmap()
        whiteRook = resourcesVfs["w_rook.png"].readBitmap()
        whiteKnight = resourcesVfs["w_knight.png"].readBitmap()
        whiteBishop = resourcesVfs["w_bishop.png"].readBitmap()
        whiteQueen = resourcesVfs["w_queen.png"].readBitmap()

        blackPawn = resourcesVfs["b_pawn.png"].readBitmap()
        blackRook = resourcesVfs["b_rook.png"].readBitmap()
        blackKnight = resourcesVfs["b_knight.png"].readBitmap()
        blackBishop = resourcesVfs["b_bishop.png"].readBitmap()
        blackQueen = resourcesVfs["b_queen.png"].readBitmap()

        addAllPieces(cont)
        handlePieceMovement()
    }

    private fun SContainer.handlePieceMovement() {
        // Variables initialization
        var newPosition: Pair<Int, Int>? = null
        var currentPos: Pair<Int, Int>? = null
        var selectedPiece: Piece? = null
        var error: Boolean

        // Function to handle piece movement
        for (piece in pieces) {
            piece.draggableCloseable(
                onMouseDrag {
                    // When dragging starts, update newPosition and newPositionEncoded
                    newPosition =
                        Pair(this.globalMousePos.x.toInt() / 64, this.globalMousePos.y.toInt() / 64)
                }) { info ->
                    error = false

                    // When dragging starts
                    if (info.start) {
                        // Iterate through pieces to find the selected piece
                        // //println("Start dragging...")
                        val pieceAtCurrentPos =
                            schachbrett!!.findPiece(newPosition!!.first, newPosition!!.second)

                        if (schachbrett!!.findPiece(newPosition!!.first, newPosition!!.second) !=
                            null) {
                            currentPos = newPosition
                            selectedPiece = pieceAtCurrentPos
                        }
                    }

                    // When dragging ends
                    if (info.end && selectedPiece != null) {
                        // //println("End dragging...")
                        // Check if newPosition is within the game board
                        if (newPosition!!.first < 0 ||
                            newPosition!!.first >= 8 ||
                            newPosition!!.second < 0 ||
                            newPosition!!.second >= 8) {
                            error = true
                            // Reset variables
                            selectedPiece = null
                            newPosition = null
                            currentPos = null
                        }
                        // Perform the move if no error
                        if (!error) {
                            if (selectedPiece!!.moveChecker(currentPos!!, newPosition!!)) {
                                figurBewegen(
                                    selectedPiece!!, newPosition!!.first, newPosition!!.second)
                                selectedPiece = null
                            }
                            selectedPiece = null
                            newPosition = null
                            currentPos = null
                        }

                        error = false
                    }
                }
        }
    }
}
