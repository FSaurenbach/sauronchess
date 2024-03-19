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
var whiteQueen: Bitmap? = null
var blackQueen: Bitmap? = null
var whiteKing: Bitmap? = null
var blackKing: Bitmap? = null
var pieces = ArrayList<Piece>()
var whiteTurn = true
var markedCells = ArrayList<Cell>()
/** Initial position of the white king */
var kingPosition = Pair(4, 3)
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
        whiteKing = resourcesVfs["w_king.png"].readBitmap()
        blackKing = resourcesVfs["b_king.png"].readBitmap()
        whiteQueen = resourcesVfs["w_queen.png"].readBitmap()
        blackQueen = resourcesVfs["b_queen.png"].readBitmap()
        whiteBishop = resourcesVfs["w_bishop.png"].readBitmap()
        blackBishop = resourcesVfs["b_bishop.png"].readBitmap()

        // Change the scene to the game scene
        sceneContainer.changeTo { GameScene(sceneContainer) }
    }

/**
 * Represents the main game scene.
 *
 * @constructor Creates a GameScene with the provided scene container.
 * @property cont The scene container.
 */
class GameScene(private val cont: SceneContainer) : PixelatedScene(512, 512) {

    /**
     * This method is called to render the main content of the game scene. Main function to set up
     * the chessboard, pieces, and handle piece movement.
     */
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
        // Set up all the bishops
        val whiteBishop1 = Piece(PieceKind.WhiteBishop, Colors.WHITE, 2, 0, cont = cont)
        val whiteBishop2 = Piece(PieceKind.WhiteBishop, Colors.WHITE, 5, 0, cont = cont)
        val blackBishop1 = Piece(PieceKind.BlackBishop, Colors.BLACK, 2, 7, cont = cont)
        val blackBishop2 = Piece(PieceKind.BlackBishop, Colors.BLACK, 5, 7, cont = cont)
        // Set up the kings and queens
        //val whiteQueen = Piece(PieceKind.WhiteQueen, Colors.WHITE, 3, 0, cont = cont)
        val whiteKing = Piece(PieceKind.WhiteKing, Colors.WHITE, 4, 3, cont = cont)
        //val blackQueen = Piece(PieceKind.BlackQueen, Colors.BLACK, 3, 7, cont = cont)
        //val blackKing = Piece(PieceKind.BlackKing, Colors.BLACK, 4, 7, cont = cont)

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
                    blackBishop2,
                    whiteKing))
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
                    newPosition = decodePosition(this.globalMousePos)
                }) { info ->
                    error = false

                    // When dragging starts
                    if (info.start) {
                        // Iterate through pieces to find the selected piece
                        // println("Start dragging...")
                        if (piece.position ==
                            board[newPosition!!.second][newPosition!!.first].pos) {
                            currentPos = newPosition
                            selectedPiece = piece

                            // Iterate through cells to mark available moves
                            for (cell in cells) {
                                if (newPosition == Pair(cell.cx, cell.cy)) {
                                    println(
                                        "Found Cell where piece is located: ${cell.cx}, ${cell.cy}")
                                }
                                if (selectedPiece!!.moveChecker(
                                    newPosition!!, Pair(cell.cx, cell.cy), false, false)) {
                                    // println("Can move to: ${cell.cx}, ${cell.cy}")
                                    changeColor(cell.cy, cell.cx, false)
                                    markedCells.add(cell)
                                }
                            }

                        }

                    }

                    // When dragging ends
                    if (info.end && selectedPiece != null) {
                        // println("End dragging...")
                        // Check if newPosition is within the game board
                        if (newPosition!!.first < 0 ||
                            newPosition!!.first >= 8 ||
                            newPosition!!.second < 0 ||
                            newPosition!!.second >= 8) {
                            error = true
                            println(
                                "Invalid move: Position out of bounds. newPosition: (${newPosition!!.first}, ${newPosition!!.second})")
                            // Reset variables
                            selectedPiece = null
                            newPosition = null
                            currentPos = null
                        }

                        // Perform the move if no error
                        if (!error) {
                            if (selectedPiece!!.moveChecker(currentPos!!, newPosition!!, true, false)) {
                                selectedPiece!!.moveTo(newPosition!!.first, newPosition!!.second)
                                selectedPiece = null
                            } else {
                                selectedPiece!!.moveTo(currentPos!!.first, currentPos!!.second)
                                selectedPiece = null
                            }
                            kingInCheck()
                            selectedPiece = null
                            newPosition = null
                            currentPos = null
                        }

                        // Reset colors and variables
                        for (cell in markedCells) {
                            changeColor(cell.cy, cell.cx, true)
                        }
                        markedCells.clear()
                        error = false

                    }
                }
        }
    }
}

var checkedCells = ArrayList<SolidRect>()

/**
 * Checks if the king is in check.
 *
 * The function performs the following steps:
 * 1. Resets the colors of previously checked cells.
 * 2. Clears the list of checked cells.
 * 3. Checks each black piece to see if it can move to the king's position.
 * 4. If a piece can move to the king's position, the king is in check. The cell of the threatening piece is marked red and added to the list of checked cells.
 */
fun kingInCheck(pd:Piece? = null): Boolean {
    // Iterate over all checked cells
    for (cell in checkedCells) {
        // Decode the position of the cell to get the x and y coordinates
        val cx = decodePosition(cell.pos).first
        val cy = decodePosition(cell.pos).second
        // Change the color of the cell based on the sum of the x and y coordinates
        cell.color = if ((cx + cy).isEven) Colors.WHITE else Colors.BLACK
    }
    // Clear the list of checked cells
    checkedCells.clear()
    println("cleared checkedCells...")
    // Iterate over all pieces
    if (pd == null) {
        for (piece in pieces) {
            // Decode the position of the piece
            val piecePos = decodePosition(piece.position)
            // If the piece is black
            if (piece.color == Colors.BLACK) {
                println("Piece: $piecePos, King: $kingPosition")
                // Check if the piece can move to the position of the king
                if (piece.moveChecker(piecePos, kingPosition, false, true)) {
                    println("KING IN CHECK! kingPosition: $kingPosition")
                    // If the piece can move to the position of the king, change the color of the cell the piece is on to red
                    val b = board[piecePos.second][piecePos.first]
                    checkedCells.add(b)
                    b.color = Colors.RED
                    return true
                }
            }
        }
    }
    if (pd != null) {
        val piecePos = decodePosition(pd.newPosi!!)
        if (pd.color == Colors.BLACK) {
            println("Piece: $piecePos, King: $kingPosition")
            // Check if the piece can move to the position of the king
            if (pd.moveChecker(piecePos, kingPosition, false, true)) {
                println("KING IN CHECK! kingPosition: $kingPosition")
                // If the piece can move to the position of the king, change the color of the cell the piece is on to red
                val b = board[piecePos.second][piecePos.first]
                checkedCells.add(b)
                b.color = Colors.RED
                return true
            }
        }
    }

    return false
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
