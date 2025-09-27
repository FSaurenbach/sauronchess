import korlibs.image.color.*
import korlibs.korge.input.*
import korlibs.korge.view.*
import korlibs.korge.view.align.*
import kotlin.math.*


var castleAttempt = false

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

    // Set the images
    lateinit var pImage: Image

    init {
        reloadImages()

        GameState.pieces.add(this)

        movePiece(this, cx, cy)
        var newPosition: Pair<Int, Int>? = null
        var currentPos: Pair<Int, Int>? = null
        var error: Boolean

        this.draggableCloseable(
            onMouseDrag {
                newPosition = Pair(
                    (this.globalMousePos.x - DisplayConfig.offsetX).toInt() / cellWidth.toInt(),
                    (this.globalMousePos.y - DisplayConfig.offsetY).toInt() / cellHeight.toInt(),
                )
                for (whiteCircle in whiteCircles) whiteCircle.markGrey()
                for (circle in circles) {

                    if (circle.cx == newPosition!!.first && circle.cy == newPosition!!.second) {
                        circle.markWhite()

                        whiteCircles.add(circle)
                    }

                }
            }, autoMove = false
        ) { info ->
            if ((GameState.whiteTurn && this.isWhite) || (!GameState.whiteTurn && !this.isWhite)) {

                x = info.viewNextX
                y = info.viewNextY
            }
            else return@draggableCloseable
            error = false
            // Dragging start
            if (info.start) {
                // init vars
                currentPos = Pair(this.cx, this.cy)
                this.zIndex = 3.0
                this.scale(1.2, 1.2)
                castleAttempt = false

                // Show available moves
                for (x in 0 until DisplayConfig.boardSize) {
                    for (y in 0 until DisplayConfig.boardSize) {
                        if (simulateMove(Pair(cx, cy), Pair(x, y), this)) {
                            val cell = findCell(x, y)
                            if (cell != null) {
                                val circle = this.parent!!.moveIndicator()
                                circle.cx = x
                                circle.cy = y

                                if (findPiece(x, y) != null) {
                                    circle.markRed()
                                } else {
                                    circle.markGrey()
                                }
                                circle.centerOn(cell)
                                circles.add(circle)

                            }


                        }
                    }
                }
            }
            // Dragging end

            if (info.end) {
                this.zIndex = 0.0
                this.scale(1.0, 1.0)
                // Check if newPosition is within the game board
                if (newPosition!!.first !in 0 until DisplayConfig.boardSize || newPosition.second < 0 || newPosition.second >= DisplayConfig.boardSize) {
                    error = true
                }
                val oldPos = currentPos
                val pieceOnNewPos = findPiece(newPosition!!.first, newPosition!!.second)
                if (pieceOnNewPos?.color == color) error = true
                // Perform the move if no error
                if (!error) {
                    inCheck(GameState.pieces)
                    if (!GameState.whiteTurn && (GameState.blackKingInCheck || GameState.whiteKingInCheck)) {
                        if (doMove(this, currentPos!!, newPosition!!)) {
                            GameState.whiteTurn = !GameState.whiteTurn
                            pieceOnNewPos?.let { removePiece(it) }
                        }
                    } else if (moveChecker(
                            currentPos!!,
                            newPosition!!,
                        ) && !GameState.blackKingInCheck && !GameState.whiteKingInCheck
                    ) {

                        /** Pawn promotion.*/
                        if (this.kind == PieceKind.WhitePawn && newPosition!!.second == DisplayConfig.pawnPromotionRankWhite) {
                            val newKind: PieceKind = PieceKind.WhiteQueen
                            promoteTo(newKind)
                        }
                        if (this.kind == PieceKind.BlackPawn && newPosition!!.second == DisplayConfig.pawnPromotionRankBlack) {
                            val newKind: PieceKind = PieceKind.BlackQueen
                            promoteTo(newKind)
                        }

                        // If rook or king move outside of castling, deny castling
                        if (!castleAttempt) {
                            when (this.kind) {
                                PieceKind.WhiteRook, PieceKind.WhiteKing -> GameState.whiteCastlingLegal = false
                                PieceKind.BlackRook, PieceKind.BlackKing -> GameState.blackCastlingLegal = false
                                else -> {}
                            }
                        }

                        // Castling
                        if (GameState.whiteCastlingLegal && isWhite && currentPos!!.first == 4 && currentPos!!.second == 7 && castleAttempt) {
                            when {
                                newPosition!!.first == 6 && newPosition!!.second == 7 -> {
                                    val rook = findPiece(7, 7)
                                    movePiece(rook!!, 5, 7)
                                    movePiece(this, 6, 7)

                                    GameState.whiteTurn = !GameState.whiteTurn
                                    GameState.whiteCastlingLegal = false

                                }

                                newPosition!!.first == 2 && newPosition!!.second == 7 -> {
                                    val rook = findPiece(0, 7)
                                    movePiece(rook!!, 3, 7)
                                    movePiece(this, 2, 7)

                                    GameState.whiteTurn = !GameState.whiteTurn
                                    GameState.whiteCastlingLegal = false
                                }
                            }
                        } else if (GameState.blackCastlingLegal && !isWhite && currentPos!!.first == 4 && currentPos!!.second == 0 && castleAttempt) {
                            when {
                                newPosition!!.first == 6 && newPosition!!.second == 0 -> {
                                    val rook = findPiece(7, 0)
                                    movePiece(rook!!, 5, 0)
                                    movePiece(this, 6, 0)

                                    GameState.blackCastlingLegal = false
                                    GameState.whiteTurn = !GameState.whiteTurn
                                }

                                newPosition!!.first == 2 && newPosition!!.second == 0 -> {
                                    val rook = findPiece(0, 0)
                                    movePiece(rook!!, 3, 0)
                                    movePiece(this, 2, 0)
                                    GameState.whiteTurn = !GameState.whiteTurn
                                    GameState.blackCastlingLegal = false
                                }
                            }
                        } else if (doMove(this, currentPos!!, newPosition!!)) {
                            GameState.whiteTurn = !GameState.whiteTurn
                            pieceOnNewPos?.let { removePiece(it) }

                        }
                    } else {
                        movePiece(this, oldPos!!.first, oldPos.second)

                    }

                    newPosition = null
                    currentPos = null
                    error = false
                } else movePiece(this, oldPos!!.first, oldPos.second)
                error = false

                // Reset variables
                newPosition = null
                currentPos = null
                for (circle in circles) {
                    circle.removeFromParent()
                }
                checkForGameEnd()

            }
        }
    }


    /**
     * Checks if the move of the piece is valid.
     *
     * @param oldPos The old position of the piece.
     * @param newPos The new position of the piece.
     * @return true if the move is valid, false otherwise.
     */
    fun moveChecker(
        oldPos: Pair<Int, Int>,
        newPos: Pair<Int, Int>,
    ): Boolean {

        return when (kind) {
            PieceKind.WhitePawn, PieceKind.BlackPawn -> movePawn(oldPos, newPos)
            PieceKind.WhiteRook, PieceKind.BlackRook -> moveRook(oldPos, newPos)
            PieceKind.WhiteKnight, PieceKind.BlackKnight -> moveKnight(oldPos, newPos)

            PieceKind.WhiteBishop, PieceKind.BlackBishop -> moveBishop(oldPos, newPos)

            PieceKind.WhiteQueen, PieceKind.BlackQueen -> moveQueen(oldPos, newPos)
            PieceKind.WhiteKing, PieceKind.BlackKing -> moveKing(oldPos, newPos)
        }
    }

    private fun movePawn(
        oldPos: Pair<Int, Int>, newPos: Pair<Int, Int>
    ): Boolean {
        val pieceOnNewPos = findPiece(newPos.first, newPos.second)
        val isPawnMoveForward = if (isWhite) {
            newPos.second - oldPos.second == -1 && oldPos.first == newPos.first
        } else {
            newPos.second - oldPos.second == 1 && oldPos.first == newPos.first
        }
        val isInitialPawnMove = if (isWhite) {
            oldPos.second == 6 && newPos.second == 4 && oldPos.first == newPos.first
        } else {
            oldPos.second == 1 && newPos.second == 3 && oldPos.first == newPos.first
        }
        if (isPawnMoveForward || isInitialPawnMove) {
            if (pieceOnNewPos == null) {
                return true
            }
        } else if ((abs(newPos.second - oldPos.second) == 1 && abs(newPos.first - oldPos.first) == 1)) {
            // Fix that pawns can take pieces behind themselves (check correct direction if taking a piece)
            if ((isWhite && newPos.second > oldPos.second) || (!isWhite && newPos.second < oldPos.second)) return false

            if (pieceOnNewPos != null && pieceOnNewPos.color != if (isWhite) Colors.WHITE else Colors.BLACK) {
                return true
            }
        }
        return false
    }

    private fun moveRook(
        oldPos: Pair<Int, Int>, newPos: Pair<Int, Int>
    ): Boolean {
        val (oldX, oldY) = oldPos
        val (newX, newY) = newPos
        if (oldX == newX) {
            val range = if (newY > oldY) (oldY + 1 until newY) else (newY + 1 until oldY)
            if (range.any { findPiece(oldX, it) != null }) return false
        } else if (oldY == newY) {
            val range = if (newX > oldX) (oldX + 1 until newX) else (newX + 1 until oldX)
            if (range.any { findPiece(it, oldY) != null }) return false
        } else {
            return false
        }


        return true
    }

    private fun moveKnight(
        oldPos: Pair<Int, Int>, newPos: Pair<Int, Int>
    ): Boolean {
        val xDiff = abs(newPos.first - oldPos.first)
        val yDiff = abs(newPos.second - oldPos.second)

        return (xDiff == 2 && yDiff == 1) || (xDiff == 1 && yDiff == 2)
    }

    private fun moveBishop(
        oldPos: Pair<Int, Int>, newPos: Pair<Int, Int>
    ): Boolean {
        val dx = abs(newPos.first - oldPos.first)
        val dy = abs(newPos.second - oldPos.second)

        // Check if the move is diagonal
        if (dx != dy) return false

        // Check for obstructions on the diagonal path
        val directionX = (newPos.first - oldPos.first).sign
        val directionY = (newPos.second - oldPos.second).sign

        for (i in 1 until dx) {
            val checkPos = oldPos.first + i * directionX to oldPos.second + i * directionY
            if (findPiece(checkPos.first, checkPos.second) != null) {
                return false
            }
        }

        return true
    }

    private fun moveQueen(
        oldPos: Pair<Int, Int>, newPos: Pair<Int, Int>
    ): Boolean = moveRook(oldPos, newPos) || moveBishop(
        oldPos, newPos
    )

    private fun moveKing(
        oldPos: Pair<Int, Int>, newPos: Pair<Int, Int>
    ): Boolean {
        // Determine the move direction
        val deltaX = newPos.first - oldPos.first
        val deltaY = newPos.second - oldPos.second

        // Check if the move is within the valid range for a king
        if (abs(deltaX) <= 1 && abs(deltaY) <= 1) {
            println("false")
            return true
        }
        // Castling
        if (GameState.whiteCastlingLegal && isWhite && oldPos.first == 4 && oldPos.second == 7) {
            when {
                newPos.first == 6 && newPos.second == 7 -> {
                    // If something is in the way of the castling return false
                    if (findPiece(6, 7) != null || findPiece(5, 7) != null) return false
                    // Check if king (will) be/is in check
                    if (!simulateMove(oldPos, newPos, this, true)) return false

                    castleAttempt = true
                    return true
                }

                newPos.first == 2 && newPos.second == 7 -> {

                    if (findPiece(1, 7) != null || findPiece(2, 7) != null) return false
                    if (!simulateMove(oldPos, newPos, this, true)) return false

                    castleAttempt = true
                    return true
                }
            }
        }
        if (GameState.blackCastlingLegal && !isWhite && oldPos.first == 4 && oldPos.second == 0) {
            when {
                newPos.first == 6 && newPos.second == 0 -> {
                    if (findPiece(6, 0) != null || findPiece(5, 0) != null) return false
                    if (!simulateMove(oldPos, newPos, this, true)) return false

                    castleAttempt = true
                    return true
                }

                newPos.first == 2 && newPos.second == 0 -> {
                    if (findPiece(1, 0) != null || findPiece(2, 0) != null) return false

                    if (!simulateMove(oldPos, newPos, this, true)) return false

                    castleAttempt = true
                    return true
                }
            }
        }

        return false
    }

    fun cxy(): Pair<Int, Int> {
        return Pair(cx, cy)
    }

    private fun promoteTo(newPieceKind: PieceKind) {
        this.kind = newPieceKind
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


}


fun checkForGameEnd(): Boolean {
    val whitePieces = GameState.pieces.filter { it.color == Colors.WHITE }
    val blackPieces = GameState.pieces.filter { it.color == Colors.BLACK }
    for (piece in if (GameState.whiteTurn) whitePieces else blackPieces) {
        for (x in 0 until DisplayConfig.boardSize) {
            for (y in 0 until DisplayConfig.boardSize) {
                if (simulateMove(Pair(piece.cx, piece.cy), Pair(x, y), piece)) {
                    return true
                }
            }
        }
    }

    println("No moves left for white / black!")

    if (GameState.whiteTurn) {
        if (GameState.whiteKingInCheck) println("White got checkmated") else println("White got stalemated")
        println("Black won the game!")
    } else {
        if (GameState.blackKingInCheck) println("Black got checkmated") else println("Black got stalemated")
        println("White won the game!")
    }
    return false
}
