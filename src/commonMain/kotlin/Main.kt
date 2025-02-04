@file:Suppress("ktlint:standard:no-wildcard-imports")

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
var whiteKing: Bitmap? = null
var whiteRochade = true
var blackRochade = true
var blackPawn: Bitmap? = null
var blackRook: Bitmap? = null
var blackKnight: Bitmap? = null
var blackBishop: Bitmap? = null
var blackQueen: Bitmap? = null
var blackKing: Bitmap? = null
var whiteKingInCheck = false
var blackKingInCheck = false
var whiteTurn = true

suspend fun main() =
    Korge(windowSize = Size(512, 512), backgroundColor = Colors["#2b2b2b"]) {
        val sceneContainer = sceneContainer()
        sceneContainer.changeTo { GameScene(sceneContainer) }
    }

class GameScene(
    private val cont: SceneContainer,
) : PixelatedScene(512, 512) {
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
            piece.draggableCloseable(
                onMouseDrag {
                    // When dragging starts, update newPosition and newPositionEncoded
                    newPosition = Pair(this.globalMousePos.x.toInt() / 64, this.globalMousePos.y.toInt() / 64)
                },
            ) { info ->
                error = false

                // When dragging starts
                if (info.start) {
                    val pieceAtCurrentPos = schachbrett!!.findPiece(newPosition!!.first, newPosition!!.second)

                    if (schachbrett!!.findPiece(newPosition!!.first, newPosition!!.second) != null) {
                        currentPos = newPosition
                        selectedPiece = pieceAtCurrentPos
                    }
                }

                // When dragging ends
                if (info.end && selectedPiece != null) {
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
                        val wt = whiteTurn
                        inSchach(pieces)
                        val pieceOnNewPos = schachbrett!!.findPiece(newPosition!!.first, newPosition!!.second)
                        if (!wt && (blackKingInCheck || whiteKingInCheck)) {
                            println("in check")
                            if (simulateMove(selectedPiece!!, currentPos!!, newPosition!!)) {
                                pieceOnNewPos?.removePiece(pieceOnNewPos)
                            }
                        } else if (selectedPiece!!.moveChecker(
                                currentPos!!,
                                newPosition!!,
                                false,
                            ) &&
                            !blackKingInCheck &&
                            !whiteKingInCheck
                        ) {
                            if (simulateMove(selectedPiece!!, currentPos!!, newPosition!!)) {
                                pieceOnNewPos?.removePiece(pieceOnNewPos)
                            }
                        }
                        // Reset variables
                        selectedPiece = null
                        newPosition = null
                        currentPos = null
                        error = false
                    }
                    error = false
                }
            }
        }
    }
}

fun inSchach(piecesList: ArrayList<Piece>): Boolean {
    whiteKingInCheck = false
    blackKingInCheck = false
    var whiteKingPosition = Pair(0, 0)
    var blackKingPosition = Pair(0, 0)
    for (piece in piecesList) {
        if (piece.kind == PieceKind.WhiteKing) {
            whiteKingPosition = Pair(piece.cx, piece.cy)
        } else if (piece.kind == PieceKind.BlackKing) {
            blackKingPosition = Pair(piece.cx, piece.cy)
        }
    }
    for (piece in piecesList) {
        if (piece.color == Colors.WHITE && !piece.disabled) {
            val oldPos = Pair(piece.cx, piece.cy)
            if (piece.moveChecker(oldPos, blackKingPosition, false)) {
                println("true: ${piece.cx}, ${piece.cy}, ${piece.kind}")
                println(blackKingPosition)
                blackKingInCheck = true
                return true
            }
        }
        if (piece.color == Colors.BLACK && !piece.disabled) {
            val oldPos = Pair(piece.cx, piece.cy)

            if (piece.moveChecker(oldPos, whiteKingPosition, false)) {
                println("White King is in check because of: ${piece.cx}, ${piece.cy}, ${piece.kind}")
                println(whiteKingPosition)
                whiteKingInCheck = true
                return true
            }
        }
    }

    return false
}

fun simulateMove(
    piece: Piece,
    oldPos: Pair<Int, Int>,
    newPos: Pair<Int, Int>,
    performMove: Boolean = true,
): Boolean {
    inSchach(pieces)
    val moveIsPossible = piece.moveChecker(oldPos, newPos, false)
    val pieceOnNewPos = schachbrett!!.findPiece(newPos.first, newPos.second)
    println("Simulated move: ${piece.cx}, ${piece.cy}, inCeck: ${inSchach(pieces)}")
    if (whiteTurn && piece.color == Colors.BLACK) return false
    if (!whiteTurn && piece.color == Colors.WHITE) return false
    if (moveIsPossible) {
        figurBewegen(piece, newPos.first, newPos.second)
        pieceOnNewPos?.disabled = true
    }
    inSchach(pieces)
    if ((piece.color == Colors.BLACK && blackKingInCheck) || (piece.color == Colors.WHITE && whiteKingInCheck)) {
        figurBewegen(piece, oldPos.first, oldPos.second)
        println("move is not possbile")
        return false
    } else {
        whiteTurn = piece.color == Colors.BLACK
    }
    inSchach(pieces)
    println("Simulated move: ${piece.cx}, ${piece.cy}, stillInCheck: ${inSchach(pieces)}")
    pieceOnNewPos?.disabled = false
    if (!performMove) figurBewegen(piece, oldPos.first, oldPos.second)
    return true
}
