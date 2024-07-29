@file:OptIn(KorgeExperimental::class)

import korlibs.event.*
import korlibs.image.bitmap.*
import korlibs.image.color.*
import korlibs.image.format.*
import korlibs.io.file.std.*
import korlibs.korge.*
import korlibs.korge.annotations.*
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
var whiteKing: Bitmap? = null
var whiteKingInCheck = false
var whiteKingPosition = Pair(4, 7)
var whiteRochade = true
var blackRochade = true
var blackPawn: Bitmap? = null
var blackRook: Bitmap? = null
var blackKnight: Bitmap? = null
var blackBishop: Bitmap? = null
var blackQueen: Bitmap? = null
var blackKing: Bitmap? = null
var blackKingInCheck = false
var blackKingPosition = Pair(4, 0)

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
        var ai = Ai()
        ai.exampleRequest()
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
                        // Set king position
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
                            if (selectedPiece!!.moveChecker(currentPos!!, newPosition!!, true)) {
                                figurBewegen(
                                    selectedPiece!!, newPosition!!.first, newPosition!!.second)
                                selectedPiece = null
                            }

                            // Check if king is in Check
                            inCheck()

                            // Reset variables
                            selectedPiece = null
                            newPosition = null
                            currentPos = null
                        }

                        error = false
                        var moved = false
                        println("b")
                        sceneContainer.keys {
                            justDown(Key.SPACE) {
                                if (!moved) {
                                    // pieces list with the name of all the pieces and their
                                    // position
                                    var piecesList = mutableListOf<Pair<String, Pair<Int, Int>>>()
                                    for (piece in pieces) {
                                        piecesList.add(
                                            Pair(piece.kind.toString(), Pair(piece.cx, piece.cy)))
                                    }
                                    println(piecesList)

                                    var ai = Ai()

                                    var fen = ai.piecesListToFEN(piecesList)
                                    println(fen)
                                    moved = true
                                }
                            }
                        }
                        // make a list where all pieces are stored with their positions

                    }
                }
        }
    }
}

fun inCheck(): Boolean {

    println("checking for check...")
    val piecesCopy = pieces.toMutableList()
    for (piece in piecesCopy) {
        if (piece.kind == PieceKind.WhiteKing) {
            whiteKingPosition = Pair(piece.cx, piece.cy)
            // println("White King Position: $whiteKingPosition")
        }
        if (piece.kind == PieceKind.BlackKing) {
            blackKingPosition = Pair(piece.cx, piece.cy)
            // println("Black King Position: $blackKingPosition")
        }
    }
    var foundsmt = false
    for (bp in piecesCopy) {

        if (bp.moveChecker(Pair(bp.cx, bp.cy), whiteKingPosition, false)) {

            println("Piece ${bp.kind} at location x:${bp.cx}y:${bp.cy}is attacking the white king")
            whiteKingInCheck = true
            return true
        } else whiteKingInCheck = foundsmt
        if (bp.moveChecker(Pair(bp.cx, bp.cy), blackKingPosition, false)) {
            blackKingInCheck = true
            println("Piece ${bp.kind} at location x:${bp.cx}y:${bp.cy}is attacking the black king")
            return true
        }
    }
    return false
}
