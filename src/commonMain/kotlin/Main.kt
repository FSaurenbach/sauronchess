import korlibs.image.bitmap.*
import korlibs.image.color.*
import korlibs.image.format.*
import korlibs.io.async.*
import korlibs.io.file.std.*
import korlibs.korge.*
import korlibs.korge.input.*
import korlibs.korge.scene.*
import korlibs.korge.view.*
import korlibs.korge.view.align.*
import korlibs.math.geom.*

var cells = ArrayList<Cell>()
var schachbrett: Schachbrett? = null
var pieces = ArrayList<Piece>()
var whitePawn: Bitmap? = null
var whiteRook: Bitmap? = null
var whiteKnight: Bitmap? = null
var whiteBishop: Bitmap? = null
var whiteQueen: Bitmap? = null
var whiteKing: Bitmap? = null
var whiteRochade = true
var blackRochade = true
var blackPawn: Bitmap? = null
var blackRook: Bitmap? = null
var blackKnight: Bitmap? = null
var blackBishop: Bitmap? = null
var blackQueen: Bitmap? = null
var blackKing: Bitmap? = null
var blackKingInCheck = false
var whiteTurn = true


suspend fun main() = Korge(windowSize = Size(512, 512), backgroundColor = Colors["#2b2b2b"]) {

    val sceneContainer = sceneContainer()
    println("new version")
    sceneContainer.changeTo { GameScene(sceneContainer, "PO") }
    //sceneContainer.changeTo { GameModeSelector(sceneContainer) }
}

class GameModeSelector(private val cont: SceneContainer) : PixelatedScene(512, 512) {
    override suspend fun SContainer.sceneMain() {
        val buttonAi = image(resourcesVfs["button_play-against-ai.png"].readBitmap())
        val buttonPassOn = image(resourcesVfs["button_play-local-with-pass-on.png"].readBitmap())
        val text = image(resourcesVfs["button_sauronchess.png"].readBitmap())
        // center both buttons in the middle of the screen (button anchor point is top left)
        buttonAi.centerXOnStage()
        buttonPassOn.centerXOnStage()
        buttonAi.y = 180.0
        buttonPassOn.y = 266.0
        text.centerXOnStage()
        text.y = 50.0



        buttonAi.onClick {
            sceneContainer.changeTo { GameScene(cont, "AI") }
        }
        buttonPassOn.onClick {
            sceneContainer.changeTo { GameScene(cont, "PO") }
        }
    }
}

class GameScene(private val cont: SceneContainer, private val gameMode: String) : PixelatedScene(512, 512) {

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
        whiteKing = resourcesVfs["w_king.png"].readBitmap()

        blackPawn = resourcesVfs["b_pawn.png"].readBitmap()
        blackRook = resourcesVfs["b_rook.png"].readBitmap()
        blackKnight = resourcesVfs["b_knight.png"].readBitmap()
        blackBishop = resourcesVfs["b_bishop.png"].readBitmap()
        blackQueen = resourcesVfs["b_queen.png"].readBitmap()
        blackKing = resourcesVfs["b_king.png"].readBitmap()

        addAllPieces(cont)
        // add pieces to board state

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
            piece.draggableCloseable(onMouseDrag {
                // When dragging starts, update newPosition and newPositionEncoded
                newPosition = Pair(this.globalMousePos.x.toInt() / 64, this.globalMousePos.y.toInt() / 64)
            }) { info ->
                error = false

                // When dragging starts
                if (info.start) {
                    // Iterate through pieces to find the selected piece
                    // //println("Start dsragging...")
                    // Set king position
                    val pieceAtCurrentPos = schachbrett!!.findPiece(newPosition!!.first, newPosition!!.second)

                    if (schachbrett!!.findPiece(newPosition!!.first, newPosition!!.second) != null) {
                        currentPos = newPosition
                        selectedPiece = pieceAtCurrentPos
                    }
                }

                // When dragging ends
                if (info.end && selectedPiece != null) {
                    // //println("End dragging...")
                    // Check if newPosition is within the game board
                    if (newPosition!!.first < 0 || newPosition!!.first >= 8 || newPosition!!.second < 0 || newPosition!!.second >= 8) {
                        error = true
                        // Reset variables
                        selectedPiece = null
                        newPosition = null
                        currentPos = null
                    }
                    // Perform the move if no error
                    if (!error) {
                        val whiteTurnOrPassOn = whiteTurn || gameMode == "PO"
                        val wt = whiteTurn
                        inSchach(pieces)
                        if (!wt && blackKingInCheck) {
                            println("in check")
                            simulateMove(selectedPiece!!, currentPos!!, newPosition!!)
                        } else if (selectedPiece!!.moveChecker(
                                currentPos!!, newPosition!!, false
                            ) && whiteTurnOrPassOn && !blackKingInCheck
                        ) {/*figurBewegen(
                                selectedPiece!!, newPosition!!.first, newPosition!!.second
                            )*/
                            val pieceOnNewPos = schachbrett!!.findPiece(newPosition!!.first, newPosition!!.second)
                            if (simulateMove(selectedPiece!!, currentPos!!, newPosition!!) && pieceOnNewPos != null) {
                                pieceOnNewPos.removePiece(pieceOnNewPos)
                            }
                            println("normal way")
                            //selectedPiece = null

                        }


                        // Reset variables
                        selectedPiece = null
                        newPosition = null
                        currentPos = null

                    }

                    error = false
                    val moved = false

                    if (!moved && gameMode == "AI") {
                        val piecesList = mutableListOf<Pair<String, Pair<Int, Int>>>()
                        for (piece in pieces) {
                            piecesList.add(
                                Pair(piece.kind.toString(), Pair(piece.cx, piece.cy))
                            )
                        }

                        val chessAi = ChessAi()
                        val fen = chessAi.piecesListToFEN(piecesList)
                        launch {
                            val response = chessAi.postBestMove(fen)
                            println(chessAi.convertMoveToPosition(response))
                        }


                    }

                }
            }
        }
    }
}


fun inSchach(piecesList: ArrayList<Piece>): Boolean {
    blackKingInCheck = false
    var blackKingPosition = Pair(0, 0)
    for (piece in piecesList) {
        if (piece.kind == PieceKind.BlackKing) {
            blackKingPosition = Pair(piece.cx, piece.cy)
            println(blackKingPosition)
        }
    }
    for (piece in piecesList) {
        if (piece.color == Colors.WHITE && !piece.disabled) {
            val oldPos = Pair(piece.cx, piece.cy)

            if (piece.moveChecker(oldPos, blackKingPosition, performMove = false)) {
                println("true: ${piece.cx}, ${piece.cy}, ${piece.kind}")
                println("d")
                println(blackKingPosition)
                blackKingInCheck = true
                return true
            }

        }

    }

    return false

}

fun simulateMove(piece: Piece, oldPos: Pair<Int, Int>, newPos: Pair<Int, Int>): Boolean {
    inSchach(pieces)
    val moveIsPossible = piece.moveChecker(oldPos, newPos, false)
    val pieceOnNewPos = schachbrett!!.findPiece(newPos.first, newPos.second)
    print("move is possible: $moveIsPossible")
    println("Simulated move: ${piece.cx}, ${piece.cy}, inCeck: ${inSchach(pieces)}")
    if (moveIsPossible) {
        figurBewegen(piece, newPos.first, newPos.second)
        if (pieceOnNewPos != null) pieceOnNewPos.disabled = true
    }
    inSchach(pieces)
    if (piece.color == Colors.BLACK && blackKingInCheck) {
        figurBewegen(piece, oldPos.first, oldPos.second)
        println("move is not possbile")
        return false
    } else {

        whiteTurn = if (piece.color == Colors.BLACK) true else false
    }
    inSchach(pieces)
    println("Simulated move: ${piece.cx}, ${piece.cy}, stillInCheck: ${inSchach(pieces)}")
    return true

}
