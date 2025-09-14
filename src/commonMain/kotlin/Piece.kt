import korlibs.image.color.*
import korlibs.korge.input.*
import korlibs.korge.view.*
import korlibs.korge.view.Circle
import korlibs.korge.view.align.*
import korlibs.korge.view.filter.*
import korlibs.math.geom.*
import kotlin.math.*


var castleAttempt = false

enum class PieceKind {
    WhitePawn, BlackPawn, WhiteRook, BlackRook, WhiteKnight, BlackKnight, WhiteBishop, BlackBishop, WhiteQueen, BlackQueen, WhiteKing, BlackKing,
}

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
    private var piece: Image = Image(
        when (kind) {
            PieceKind.WhitePawn -> whitePawn!!
            PieceKind.WhiteRook -> whiteRook!!
            PieceKind.WhiteKnight -> whiteKnight!!
            PieceKind.WhiteBishop -> whiteBishop!!
            PieceKind.WhiteQueen -> whiteQueen!!
            PieceKind.WhiteKing -> whiteKing!!
            PieceKind.BlackPawn -> blackPawn!!
            PieceKind.BlackRook -> blackRook!!
            PieceKind.BlackKnight -> blackKnight!!
            PieceKind.BlackBishop -> blackBishop!!
            PieceKind.BlackQueen -> blackQueen!!
            PieceKind.BlackKing -> blackKing!!
        },
    )

    init {

        piece.size(Size(64, 64))
        piece.addTo(this)
        pieces.add(this)

        movePiece(this, cx, cy)
        var newPosition: Pair<Int, Int>? = null
        var currentPos: Pair<Int, Int>? = null
        var error: Boolean
        val circles = ArrayList<Circle>()
        this.draggableCloseable(

            onMouseDrag {
                newPosition = Pair(
                    (this.globalMousePos.x - offsetX).toInt() / 64,
                    (this.globalMousePos.y - offsetY).toInt() / 64,
                )
            }, autoMove = false
        ) { info ->
            if ((whiteTurn && this.isWhite) || (!whiteTurn && !this.isWhite)) {
                info.view.x = info.viewNextXY.x
                info.view.y = info.viewNextXY.y
            } else {
                return@draggableCloseable
            }
            error = false
            // Dragging start
            if (info.start) {
                // init vars
                currentPos = Pair(this.cx, this.cy)
                println(this.zIndex)
                this.zIndex = 1.0
                this.scale(1.2, 1.2)
                castleAttempt = false

                // Show available moves
                for (x in 0..7) {
                    for (y in 0..7) {
                        if (simulateMove(Pair(cx, cy), Pair(x, y), this)) {
                            //println("the move from $cx, $cy -> $x, $y is possible")
                            val cell = findCell(x, y)
                            var color = Colors["#3b3b3b81"]
                            var multiplier = 1.0
                            if (findPiece(x, y) != null) {
                                color = Colors["#ff000081"]
                                multiplier = 1.5
                            }
                            val circle = Circle(10 * multiplier, fill = color)
                            circle.addFilter(BlurFilter(multiplier * 1))

                            circle.addTo(this.parent!!)
                            circle.pos = cell!!.pos
                            circle.centerOn(cell.cell)
                            circles.add(circle)
                        }
                    }
                }
            }
            // Dragging end

            if (info.end) {
                this.zIndex = 0.0
                this.scale(1.0, 1.0)
                // Check if newPosition is within the game board
                if (newPosition!!.first !in 0..<8 || newPosition!!.second < 0 || newPosition!!.second >= 8) {
                    error = true
                }
                val oldPos = currentPos
                println("currentPos $currentPos , new Pos $newPosition")
                val pieceOnNewPos = findPiece(newPosition!!.first, newPosition!!.second)
                if (pieceOnNewPos?.color == color) error = true
                // Perform the move if no error
                if (!error) {
                    println("currentPos $currentPos , new Pos $newPosition, whiteTurn $whiteTurn")

                    inCheck(pieces)
                    if (!whiteTurn && (blackKingInCheck || whiteKingInCheck)) {
                        println("in check")
                        if (doMove(this, currentPos!!, newPosition!!)) {
                            whiteTurn = !whiteTurn
                            pieceOnNewPos?.let { removePiece(it) }

                        }

                    } else if (moveChecker(
                            currentPos!!,
                            newPosition!!,
                        ) && !blackKingInCheck && !whiteKingInCheck
                    ) {

                        // If rook or king move outside of castling, deny castling
                        if (!castleAttempt){
                            when (this.kind) {
                                PieceKind.WhiteRook, PieceKind.WhiteKing -> whiteCastlingLegal = false
                                PieceKind.BlackRook, PieceKind.BlackKing -> blackCastlingLegal = false
                                else -> {}
                            }
                        }

                        // Castling
                        if (whiteCastlingLegal && isWhite && currentPos!!.first == 4 && currentPos!!.second == 7 && castleAttempt) {
                            when {
                                newPosition!!.first == 6 && newPosition!!.second == 7 -> {
                                    val rook = findPiece(7, 7)
                                    movePiece(rook!!, 5, 7)
                                    movePiece(this, 6, 7)

                                    whiteTurn = !whiteTurn
                                    whiteCastlingLegal = false

                                }

                                newPosition!!.first == 2 && newPosition!!.second == 7 -> {
                                    val rook = findPiece(0, 7)
                                    movePiece(rook!!, 3, 7)
                                    movePiece(this, 2, 7)

                                    whiteTurn = !whiteTurn
                                    whiteCastlingLegal = false
                                }
                            }
                        }
                        else if (blackCastlingLegal && !isWhite && currentPos!!.first == 4 && currentPos!!.second == 0 && castleAttempt) {
                            when {
                                newPosition!!.first == 6 && newPosition!!.second == 0 -> {
                                    val rook = findPiece(7, 0)
                                    movePiece(rook!!, 5, 0)
                                    movePiece(this, 6, 0)

                                    blackCastlingLegal = false
                                    whiteTurn = !whiteTurn
                                }

                                newPosition!!.first == 2 && newPosition!!.second == 0 -> {
                                    val rook = findPiece(0, 0)
                                    movePiece(rook!!, 3, 0)
                                    movePiece(this, 2, 0)
                                    whiteTurn = !whiteTurn
                                    blackCastlingLegal = false
                                }
                            }
                        }

                        else if (doMove(this, currentPos!!, newPosition!!)) {
                            whiteTurn = !whiteTurn
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
                println()
                println()

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
        } else if (abs(newPos.second - oldPos.second) == 1 && abs(newPos.first - oldPos.first) == 1) {
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
        println("whiteCastlingLegal: $whiteCastlingLegal, isWhite = $isWhite,  ")
        if (whiteCastlingLegal && isWhite && oldPos.first == 4 && oldPos.second == 7) {
            when {
                newPos.first == 6 && newPos.second == 7 -> {
                    // If something is in the way of the castling return false
                    if (findPiece(6, 7) != null || findPiece(5, 7) != null) return false
                    castleAttempt = true
                    println("attempt true")
                    return true
                }

                newPos.first == 2 && newPos.second == 7 -> {

                    if (findPiece(1, 7) != null || findPiece(2, 7) != null) return false

                    castleAttempt = true
                    return true
                }
            }
        }
        if (blackCastlingLegal && !isWhite && oldPos.first == 4 && oldPos.second == 0) {
            when {
                newPos.first == 6 && newPos.second == 0 -> {
                    if (findPiece(6, 0) != null || findPiece(5, 0) != null) return false

                    castleAttempt = true
                    return true
                }

                newPos.first == 2 && newPos.second == 0 -> {
                    if (findPiece(1, 0) != null || findPiece(2, 0) != null) return false
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


}

/** Simulates a move for showing available moves.*/
fun simulateMove(
    oldPos: Pair<Int, Int>,
    newPos: Pair<Int, Int>, piece: Piece
): Boolean {
    if (!piece.moveChecker(Pair(oldPos.first, oldPos.second), Pair(newPos.first, newPos.second))) return false
    inCheck(pieces)
    val pieceOnNewPos = findPiece(newPos.first, newPos.second)
    if (piece.color == pieceOnNewPos?.color) return false
    //println("Simulated move: ${piece.cx}, ${piece.cy}, inCheck: ${inCheck(pieces)} , pieceonnewpos $pieceOnNewPos")
    if (whiteTurn && piece.color == Colors.BLACK) return false
    if (!whiteTurn && piece.color == Colors.WHITE) return false
    movePiece(piece, newPos.first, newPos.second)
    pieceOnNewPos?.disabled = true
    inCheck(pieces)
    if ((piece.color == Colors.BLACK && blackKingInCheck) || (piece.color == Colors.WHITE && whiteKingInCheck)) {
        movePiece(piece, oldPos.first, oldPos.second)
        println("move is not possible")
        return false
    }
    inCheck(pieces)
    //println("Simulated move: ${piece.cx}, ${piece.cy}, stillInCheck: ${inCheck(pieces)}")
    movePiece(piece, oldPos.first, oldPos.second)
    pieceOnNewPos?.disabled = false
    return true
}


