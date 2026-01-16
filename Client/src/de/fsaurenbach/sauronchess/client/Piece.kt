package de.fsaurenbach.sauronchess.client

import de.fsaurenbach.sauronchess.client.GameState.activeCell
import de.fsaurenbach.sauronchess.client.GameState.whiteTurn
import korlibs.image.color.*
import korlibs.korge.input.*
import korlibs.korge.view.*
import korlibs.korge.view.align.*
import kotlin.math.*


enum class PieceKind {
    WhitePawn, BlackPawn, WhiteRook, BlackRook, WhiteKnight, BlackKnight, WhiteBishop, BlackBishop, WhiteQueen, BlackQueen, WhiteKing, BlackKing,
}


fun Container.piece(
    kind: PieceKind, color: RGBA, positionInt: Int, disabled: Boolean = false, isWhite: Boolean
): Piece = Piece(kind, color, positionInt, disabled, isWhite).addTo(this)


class Piece(
    var kind: PieceKind,
    val color: RGBA,
    var positionInt: Int,
    var disabled: Boolean = false,
    val isWhite: Boolean
) : Container() {

    /*var currentPos = Pair(cx, cy)
    val currentX get() = currentPos.first
    val currentY get() = currentPos.second*/
    val id: Int = positionInt
    private var newPosInt: Int = positionInt

    lateinit var pImage: Image
    private var enPassantLegal = false
    var invalid = false
    var isOnLeftEdge = false
    var isOnRightEdge = false

    init {
        reloadImages()
        GameState.pieces.add(this)
//        println("I am piece: $kind, at pos: $positionInt, myPos: $pos")

        draggableCloseable(
            onMouseDrag {
                val newPos = Pair(
                    (((globalMousePos.x - DisplayConfig.offsetX).toInt() / DisplayConfig.cellWidth.toInt()) - 7).absoluteValue,
                    (((globalMousePos.y - DisplayConfig.offsetY).toInt() / DisplayConfig.cellHeight.toInt())),
                )
                // Check if the pos is inside the board
                if ((newPos.first !in 0..<8 || newPos.second !in 0..<8)) {
                    invalid = true
                }
                if (newPos.first == 7) isOnLeftEdge = true else if (newPos.first == 0) isOnRightEdge = true


                newPosInt = 63 - (newPos.second * 8 + newPos.first) // That calculation was a pain :(
//                println("newPosX: ${newPos.first} newPosY: ${newPos.second}, calculated: $newPosInt")

                for (whiteCircle in GameState.whiteCircles) whiteCircle.markGrey()
                for (circle in GameState.circles) {
                    if (circle.positionInt == newPosInt) {
                        circle.markWhite()
                        GameState.whiteCircles.add(circle)
                    }
                }
            }, autoMove = false
        ) { info ->
            if (((GameState.whiteTurn && isWhite) || (!GameState.whiteTurn && !isWhite)) && !GameState.promotionActive) {
                if (GameState.onlinePlay) {
                    if (GameState.userIsWhite != isWhite) return@draggableCloseable
                }
                x = info.viewNextX
                y = info.viewNextY
            } else return@draggableCloseable
            // Dragging start
            if (info.start) {
                // init vars
                zIndex = 3.0
                scale(1.2, 1.2)
                GameState.castleAttempt = false


                GameState.circles.forEach { it.removeFromParent() }
                GameState.circles.clear()
                // Show available moves
                if (UserSettings.showAvailableMoves) {
                    for (x in 0..63) {
                        if (simulateMove(positionInt, x, showAvailableMovesCheck = true)) {
                            findCell(x).also {
                                parent!!.moveIndicator(x).apply {
                                    if (findPiece(x) != null) markRed() else markGrey()
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
                clickListener(newPosInt)
                println(boardState)
            }
        }
    }

    fun clickListener(newPosArgument: Int) {

        newPosInt = newPosArgument
        //newPos = newPosArg
        //     println("oldXY: $cxy, newPos: $newPos")

        // TODO: Handle that in click listener as well!
//        if (newX !in 0..<8 || newY !in 0..<8) error = true


        if (positionInt != newPosInt) {
            val pieceOnNewPos = findPiece(newPosInt)
            if (pieceOnNewPos?.color == color) invalid = true
            val currentSave = positionInt
            // Perform the move if no error

            println("currentPos: $positionInt, newPos: $newPosInt, error: $invalid, pieceOnNewPos: $pieceOnNewPos")

            if (!invalid) {

                val mc = MC(positionInt, newPosInt, boardState)
                if (mc.moveChecker()) {
                    if (simulateMove(oldPos = positionInt, newPos = newPosInt)) {
                        movePiece(this, newPosInt)

                        if (GameState.castleAttempt) {
                            when (newPosInt) {
                                2 -> {
                                    movePiece(findPiece(0)!!, 3)
                                }

                                6 -> {
                                    movePiece(findPiece(7)!!, 5)
                                }

                                58 -> {
                                    movePiece(findPiece(56)!!, 59)
                                }

                                62 -> {
                                    movePiece(findPiece(63)!!, 61)
                                }
                            }
                        }

                        pieceOnNewPos?.let {
                            removePieceOnBoard(it.id, boardState)
                            removePiece(it)
                        }

                        whiteTurn = !whiteTurn
                        inCheck(boardState)
                    } else invalid = true
                }
                // Case move is not valid, reset the piece to its orig position
                else {
                    invalid = true
                }

            }
            // Case error?
            if (invalid) {
                positionInt = currentSave

                movePiece(this, positionInt)
                activeCell?.colorCell(); activeCell = null

            }

            GameState.enPassantVictim = null
            GameState.circles.forEach { it.removeFromParent() }
            GameState.circles.clear()
            println()
            println()
            invalid = false
        }
        // No dragging happened (== click)
        else {
//            activeCell = findCell(currentX, currentY)!!.apply { markActive() }
            movePiece(this, positionInt)
            // TODO: These have to be removed once click to move is reimplemented!
            GameState.circles.forEach { it.removeFromParent() }
            GameState.circles.clear()
        }
    }


    /*





private fun promoteTo(newPieceKind: PieceKind) {
    println("Promoting to $newPieceKind")
    kind = newPieceKind
    reloadImages()
}
*/
    private fun reloadImages() {
        if (::pImage.isInitialized) {
            pImage.removeFromParent()
        }

        pImage = image(
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


    /*fun doMove(newPosOverride: Int = newPosInt, receiver: Boolean = false): Boolean {
        println("do move: $positionInt -> $newPosInt")
        newPosInt = newPosOverride
        println("${GameState.whiteTurn}, me: ${color == Colors.BLACK}")

        if ((GameState.whiteTurn && color == Colors.BLACK) || (!GameState.whiteTurn && color == Colors.WHITE)) return false
        println("fine here")
        val oldPosition = positionInt


//            inCheck(GameState.pieces)
        val pieceOnNewPos = findPiece(newPosInt)

        // Sonderregeln
        *//*if ((kind == PieceKind.WhitePawn && newY == 0) || (kind == PieceKind.BlackPawn && newY == 7)) {

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

        GameState.enPassantVictim?.removeFromParent()

        if (GameState.whiteCastlingLegal && isWhite && currentX == 4 && currentY == 7 && GameState.castleAttempt) {
            when {
                newX == 6 && newY == 7 -> {
                    val rook = findPiece(7, 7)
                    movePiece(rook!!, 5, 7)
                    movePiece(this, newX, newY)
                    GameState.whiteCastlingLegal = false

                }

                newX == 2 && newY == 7 -> {
                    val rook = findPiece(0, 7)
                    movePiece(rook!!, 3, 7)
                    movePiece(this, newX, newY)

                    GameState.whiteCastlingLegal = false
                }
            }
        } else if (GameState.blackCastlingLegal && !isWhite && currentX == 4 && currentY == 0 && GameState.castleAttempt) {
            when {
                newX == 6 && newY == 0 -> {
                    val rook = findPiece(7, 0)
                    movePiece(rook!!, 5, 0)
                    movePiece(this, newX, newY)

                    GameState.blackCastlingLegal = false
                }

                newX == 2 && newY == 0 -> {
                    val rook = findPiece(0, 0)
                    movePiece(rook!!, 3, 0)
                    movePiece(this, newX, newY)
                    GameState.blackCastlingLegal = false
                }
            }

        }*//*

        movePiece(this, newPosInt)
        pieceOnNewPos?.disabled = true
//            inCheck(GameState.pieces)
        if ((color == Colors.BLACK && GameState.blackKingInCheck) || (color == Colors.WHITE && GameState.whiteKingInCheck)) {
            movePiece(this, newPosInt)
            println("King will (still) be in check after this move!")
            return false
        }
//            inCheck(GameState.pieces)
        println("Doing move: $oldPosition ---> $newPosInt, (still) inCheck: ") // ${inCheck(GameState.pieces)}

        *//*if (!receiver && GameState.onlinePlay) {
            val map = mutableMapOf(
                "id" to clientID,
                "cx" to oldX.toString(),
                "cy" to oldY.toString(),
                "newX" to newX.toString(),
                "newY" to newY.toString()
            )
            if (GameState.castleAttempt) map["castling"] = "true"
            map.putAll(uniqueIdentifier!!)

            println("SENDING :${map.toJson()}")
            GameState.sceneContainer.launch { wsClient!!.send(map.toJson()) }
        }*//*


        *//*if (GameState.firstMove) {
            GameState.chessClock!!.blackTimer.toggle()
            GameState.firstMove = false
        } else {
            GameState.chessClock!!.whiteTimer.toggle()
            GameState.chessClock!!.blackTimer.toggle()
        }*//*


        positionInt = newPosInt // TODO: Check if this is useless

        GameState.castleAttempt = false
        pieceOnNewPos?.disabled = false
        GameState.whiteTurn = !GameState.whiteTurn
        pieceOnNewPos?.let { removePiece(it) }

        if (!GameState.castleAttempt) {
            when (kind) {
                PieceKind.WhiteRook, PieceKind.WhiteKing -> GameState.whiteCastlingLegal = false
                PieceKind.BlackRook, PieceKind.BlackKing -> GameState.blackCastlingLegal = false
                else -> {}
            }
        }

//            inCheck(GameState.pieces)

        checkGameLegal()

        return true

    }*/


}


fun checkGameLegal() {

    // TODO
    if (1 == 1) return/*
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
                if (simulateMove(piece.currentPos, x to y, piece)) return
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
                whiteBishopOnWhite = findCell(piece.currentX, piece.currentY)?.isWhite
            } else if (piece.kind == PieceKind.BlackKnight) blackLegal = true
            else if (piece.kind == PieceKind.BlackBishop) {
                blackBishopOnWhite = findCell(piece.currentX, piece.currentY)?.isWhite
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
*/
}
