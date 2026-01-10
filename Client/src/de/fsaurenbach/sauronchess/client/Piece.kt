package de.fsaurenbach.sauronchess.client

import de.fsaurenbach.sauronchess.client.GameState.activeCell
import korlibs.image.color.*
import korlibs.io.serialization.json.*
import korlibs.korge.input.*
import korlibs.korge.view.*
import korlibs.korge.view.align.*
import kotlinx.coroutines.*
import kotlin.math.*


enum class PieceKind {
    WhitePawn, BlackPawn, WhiteRook, BlackRook, WhiteKnight, BlackKnight, WhiteBishop, BlackBishop, WhiteQueen, BlackQueen, WhiteKing, BlackKing,
}


fun Container.piece(
    kind: PieceKind, color: RGBA, cx: Int, cy: Int, disabled: Boolean = false, isWhite: Boolean
): Piece = Piece(kind, color, cx, cy, disabled, isWhite).addTo(this)


class Piece(
    var kind: PieceKind, val color: RGBA, var cx: Int, var cy: Int, var disabled: Boolean = false, val isWhite: Boolean
) : Container() {
    val cxy get() = Pair(cx, cy)
    lateinit var pImage: Image
    var currentPos: Pair<Int, Int>
    private lateinit var newPos: Pair<Int, Int>
    private val currentX get() = currentPos.first
    private val currentY get() = currentPos.second
    private val newX get() = newPos.first
    private val newY get() = newPos.second
    private var enPassantLegal = false

    init {
        reloadImages()

        GameState.pieces.add(this)

        movePiece(this, cx, cy)
        currentPos = Pair(cx, cy)
        var error: Boolean

//        onUp {
//
//            this.zIndex = 3.0
//            this.scale(1.2, 1.2)
//            GameState.castleAttempt = false
//
//            activeCell = findCell(cx, cy).apply { markActive() }
//
//
//        }

        draggableCloseable(
            onMouseDrag {
                newPos = Pair(
                    (this.globalMousePos.x - DisplayConfig.offsetX).toInt() / DisplayConfig.cellWidth.toInt(),
                    (this.globalMousePos.y - DisplayConfig.offsetY).toInt() / DisplayConfig.cellHeight.toInt(),
                )
                for (whiteCircle in GameState.whiteCircles) whiteCircle.markGrey()
                for (circle in GameState.circles) {
                    if (circle.cx == newX && circle.cy == newY) {
                        circle.markWhite()
                        GameState.whiteCircles.add(circle)
                    }

                }
            }, autoMove = false
        ) { info ->
            if (((GameState.whiteTurn && this.isWhite) || (!GameState.whiteTurn && !this.isWhite)) && !GameState.promotionActive) {
                if (GameState.onlinePlay) {
                    if (GameState.userIsWhite != isWhite) return@draggableCloseable
                }
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
                                    addTo(GameState.circles)
                                    centerOn(it!!)
                                }

                            }
                        }
                    }
                }
            }
            if (info.end) {
                zIndex = 0.0
                scale(1.0, 1.0)
                clickListener(newPos, false)
            }
        }
    }

    fun clickListener(newPosArg: Pair<Int, Int>, wasClicked: Boolean) {

        var error = false
        newPos = newPosArg
        // Check if newPosition is within the game board
        //     println("oldXY: $cxy, newPos: $newPos")
        if (newX !in 0..<8 || newY !in 0..<8) error = true


        if (wasClicked) {

            println("gonna color activeCell: $activeCell")
            activeCell = findCell(cx, cy)!!.apply { markActive() }
        }
        println("ActiveCell:$activeCell")

        if (cxy != newPos) {
            val pieceOnNewPos = findPiece(newX, newY)
            if (pieceOnNewPos?.color == color) error = true
            val newSave = newPos
            val currentSave = currentPos
            // Perform the move if no error

            println("oldPos: $currentPos, newPos: $newPos, error: $error, pieceOnNewPos: $pieceOnNewPos")

            if (!error) {
                inCheck(GameState.pieces)
                // Case a king is in check
                if (!GameState.whiteTurn && (GameState.blackKingInCheck || GameState.whiteKingInCheck)) {
                    println("in check     sent from line 116")
                    if (doMove()) {
                        pieceOnNewPos?.let { removePiece(it) }
                    } else {
                        currentPos = currentSave
                        movePiece(this, currentX, currentY)
                    }
                    inCheck(GameState.pieces)
                    checkGameLegal()

                }
                // Case move is valid and no king is in check
                else if (moveChecker(
                        newPos,
                    ) && !GameState.blackKingInCheck && !GameState.whiteKingInCheck
                ) {
                    newPos = newSave
                    if (doMove()) pieceOnNewPos?.let { removePiece(it) }

                }
                // Case move is not valid, reset the piece to its orig position
                else {
                    error = true
                }

            }
            // Case error?
            if (error) {
                currentPos = currentSave

                movePiece(this, currentX, currentY)
                activeCell?.colorCell(); activeCell = null

            }

            GameState.enPassantVictim = null
            GameState.circles.forEach { it.removeFromParent() }
            GameState.circles.clear()
            println()
            println()
        }
        // No dragging happened (== click)
        else {
            activeCell = findCell(cx, cy)!!.apply { markActive() }
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
        val isEnPassant = if (isWhite) {
            newY - currentY == -1 && abs(newX - currentX) == 1
        } else {
            newY - currentY == 1 && abs(currentX - newX) == 1
        }
        if (isPawnMoveForward || isInitialPawnMove) {
            enPassantLegal = isInitialPawnMove
            if (pieceOnNewPos == null) {
                return true
            }
        } else if ((abs(newY - currentY) == 1 && abs(newX - currentX) == 1)) {
            // Fix that pawns can take pieces behind themselves (check correct direction if taking a piece)
            if ((isWhite && newY > currentY) || (!isWhite && newY < currentY)) return false

            if (pieceOnNewPos != null && pieceOnNewPos.isWhite != isWhite) {
                return true
            }
        }

        val pawnToTake = findPiece(newX, currentY)

        if (isEnPassant && pawnToTake != null && pawnToTake.isWhite == !isWhite && pawnToTake.enPassantLegal) {
            GameState.enPassantVictim = pawnToTake
            return true
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
                PieceKind.WhitePawn -> Images.whitePawn!!
                PieceKind.WhiteRook -> Images.whiteRook!!
                PieceKind.WhiteKnight -> Images.whiteKnight!!
                PieceKind.WhiteBishop -> Images.whiteBishop!!
                PieceKind.WhiteQueen -> Images.whiteQueen!!
                PieceKind.WhiteKing -> Images.whiteKing!!
                PieceKind.BlackPawn -> Images.blackPawn!!
                PieceKind.BlackRook -> Images.blackRook!!
                PieceKind.BlackKnight -> Images.blackKnight!!
                PieceKind.BlackBishop -> Images.blackBishop!!
                PieceKind.BlackQueen -> Images.blackQueen!!
                PieceKind.BlackKing -> Images.blackKing!!
            },
        )

        pImage.scale = DisplayConfig.userScale
    }

    fun doMove(newX: Int = newPos.first, newY: Int = newPos.second, receiver: Boolean = false): Boolean {
        if ((GameState.whiteTurn && this.color == Colors.BLACK) || (!GameState.whiteTurn && this.color == Colors.WHITE)) return false
        val oldX = currentX
        val oldY = currentY
        this.newPos = Pair(newX, newY)

        inCheck(GameState.pieces)
        val pieceOnNewPos = findPiece(newX, newY)

        if ((kind == PieceKind.WhitePawn && newY == 0) || (kind == PieceKind.BlackPawn && newY == 7)) {

            GameState.promotionActive = true

            if (UserSettings.autoPromote) {
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

        GameState.enPassantVictim.let {
            it?.removeFromParent()
        }

        if (GameState.whiteCastlingLegal && isWhite && currentX == 4 && currentY == 7 && GameState.castleAttempt) {
            when {
                newX == 6 && newY == 7 -> {
                    val rook = findPiece(7, 7)
                    movePiece(rook!!, 5, 7)
                    movePiece(this, 6, 7)
                    GameState.whiteCastlingLegal = false

                }

                newX == 2 && newY == 7 -> {
                    val rook = findPiece(0, 7)
                    movePiece(rook!!, 3, 7)
                    movePiece(this, 2, 7)

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
                }

                newX == 2 && newY == 0 -> {
                    val rook = findPiece(0, 0)
                    movePiece(rook!!, 3, 0)
                    movePiece(this, 2, 0)
                    GameState.blackCastlingLegal = false
                }
            }

        }
        movePiece(this, newX, newY)
        pieceOnNewPos?.disabled = true
        inCheck(GameState.pieces)
        if ((this.color == Colors.BLACK && GameState.blackKingInCheck) || (this.color == Colors.WHITE && GameState.whiteKingInCheck)) {
            movePiece(this, currentX, currentY)
            println("King will (still) be in check after this move!")
            return false
        }
        inCheck(GameState.pieces)
        println("Doing move: $oldX, $oldY ---> ${this.cx}, ${this.cy}, (still) inCheck: ${inCheck(GameState.pieces)}")

        if (!receiver && GameState.onlinePlay) {
            val map = mutableMapOf(
                "id" to clientID,
                "cx" to oldX.toString(),
                "cy" to oldY.toString(),
                "newX" to cx.toString(),
                "newY" to cy.toString()
            )
            if (GameState.castleAttempt) map["castling"] = "true"
            map.putAll(uniqueIdentifier!!)
            println("cx: $oldX, cy: $oldY, newX, $cx, newY: $cy")

            println("SENDING :${map.toJson()}")
            GameState.sceneContainer.launch { wsClient!!.send(map.toJson()) }
        }
        if (GameState.firstMove) {
            GameState.chessClock!!.blackTimer.toggle()
            GameState.firstMove = false
        } else {
            GameState.chessClock!!.whiteTimer.toggle()
            GameState.chessClock!!.blackTimer.toggle()
        }

        this@Piece.cx = newX
        this@Piece.cy = newY
        currentPos = Pair(newX, newY)
        GameState.castleAttempt = false
        pieceOnNewPos?.disabled = false
        GameState.whiteTurn = !GameState.whiteTurn
        pieceOnNewPos?.let { removePiece(it) }

        if (!GameState.castleAttempt) {
            when (this.kind) {
                PieceKind.WhiteRook, PieceKind.WhiteKing -> GameState.whiteCastlingLegal = false
                PieceKind.BlackRook, PieceKind.BlackKing -> GameState.blackCastlingLegal = false
                else -> {}
            }
        }

        inCheck(GameState.pieces)

        checkGameLegal()

        return true

    }


}


fun checkGameLegal() {
    var whitePieces = GameState.pieces.filter { it.color == Colors.WHITE }
    var blackPieces = GameState.pieces.filter { it.color == Colors.BLACK }
    var draw = false
    var checkMate = false
    val insufficientMaterial: Boolean
    if ((GameState.whiteKingInCheck && GameState.whiteTurn) || (GameState.blackKingInCheck && !GameState.whiteTurn)) {
        println("someone is in check")
        for (piece in if (GameState.whiteTurn) whitePieces else blackPieces) {
            for (x in 0..7) {
                for (y in 0..7) {
                    if (simulateMove(piece.currentPos, Pair(x, y), piece)) {
                        println("there is still hope")
                        return
                    }

                }
            }
        }
        println("GAME IS LEGAL: false")
        checkMate = true
        GameState.sceneContainer.launch { sendGameEnd("checkmate") }

    }


    // advanced rules


    // Check for Draw
    for (piece in if (GameState.whiteTurn) whitePieces else blackPieces) {
        for (x in 0..7) {
            for (y in 0..7) {
                if (simulateMove(Pair(piece.cx, piece.cy), x to y, piece)) return
            }
        }
        draw = true
        GameState.sceneContainer.launch { sendGameEnd("draw") }
    }
    // Check for insufficient material rule (no pawns left at all is a hard req)
    if (GameState.pieces.none { it.kind == PieceKind.WhitePawn || it.kind == PieceKind.BlackPawn }) {
        whitePieces =
            GameState.pieces - GameState.pieces.filter { it.kind == PieceKind.WhiteKing || !it.isWhite }.toSet()
        blackPieces =
            GameState.pieces - GameState.pieces.filter { it.kind == PieceKind.BlackKing || it.isWhite }.toSet()

        if (whitePieces.count() > 1 && blackPieces.count() > 1) return
        var whiteLegal = false
        var blackLegal = false
        var whiteBishopOnWhite: Boolean? = null
        var blackBishopOnWhite: Boolean? = null
        for (piece in whitePieces + blackPieces) {
            if (piece.kind == PieceKind.WhiteKnight) whiteLegal = true
            else if (piece.kind == PieceKind.WhiteBishop) {
                whiteBishopOnWhite = findCell(piece.cx, piece.cy)?.isWhite
            } else if (piece.kind == PieceKind.BlackKnight) blackLegal = true
            else if (piece.kind == PieceKind.BlackBishop) {
                blackBishopOnWhite = findCell(piece.cx, piece.cy)?.isWhite
            }
        }
        if (whiteLegal || blackLegal) return
        if (whiteBishopOnWhite != null && blackBishopOnWhite != null && whiteBishopOnWhite == blackBishopOnWhite) return
        insufficientMaterial = true
        GameState.sceneContainer.launch { sendGameEnd("draw") }
    } else return

    println("No moves left for white / black!")
    if (GameState.whiteTurn) {
        if (GameState.whiteKingInCheck) println("White got checkmated") else println("White got stalemated")
    } else {
        if (GameState.blackKingInCheck) println("Black got checkmated") else println("Black got stalemated")
    }
    println("insuffmat: $insufficientMaterial, checkmate: $checkMate, draw: $draw")

}
