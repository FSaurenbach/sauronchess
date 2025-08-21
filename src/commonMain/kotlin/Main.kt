@file:Suppress("ktlint:standard:no-wildcard-imports")

import korlibs.image.bitmap.*
import korlibs.image.color.*
import korlibs.image.format.*
import korlibs.io.file.std.*
import korlibs.korge.*
import korlibs.korge.input.*
import korlibs.korge.scene.*
import korlibs.korge.view.*
import korlibs.korge.view.align.*
import korlibs.math.geom.*

var cells = ArrayList<Cell>()
var pieces = ArrayList<Piece>()
var whitePawn: Bitmap? = null
var whiteRook: Bitmap? = null
var whiteKnight: Bitmap? = null
var whiteBishop: Bitmap? = null
var whiteQueen: Bitmap? = null
var whiteKing: Bitmap? = null
var whiteCastlingLegal = true
var blackCastlingLegal = true
var blackPawn: Bitmap? = null
var blackRook: Bitmap? = null
var blackKnight: Bitmap? = null
var blackBishop: Bitmap? = null
var blackQueen: Bitmap? = null
var blackKing: Bitmap? = null
var whiteKingInCheck = false
var blackKingInCheck = false
var whiteTurn = true
var screenSizeX = 800
var screenSizeY = 800
var chessBoardX = 512
var chessBoardY = 512
var offsetX = (screenSizeX - chessBoardX) / 2
var offsetY = (screenSizeY - chessBoardY) / 2

suspend fun main() =
    Korge(windowSize = Size(screenSizeX, screenSizeY), backgroundColor = Colors["#4b3621"]) {
        val sceneContainer = sceneContainer()
        sceneContainer.changeTo { GameScene() }
    }

class GameScene : Scene() {
    /**
     * This method is called to render the main content of the game scene. Main function to set up
     * the chessboard, pieces, and handle piece movement.
     */
    override suspend fun SContainer.sceneMain() {
        // Make a nice backdrop for the titleText

        // Chessboard container
        val chessboard =
            container {
                position(offsetX, offsetY)
                width = chessBoardX.toDouble()
                height = chessBoardY.toDouble()
                println("Schachbrett initialized")
                initializeBoard(this)
            }

        // Load pieces (you can keep the loading logic as you already have it)
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

        addAllPieces(chessboard)
        handlePieceMovement()

        // Add the shadow and play button
        val shadow =
            solidRect(chessBoardX, chessBoardY, Colors["#000000"].withAd(0.5)) {
                position(offsetX, offsetY)
                visible = true
            }
        val title: Text =
            text("Chess") {
                textSize = 50.0
                centerXOnStage()
                y = 20.0
                color = Colors.WHITE
            }

        roundRect(Size(title.width + 20, title.height + 20), RectCorners(10), Colors["#3b7d88"]) {
            this.zIndex(-1)
        }.centerOn(title)
        val playButtonBackground =
            roundRect(Size(200, 80), RectCorners(20), Colors["#3b7d88"]) {
                centerOn(chessboard)
            }

        text("Play") {
            color = Colors.WHITE
            textSize = 40.0
            centerOn(playButtonBackground)

            onClick {
                shadow.visible = false
                playButtonBackground.visible = false
                this.visible = false
            }
        }
    }

    private fun SContainer.handlePieceMovement() {
        var newPosition: Pair<Int, Int>? = null
        var currentPos: Pair<Int, Int>? = null
        var selectedPiece: Piece? = null
        var error: Boolean

        for (piece in pieces) {
            piece.draggableCloseable(
                onMouseDrag {
                    newPosition =
                        Pair(
                            (this.globalMousePos.x - offsetX).toInt() / 64,
                            (this.globalMousePos.y - offsetY).toInt() / 64,
                        )
                },
            ) { info ->
                error = false
                // Dragging start
                if (info.start) {
                    val pieceAtCurrentPos = findPiece(newPosition!!.first, newPosition!!.second)

                    if (findPiece(newPosition!!.first, newPosition!!.second) != null) {
                        currentPos = newPosition
                        selectedPiece = pieceAtCurrentPos
                    }
                }
                // Dragging end
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
                        inCheck(pieces)
                        val pieceOnNewPos = findPiece(newPosition!!.first, newPosition!!.second)
                        if (!whiteTurn && (blackKingInCheck || whiteKingInCheck)) {
                            println("in check")
                            if (doMove(selectedPiece!!, currentPos!!, newPosition!!)) {
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
                            if (doMove(selectedPiece!!, currentPos!!, newPosition!!)) {
                                pieceOnNewPos?.removePiece(pieceOnNewPos)
                                whiteTurn = !whiteTurn
                            }
                        }

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

fun inCheck(piecesList: ArrayList<Piece>): Boolean {
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

fun doMove(
    piece: Piece,
    oldPos: Pair<Int, Int>,
    newPos: Pair<Int, Int>,
): Boolean {
    inCheck(pieces)
    val moveIsPossible = piece.moveChecker(oldPos, newPos, false)
    val pieceOnNewPos = findPiece(newPos.first, newPos.second)
    println("Simulated move: ${piece.cx}, ${piece.cy}, inCheck: ${inCheck(pieces)}")
    if (whiteTurn && piece.color == Colors.BLACK) return false
    if (!whiteTurn && piece.color == Colors.WHITE) return false
    if (moveIsPossible) {
        figurBewegen(piece, newPos.first, newPos.second)
        pieceOnNewPos?.disabled = true
    }
    inCheck(pieces)
    if ((piece.color == Colors.BLACK && blackKingInCheck) || (piece.color == Colors.WHITE && whiteKingInCheck)) {
        figurBewegen(piece, oldPos.first, oldPos.second)
        println("move is not possible")
        return false
    }
    inCheck(pieces)
    println("Simulated move: ${piece.cx}, ${piece.cy}, stillInCheck: ${inCheck(pieces)}")
    pieceOnNewPos?.disabled = false
    return true
}
