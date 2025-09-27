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
    WhitePawn, BlackPawn, WhiteRook, BlackRook, WhiteKnight, BlackKnight, 
    WhiteBishop, BlackBishop, WhiteQueen, BlackQueen, WhiteKing, BlackKing,
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

    lateinit var pImage: Image

    init {
        loadImages()
        pieces.add(this)
        movePiece(this, cx, cy)
        setupDragAndDrop()
    }

    private fun setupDragAndDrop() {
        var newPosition: Pair<Int, Int>? = null
        var currentPos: Pair<Int, Int>? = null
        var error: Boolean
        val circles = ArrayList<Circle>()
        
        this.draggableCloseable(
            onMouseDrag {
                newPosition = Pair(
                    (this.globalMousePos.x - offsetX).toInt() / CELL_SIZE,
                    (this.globalMousePos.y - offsetY).toInt() / CELL_SIZE,
                )
            }, autoMove = false
        ) { info ->
            if (!isPlayerTurn()) return@draggableCloseable
            
            info.view.x = info.viewNextXY.x
            info.view.y = info.viewNextXY.y
            error = false

            if (info.start) {
                handleDragStart(currentPos, circles)
                currentPos = Pair(this.cx, this.cy)
            }

            if (info.end) {
                handleDragEnd(newPosition, currentPos, error, circles)
                resetDragVariables(newPosition, currentPos, circles)
            }
        }
    }

    private fun isPlayerTurn(): Boolean = (whiteTurn && isWhite) || (!whiteTurn && !isWhite)

    private fun handleDragStart(currentPos: Pair<Int, Int>?, circles: ArrayList<Circle>) {
        this.zIndex = 1.0
        this.scale(1.2, 1.2)
        castleAttempt = false
        showAvailableMoves(circles)
    }

    private fun showAvailableMoves(circles: ArrayList<Circle>) {
        for (x in 0..7) {
            for (y in 0..7) {
                if (simulateMove(Pair(cx, cy), Pair(x, y), this)) {
                    val cell = findCell(x, y)
                    val isCapture = findPiece(x, y) != null
                    val color = if (isCapture) Colors["#ff000081"] else Colors["#3b3b3b81"]
                    val multiplier = if (isCapture) 1.5 else 1.0
                    
                    val circle = Circle(10 * multiplier, fill = color)
                    circle.addFilter(BlurFilter(multiplier))
                    circle.addTo(this.parent!!)
                    circle.pos = cell!!.pos
                    circle.centerOn(cell.cell)
                    circles.add(circle)
                }
            }
        }
    }
    private fun handleDragEnd(
        newPosition: Pair<Int, Int>?, 
        currentPos: Pair<Int, Int>?, 
        error: Boolean, 
        circles: ArrayList<Circle>
    ) {
        this.zIndex = 0.0
        this.scale(1.0, 1.0)
        
        var moveError = error
        if (newPosition != null && !isValidBoardPosition(newPosition)) {
            moveError = true
        }
        
        val pieceOnNewPos = newPosition?.let { findPiece(it.first, it.second) }
        if (pieceOnNewPos?.color == color) moveError = true
        
        if (!moveError && newPosition != null && currentPos != null) {
            executeMoveIfValid(currentPos, newPosition, pieceOnNewPos)
        } else {
            currentPos?.let { movePiece(this, it.first, it.second) }
        }
        
        checkForGameEnd()
    }

    private fun isValidBoardPosition(pos: Pair<Int, Int>): Boolean {
        return pos.first in 0..<8 && pos.second in 0..<8
    }

    private fun executeMoveIfValid(
        currentPos: Pair<Int, Int>, 
        newPosition: Pair<Int, Int>, 
        pieceOnNewPos: Piece?
    ) {
        inCheck(pieces)
        val isInCheck = (!whiteTurn && (blackKingInCheck || whiteKingInCheck))
        
        if (isInCheck) {
            if (doMove(this, currentPos, newPosition)) {
                completeMoveAndSwitchTurn(pieceOnNewPos)
            }
        } else if (moveChecker(currentPos, newPosition) && !blackKingInCheck && !whiteKingInCheck) {
            handlePawnPromotion(newPosition)
            updateCastlingRights()
            
            if (castleAttempt) {
                executeCastling(currentPos, newPosition)
            } else if (doMove(this, currentPos, newPosition)) {
                completeMoveAndSwitchTurn(pieceOnNewPos)
            }
        } else {
            movePiece(this, currentPos.first, currentPos.second)
        }
    }

    private fun completeMoveAndSwitchTurn(pieceOnNewPos: Piece?) {
        whiteTurn = !whiteTurn
        pieceOnNewPos?.let { removePiece(it) }
    }

    private fun handlePawnPromotion(newPosition: Pair<Int, Int>) {
        when {
            kind == PieceKind.WhitePawn && newPosition.second == 0 -> 
                promoteTo(PieceKind.WhiteQueen)
            kind == PieceKind.BlackPawn && newPosition.second == 7 -> 
                promoteTo(PieceKind.BlackQueen)
        }
    }

    private fun updateCastlingRights() {
        if (!castleAttempt) {
            when (kind) {
                PieceKind.WhiteRook, PieceKind.WhiteKing -> whiteCastlingLegal = false
                PieceKind.BlackRook, PieceKind.BlackKing -> blackCastlingLegal = false
                else -> {}
            }
        }
    }

    private fun executeCastling(currentPos: Pair<Int, Int>, newPosition: Pair<Int, Int>) {
        when {
            // White kingside castling
            whiteCastlingLegal && isWhite && currentPos == Pair(4, 7) && newPosition == Pair(6, 7) -> {
                val rook = findPiece(7, 7)
                movePiece(rook!!, 5, 7)
                movePiece(this, 6, 7)
                whiteCastlingLegal = false
                whiteTurn = !whiteTurn
            }
            // White queenside castling
            whiteCastlingLegal && isWhite && currentPos == Pair(4, 7) && newPosition == Pair(2, 7) -> {
                val rook = findPiece(0, 7)
                movePiece(rook!!, 3, 7)
                movePiece(this, 2, 7)
                whiteCastlingLegal = false
                whiteTurn = !whiteTurn
            }
            // Black kingside castling
            blackCastlingLegal && !isWhite && currentPos == Pair(4, 0) && newPosition == Pair(6, 0) -> {
                val rook = findPiece(7, 0)
                movePiece(rook!!, 5, 0)
                movePiece(this, 6, 0)
                blackCastlingLegal = false
                whiteTurn = !whiteTurn
            }
            // Black queenside castling
            blackCastlingLegal && !isWhite && currentPos == Pair(4, 0) && newPosition == Pair(2, 0) -> {
                val rook = findPiece(0, 0)
                movePiece(rook!!, 3, 0)
                movePiece(this, 2, 0)
                blackCastlingLegal = false
                whiteTurn = !whiteTurn
            }
        }
    }

    private fun resetDragVariables(
        newPosition: Pair<Int, Int>?, 
        currentPos: Pair<Int, Int>?, 
        circles: ArrayList<Circle>
    ) {
        for (circle in circles) {
            circle.removeFromParent()
        }
        circles.clear()
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
        } else if ((abs(newPos.second - oldPos.second) == 1 && abs(newPos.first - oldPos.first) == 1) ) {
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
            return true
        }
        // Castling
        if (whiteCastlingLegal && isWhite && oldPos.first == 4 && oldPos.second == 7) {
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
        if (blackCastlingLegal && !isWhite && oldPos.first == 4 && oldPos.second == 0) {
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
        loadImages()
    }

    private fun loadImages() {
        if (::pImage.isInitialized) {
            pImage.removeFromParent()
        }
        
        val bitmap = when (kind) {
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
        }
        
        this.pImage = image(bitmap)
        pImage.size(Size(CELL_SIZE, CELL_SIZE))
    }


}

/**
 * Check if the current player has any legal moves available.
 * @return true if the player has moves, false if checkmate/stalemate
 */
fun checkForGameEnd(): Boolean {
    val whitePieces = pieces.filter { it.color == Colors.WHITE }
    val blackPieces = pieces.filter { it.color == Colors.BLACK }
    
    for (piece in if (whiteTurn) whitePieces else blackPieces) {
        for (x in 0..7) {
            for (y in 0..7) {
                if (simulateMove(Pair(piece.cx, piece.cy), Pair(x, y), piece)) {
                    return true
                }
            }
        }
    }

    // Game ended - no moves available
    return false
}
