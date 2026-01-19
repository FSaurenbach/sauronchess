package de.fsrb.sauronchess.client

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
    kind: PieceKind, color: RGBA, positionInt: Int, isWhite: Boolean
): Piece = Piece(kind, color, positionInt, isWhite).addTo(this)


class Piece(
    var kind: PieceKind, val color: RGBA, var positionInt: Int, val isWhite: Boolean
) : Container() {

    val id: Int = positionInt
    private var newPosInt: Int = positionInt

    lateinit var pImage: Image
    private var enPassantLegal = false
    private var invalid = false
    var isOnLeftEdge = false
    var isOnRightEdge = false

    init {
        reloadImages()
        Game.pieces.add(this)
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
                isOnLeftEdge = newPos.first == 7
                isOnRightEdge = newPos.first == 0


                newPosInt = 63 - (newPos.second * 8 + newPos.first) // That calculation was a pain :(
//                println("newPosX: ${newPos.first} newPosY: ${newPos.second}, calculated: $newPosInt")

                for (whiteCircle in Game.whiteCircles) whiteCircle.markGrey()
                for (circle in Game.circles) {
                    if (circle.positionInt == newPosInt) {
                        circle.markWhite()
                        Game.whiteCircles.add(circle)
                    }
                }
            }, autoMove = false
        ) { info ->
            if (((Game.whiteTurn && isWhite) || (!Game.whiteTurn && !isWhite)) && !Game.promotionActive) {
                if (Game.onlinePlay) {
                    if (Game.userIsWhite != isWhite) return@draggableCloseable
                }
                x = info.viewNextX
                y = info.viewNextY
            } else return@draggableCloseable
            // Dragging start
            if (info.start) {
                // init vars
                zIndex = 3.0
                scale(1.2, 1.2)
                Game.castleAttempt = false


                Game.circles.forEach { it.removeFromParent() }
                Game.circles.clear()
                // Show available moves
                if (UserSettings.showAvailableMoves) {
                    for (x in 0..63) {
                        if (simulateMove(positionInt, x, showAvailableMovesCheck = true)) {
                            findCell(x).also {
                                parent!!.moveIndicator(x).apply {
                                    if (findPiece(x) != null) markRed() else markGrey()
                                    addTo(Game.circles)
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
                clickListener(newPosInt, false)
                println(boardState)
            }
        }
    }

    fun clickListener(newPosArgument: Int, serverRequestedMove: Boolean) {

        newPosInt = newPosArgument

        if (positionInt != newPosInt) {
            val pieceOnNewPos = findPiece(newPosInt)
            if (pieceOnNewPos?.color == color) invalid = true
            val currentSave = positionInt
            println("currentPos: $positionInt, newPos: $newPosInt, error: $invalid, pieceOnNewPos: $pieceOnNewPos, invalid: $invalid")

            if (!invalid) {

                val mc = MC(positionInt, newPosInt, boardState)
                if (mc.moveChecker()) {
                    if (simulateMove(oldPos = positionInt, newPos = newPosInt)) {
                        val oldPosInt = positionInt
                        movePiece(this, newPosInt)

                        // Pawn promoting
                        if ((kind == PieceKind.WhitePawn && newPosInt in 56..63) || (kind == PieceKind.BlackPawn && newPosInt in 0..7)) {

                            Game.promotionActive = true

                            if (UserSettings.autoPromote) {
                                promoteTo(if (isWhite) PieceKind.WhiteQueen else PieceKind.BlackQueen)
                                Game.promotionActive = false

                            } else {
                                val promotionDialogue = PromotionDialogue(isWhite).addTo(Game.sceneContainer)
                                Game.sceneContainer.launch {
                                    promoteTo(promotionDialogue.getChoice())
                                    Game.promotionActive = false
                                    promotionDialogue.removeFromParent()

                                }
                            }

                        }

                        // Castling
                        if (Game.castleAttempt) {
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
                        if (!Game.castleAttempt) {
                            when (kind) {
                                PieceKind.WhiteRook, PieceKind.WhiteKing -> Game.whiteCastlingLegal = false
                                PieceKind.BlackRook, PieceKind.BlackKing -> Game.blackCastlingLegal = false
                                else -> {}
                            }
                        }


                        // Shouldn't this be handled in main or anywhere else than piece?
                        if (Game.firstMove) {
                            Game.chessClock!!.blackTimer.toggle()
                            Game.firstMove = false
                        } else {
                            Game.chessClock!!.whiteTimer.toggle()
                            Game.chessClock!!.blackTimer.toggle()
                        }

                        if (!serverRequestedMove && Game.onlinePlay) {
                            val map = mutableMapOf(
                                "oldPosInt" to oldPosInt.toString(),
                                "newPosInt" to positionInt.toString(),
                            )
                            if (Game.castleAttempt) map["castling"] = "true"
                            map.putAll(uniqueIdentifier!!)

                            println("SENDING :${map.toJson()}")
                            Game.sceneContainer.launch { wsClient!!.send(map.toJson()) }
                        }
                        pieceOnNewPos?.let {
                            removePiece(it)
                        }
                        Game.whiteTurn = !Game.whiteTurn
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
                Game.activeCell?.colorCell()
                Game.activeCell = null

            }

            Game.enPassantVictim = null
            Game.circles.forEach { it.removeFromParent() }
            Game.circles.clear()
            println()
            println()
            invalid = false
        }
        // No dragging happened (== click)
        else {
            Game.activeCell = findCell(positionInt)!!.apply { markActive() }
            movePiece(this, positionInt)
        }
    }

    private fun removePiece(piece: Piece) {
        boardState.pieces.remove(boardState.pieces.find { it.id == piece.id })
        Game.pieces.remove(piece)
        piece.removeFromParent()
    }


    private fun promoteTo(newPieceKind: PieceKind) {
        println("Promoting to $newPieceKind")
        kind = newPieceKind
        reloadImages()
        boardState.pieces.find { it.id == id }!!.type = newPieceKind
    }

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

}


/*fun checkGameLegal() {
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
}*/
