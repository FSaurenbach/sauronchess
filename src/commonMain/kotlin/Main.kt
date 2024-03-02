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

  /** Initializes the chessboard with cells of alternating colors. */
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

  /** Initializes the chess pieces on the board. */
  private fun initializePieces() {
    val whitePawns =
      (0 until 8).map { Piece(PieceKind.WhitePawn, Colors.WHITE, it, 1, cont = cont) }
    val blackPawns =
      (0 until 8).map { Piece(PieceKind.BlackPawn, Colors.BLACK, it, 6, cont = cont) }

    val whiteRook = Piece(PieceKind.WhiteRook, Colors.WHITE, 5, 5, cont = cont)
    val blackRook = Piece(PieceKind.BlackRook, Colors.BLACK, 3, 3, cont = cont)

    pieces.addAll(whitePawns + blackPawns + listOf(whiteRook, blackRook))
  }

  /** Handles piece movement on the chessboard. */
  private fun SContainer.handlePieceMovement() {
    var newPosition: Pair<Int, Int>? = null
    var currentPos: Pair<Int, Int>? = null
    var selectedPiece: Piece? = null

    draggableCloseable(onMouseDrag { newPosition = decodePosition(this.globalMousePos) }) { info ->
      if (info.start) {
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
        println(
          "pieceKind: ${selectedPiece!!.pieceKind} location: ${decodePosition(selectedPiece!!.position)}"
        )
        println("End \n \n \n \n \n")
        if (selectedPiece!!.moveChecker(currentPos!!, newPosition!!, true)) {
          selectedPiece!!.moveTo(newPosition!!.first, newPosition!!.second)
        } else {
          selectedPiece!!.moveTo(currentPos!!.first, currentPos!!.second)
        }
        for (cell in markedCells) {
          changeColor(cell.cy, cell.cx, true)
        }
        markedCells.clear()

        selectedPiece = null
      }
    }
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
