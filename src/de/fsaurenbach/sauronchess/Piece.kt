package de.fsaurenbach.sauronchess

import de.fsaurenbach.sauronchess.DisplayConfig.cellHeight
import de.fsaurenbach.sauronchess.DisplayConfig.cellWidth
import korlibs.image.color.*
import korlibs.korge.input.*
import korlibs.korge.view.*
import korlibs.korge.view.align.*
import kotlinx.coroutines.*
import kotlin.math.*


enum class PieceKind {
    WhitePawn, BlackPawn, WhiteRook, BlackRook, WhiteKnight, BlackKnight, WhiteBishop, BlackBishop, WhiteQueen, BlackQueen, WhiteKing, BlackKing,
}

val circles = ArrayList<MoveIndicator>()
val whiteCircles = ArrayList<MoveIndicator>()
inline fun Container.piece(
    kind: PieceKind,
    color: RGBA,
    cx: Int,
    cy: Int,
    disabled: Boolean = false,
    isWhite: Boolean,
    callback: @ViewDslMarker Piece.() -> Unit = {}
): Piece = Piece(kind, color, cx, cy, disabled, isWhite).addTo(this, callback)


class Piece(
    var kind: PieceKind,
    val color: RGBA,
    var cx: Int,
    var cy: Int,
    var disabled: Boolean = false,
    private val isWhite: Boolean
) : Container() {
    val cxy get() = Pair(cx, cy)
    lateinit var pImage: Image
    private var currentPos get() = Pair(cx, cy)
    private lateinit var newPos: Pair<Int, Int>
    private val currentX get() = currentPos.first
    private val currentY get() = currentPos.second
    private val newX get() = newPos.first
    private val newY get() = newPos.second

    init {
        reloadImages()

        GameState.pieces.add(this)

        movePiece(this, cx, cy)
        currentPos = Pair(cx, cy)
        var error: Boolean

        this.draggableCloseable(
            onMouseDrag {
                newPos = Pair(
                    (this.globalMousePos.x - DisplayConfig.offsetX).toInt() / cellWidth.toInt(),
                    (this.globalMousePos.y - DisplayConfig.offsetY).toInt() / cellHeight.toInt(),
                )
                for (whiteCircle in whiteCircles) whiteCircle.markGrey()
                for (circle in circles) {
                    if (circle.cx == newX && circle.cy == newY) {
                        circle.markWhite()

                        whiteCircles.add(circle)
                    }

                }
            }, autoMove = false
        ) { info ->
            if (((GameState.whiteTurn && this.isWhite) || (!GameState.whiteTurn && !this.isWhite)) && !GameState.promotionActive) {
                x = info.viewNextX
                y = info.viewNextY
            } else return@draggableCloseable
            error = false
            // Dragging start
            if (info.start) {
                // init vars
                this.zIndex = 3.0
                this.scale(1.2, 1.2)
                GameState.castleAttempt = false

                // Show available moves
                for (x in 0..7) {
                    for (y in 0..7) {
                        newPos = Pair(x, y)
                        if (simulateMove(Pair(currentX, currentY), Pair(x, y), this)) {
                            findCell(x, y).also {
                                parent!!.moveIndicator(x, y).apply {
                                    if (findPiece(x, y) != null) markRed() else markGrey()
                                    addTo(circles)
                                    centerOn(it)

                                }

                            }


                        }
                    }
                }
            }
            if (info.end) {
                zIndex = 0.0
                scale(1.0, 1.0)
                // Check if newPosition is within the game board
                if (newX !in 0..<8 || newY !in 0..<8) error = true

                val currentPos = currentPos
                println("currentPos $currentPos , new Pos $newPos")
                val pieceOnNewPos = findPiece(newX, newY)
                if (pieceOnNewPos?.color == color) error = true
                // Perform the move if no error
                if (!error) {
                    println("currentPos $currentPos , new Pos $newPos, whiteTurn ${GameState.whiteTurn}")

                    inCheck(GameState.pieces)
                    if (!GameState.whiteTurn && (GameState.blackKingInCheck || GameState.whiteKingInCheck)) {
                        println("in check")
                        if (doMove()) {
                            GameState.whiteTurn = !GameState.whiteTurn
                            pieceOnNewPos?.let { removePiece(it) }
                        }

                    } else if (moveChecker(
                            newPos,
                        ) && !GameState.blackKingInCheck && !GameState.whiteKingInCheck
                    ) {
                        /** Pawn promotion.*/
                        if ((kind == PieceKind.WhitePawn && newY == 0) || (kind == PieceKind.BlackPawn && newY == 7)) {

                            GameState.promotionActive = true

                            if (userSettings.autoPromote) {
                                promoteTo(if (isWhite) PieceKind.WhiteQueen else PieceKind.BlackQueen)
                                GameState.promotionActive = false

                            } else {
                                val promotionDialogue = PromotionDialogue(isWhite).addTo(GameState.sceneContainer)
                                GameState.sceneContainer.launch {
                                    promoteTo(promotionDialogue.getChoice())
                                    GameState.promotionActive = false
                                    promotionDialogue.removeFromParent()

                                }
                            }

                        }

                        // If rook or king move outside of castling, deny castling
                        if (!GameState.castleAttempt) {
                            when (this.kind) {
                                PieceKind.WhiteRook, PieceKind.WhiteKing -> GameState.whiteCastlingLegal = false
                                PieceKind.BlackRook, PieceKind.BlackKing -> GameState.blackCastlingLegal = false
                                else -> {}
                            }
                        }

                        // Castling
                        if (GameState.whiteCastlingLegal && isWhite && currentX == 4 && currentY == 7 && GameState.castleAttempt) {
                            when {
                                newX == 6 && newY == 7 -> {
                                    val rook = findPiece(7, 7)
                                    movePiece(rook!!, 5, 7)
                                    movePiece(this, 6, 7)
                                    GameState.whiteTurn = !GameState.whiteTurn
                                    GameState.whiteCastlingLegal = false

                                }

                                newX == 2 && newY == 7 -> {
                                    val rook = findPiece(0, 7)
                                    movePiece(rook!!, 3, 7)
                                    movePiece(this, 2, 7)

                                    GameState.whiteTurn = !GameState.whiteTurn
                                    GameState.whiteCastlingLegal = false
                                }
                            }
                        } else if (GameState.blackCastlingLegal && !isWhite && currentX == 4 && currentY == 0 && GameState.castleAttempt) {
                            when {
                                newX == 6 && newY == 0 -> {
                                    val rook = findPiece(7, 0)
                                    movePiece(rook!!, 5, 0)
                                    movePiece(this, 6, 0)

                                    GameState.blackCastlingLegal = false
                                    GameState.whiteTurn = !GameState.whiteTurn
                                }

                                newX == 2 && newY == 0 -> {
                                    val rook = findPiece(0, 0)
                                    movePiece(rook!!, 3, 0)
                                    movePiece(this, 2, 0)
                                    GameState.whiteTurn = !GameState.whiteTurn
                                    GameState.blackCastlingLegal = false
                                }
                            }

                        } else if (doMove()) {
                            GameState.whiteTurn = !GameState.whiteTurn
                            pieceOnNewPos?.let { removePiece(it) }

                        }

                    } else {
                        movePiece(this, currentX, currentY)
                    }

//                    newPos = null
//                    currentPos = null
                    error = false
                } else movePiece(this, currentX, currentY)
                error = false

                // Reset variables
//                newPos = null
                circles.forEach { it.removeFromParent() }
                circles.clear()

                println()
                println()
                checkForGameEnd()

            }
        }
    }


    fun moveChecker(
        newPos2: Pair<Int, Int>,
    ): Boolean {
        newPos = newPos2

        return when (kind) {
            PieceKind.WhitePawn, PieceKind.BlackPawn -> movePawn()
            PieceKind.WhiteRook, PieceKind.BlackRook -> moveRook()
            PieceKind.WhiteKnight, PieceKind.BlackKnight -> moveKnight()
            PieceKind.WhiteBishop, PieceKind.BlackBishop -> moveBishop()
            PieceKind.WhiteQueen, PieceKind.BlackQueen -> moveQueen()
            PieceKind.WhiteKing, PieceKind.BlackKing -> moveKing()
        }
    }

    private fun movePawn(): Boolean {
        val pieceOnNewPos = findPiece(newX, newY)
        val isPawnMoveForward = if (isWhite) {
            newY - currentY == -1 && currentX == newX
        } else {
            newY - currentY == 1 && currentX == newX
        }
        val isInitialPawnMove = if (isWhite) {
            currentY == 6 && newY == 4 && currentX == newX
        } else {
            currentY == 1 && newY == 3 && currentX == newX
        }
        if (isPawnMoveForward || isInitialPawnMove) {
            if (pieceOnNewPos == null) {
                return true
            }
        } else if ((abs(newY - currentY) == 1 && abs(newX - currentX) == 1)) {
            // Fix that pawns can take pieces behind themselves (check correct direction if taking a piece)
            if ((isWhite && newY > currentY) || (!isWhite && newY < currentY)) return false

            if (pieceOnNewPos != null && pieceOnNewPos.color != if (isWhite) Colors.WHITE else Colors.BLACK) {
                return true
            }
        }
        return false
    }

    private fun moveRook(): Boolean {
        if (currentX == newX) {
            val range = if (newY > currentY) (currentY + 1 until newY) else (newY + 1 until currentY)
            if (range.any { findPiece(currentX, it) != null }) return false
        } else if (currentY == newY) {
            val range = if (newX > currentX) (currentX + 1 until newX) else (newX + 1 until currentX)
            if (range.any { findPiece(it, currentY) != null }) return false
        } else {
            return false
        }


        return true
    }

    private fun moveKnight(): Boolean {
        val xDiff = abs(newX - currentX)
        val yDiff = abs(newY - currentY)

        return (xDiff == 2 && yDiff == 1) || (xDiff == 1 && yDiff == 2)
    }

    private fun moveBishop(): Boolean {
        val dx = abs(newX - currentX)
        val dy = abs(newY - currentY)

        // Check if the move is diagonal
        if (dx != dy) return false

        // Check for obstructions on the diagonal path
        val directionX = (newX - currentX).sign
        val directionY = (newY - currentY).sign

        for (i in 1 until dx) {
            val checkPos = currentX + i * directionX to currentY + i * directionY
            if (findPiece(checkPos.first, checkPos.second) != null) {
                return false
            }
        }

        return true
    }

    private fun moveQueen(): Boolean = moveRook() || moveBishop()

    private fun moveKing(): Boolean {
        // Determine the move direction
        val deltaX = newX - currentX
        val deltaY = newY - currentY

        // Check if the move is within the valid range for a king

        if (abs(deltaX) <= 1 && abs(deltaY) <= 1) return true

        // Castling
        if (GameState.whiteCastlingLegal && isWhite && currentX == 4 && currentY == 7) {
            when {
                newX == 6 && newY == 7 -> {

                    if (findPiece(6, 7) != null || findPiece(5, 7) != null) return false
                    if (!simulateMove(currentPos, newPos, this, true)) return false

                    GameState.castleAttempt = true
                    return true
                }

                newX == 2 && newY == 7 -> {

                    if (findPiece(1, 7) != null || findPiece(2, 7) != null || findPiece(3, 7) != null) return false
                    if (!simulateMove(currentPos, newPos, this, true)) return false

                    GameState.castleAttempt = true
                    return true
                }
            }
        }
        if (GameState.blackCastlingLegal && !isWhite && currentX == 4 && currentY == 0) {
            when {
                newX == 6 && newY == 0 -> {

                    if (findPiece(6, 0) != null || findPiece(5, 0) != null) return false
                    if (!simulateMove(currentPos, newPos, this, true)) return false

                    GameState.castleAttempt = true
                    return true
                }

                newX == 2 && newY == 0 -> {

                    if (findPiece(1, 0) != null || findPiece(2, 0) != null || findPiece(3, 0) != null) return false
                    if (!simulateMove(currentPos, newPos, this, true)) return false

                    GameState.castleAttempt = true
                    return true
                }
            }
        }

        return false
    }


    private fun promoteTo(newPieceKind: PieceKind) {
        println("Promoting to $newPieceKind")
        kind = newPieceKind
        reloadImages()
    }

    private fun reloadImages() {
        if (::pImage.isInitialized) {
            pImage.removeFromParent()
        }

        this.pImage = image(
            when (kind) {
                PieceKind.WhitePawn -> PieceImages.whitePawn!!
                PieceKind.WhiteRook -> PieceImages.whiteRook!!
                PieceKind.WhiteKnight -> PieceImages.whiteKnight!!
                PieceKind.WhiteBishop -> PieceImages.whiteBishop!!
                PieceKind.WhiteQueen -> PieceImages.whiteQueen!!
                PieceKind.WhiteKing -> PieceImages.whiteKing!!
                PieceKind.BlackPawn -> PieceImages.blackPawn!!
                PieceKind.BlackRook -> PieceImages.blackRook!!
                PieceKind.BlackKnight -> PieceImages.blackKnight!!
                PieceKind.BlackBishop -> PieceImages.blackBishop!!
                PieceKind.BlackQueen -> PieceImages.blackQueen!!
                PieceKind.BlackKing -> PieceImages.blackKing!!
            },
        )

        pImage.scale = DisplayConfig.userScale
    }

    private fun doMove(): Boolean {
        if ((GameState.whiteTurn && this.color == Colors.BLACK) || (!GameState.whiteTurn && this.color == Colors.WHITE)) return false

        inCheck(GameState.pieces)
        val pieceOnNewPos = findPiece(newX, newY)

        movePiece(this, newX, newY)
        pieceOnNewPos?.disabled = true
        inCheck(GameState.pieces)
        if ((this.color == Colors.BLACK && GameState.blackKingInCheck) || (this.color == Colors.WHITE && GameState.whiteKingInCheck)) {
            movePiece(this, currentX, currentY)
            println("King will (still) be in check after this move!")
            return false
        }
        inCheck(GameState.pieces)
        println("Doing move: ${this.cx}, ${this.cy}, (still) inCheck: ${inCheck(GameState.pieces)}")
        this.cx = newX
        this.cy = newY
        pieceOnNewPos?.disabled = false
        return true
    }


}


fun checkForGameEnd(): Boolean {
    val whitePieces = GameState.pieces.filter { it.color == Colors.WHITE }
    val blackPieces = GameState.pieces.filter { it.color == Colors.BLACK }
    for (piece in if (GameState.whiteTurn) whitePieces else blackPieces) {
        for (x in 0..7) {
            for (y in 0..7) {
                if (simulateMove(Pair(piece.cx, piece.cy), x to y, piece)) return true

            }
        }
    }

    println("No moves left for white / black!")

    if (GameState.whiteTurn) {
        if (GameState.whiteKingInCheck) println("White got checkmated") else println("White got stalemated")
    } else {
        if (GameState.blackKingInCheck) println("Black got checkmated") else println("Black got stalemated")
    }
    return false
}
