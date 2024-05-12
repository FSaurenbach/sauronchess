import korlibs.image.color.*
import korlibs.korge.render.*
import korlibs.korge.scene.*
import korlibs.korge.view.*
import korlibs.math.geom.*

enum class PieceKind {
    WhitePawn,
    BlackPawn,
    WhiteRook,
    BlackRook,
    WhiteKnight,
    BlackKnight,
    WhiteBishop,
    BlackBishop,
    WhiteQueen,
    BlackQueen,
    WhiteKing,
    BlackKing
}

class Piece(
    kind: PieceKind,
    private val color: RGBA,
    var cx: Int,
    var cy: Int,
    cont: SceneContainer,
) : View() {

    private var pieceKind: PieceKind = kind
    private lateinit var piece: Image

    init {
        if (color == Colors.WHITE) {
            // If the piece is white, set the piece image to the white pawn or rook or knight
            piece =
                Image(
                    when (kind) {
                        PieceKind.WhitePawn -> whitePawn!!
                        PieceKind.WhiteRook -> whiteRook!!
                        PieceKind.WhiteKnight -> whiteKnight!!
                        else -> throw Error("Invalid Piece !?")
                    })

            piece.size(Size(64, 64))
            piece.addTo(cont)
            objektBewegen(piece, cx, cy)
        } else {
            // If the piece is black, set the piece image to the black pawn or rook or knight
            if (color == Colors.BLACK) {
                piece =
                    Image(
                        when (kind) {
                            PieceKind.BlackPawn -> blackPawn!!
                            PieceKind.BlackRook -> blackRook!!
                            PieceKind.BlackKnight -> blackKnight!!
                            else -> throw Error("Invalid Piece !?")
                        })
                piece.size(Size(64, 64))
                piece.addTo(cont)
                objektBewegen(piece, cx, cy)
            }
        }
    }

    fun bw(newX: Int, newY: Int) {
        println("Figur bewegt nach: $newX, $newY")
        piece.pos = Point(newX * 64.0, newY * 64.0)
        piece.position(Point(newX * 64.0, newY * 64.0))
        println("figur.pos: ${piece.pos}")
    }

    /**
     * Moves the piece to a new position on the board.
     *
     * @param cx The new x-coordinate of the piece.
     * @param cy The new y-coordinate of the piece.
     */

    /**
     * Checks if the move of the piece is valid.
     *
     * @param oldPos The old position of the piece.
     * @param newPos The new position of the piece.
     * @param performMove Indicates whether to perform the move or just check its validity.
     * @return true if the move is valid, false otherwise.
     */
    fun moveChecker(oldPos: Pair<Int, Int>, newPos: Pair<Int, Int>): Boolean {
        val pieceOnNewPos = schachbrett!!.findPiece(newPos.first, newPos.second)
        if (whiteTurn) {
            return when (pieceKind) {
                PieceKind.WhitePawn -> moveWhitePawn(oldPos, newPos, pieceOnNewPos)
                PieceKind.WhiteRook -> moveRook(oldPos, newPos, pieceOnNewPos, true)
                PieceKind.WhiteKnight -> moveKnight(oldPos, newPos, pieceOnNewPos, true)
                else -> false
            }
        }
        if (!whiteTurn) {
            return when (pieceKind) {
                PieceKind.BlackPawn -> moveBlackPawn(oldPos, newPos, pieceOnNewPos)
                PieceKind.BlackRook -> moveRook(oldPos, newPos, pieceOnNewPos, false)
                PieceKind.BlackKnight -> moveKnight(oldPos, newPos, pieceOnNewPos, false)
                else -> false
            }
        }

        return false
    }

    private fun moveWhitePawn(
        oldPos: Pair<Int, Int>,
        newPos: Pair<Int, Int>,
        pieceOnNewPos: Piece?,
    ): Boolean {
        val isPawnMoveForward = newPos.second - oldPos.second == 1 && oldPos.first == newPos.first
        val isInitialPawnMove =
            oldPos.second == 1 && newPos.second == 3 && oldPos.first == newPos.first
        if (isPawnMoveForward || isInitialPawnMove) {
            if (pieceOnNewPos == null) {
                whiteTurn = false

                return true
            }
        } else if (oldPos.second - newPos.second == -1 &&
            ((newPos.first - oldPos.first == 1) || (newPos.first - oldPos.first == -1))) {
            if (pieceOnNewPos != null && pieceOnNewPos.color == Colors.BLACK) {
                removePiece(pieceOnNewPos)
                whiteTurn = false

                return true
            }
        }
        return false
    }

    private fun moveBlackPawn(
        oldPos: Pair<Int, Int>,
        newPos: Pair<Int, Int>,
        pieceOnNewPos: Piece?,
    ): Boolean {
        val isPawnMoveForward = newPos.second - oldPos.second == -1 && oldPos.first == newPos.first
        val isInitialPawnMove =
            oldPos.second == 6 && newPos.second == 4 && oldPos.first == newPos.first
        if (isPawnMoveForward || isInitialPawnMove) {
            if (pieceOnNewPos == null) {
                whiteTurn = true

                return true
            }
        } else if (newPos.second - oldPos.second == -1 &&
            ((newPos.first - oldPos.first == 1) || (newPos.first - oldPos.first == -1))) {
            if (pieceOnNewPos != null && pieceOnNewPos.color == Colors.WHITE) {

                removePiece(pieceOnNewPos)
                whiteTurn = true

                return true
            }
        }
        return false
    }

    private fun moveRook(
        oldPos: Pair<Int, Int>,
        newPos: Pair<Int, Int>,
        pieceOnNewPos: Piece?,
        isWhite: Boolean,
    ): Boolean {
        // Case moving up or down
        if (oldPos.first == newPos.first) {
            // going down
            if (newPos.second > oldPos.second) {
                val cellstocheck = newPos.second - oldPos.second - 1
                println("cellstocheck: $cellstocheck going down")
                for (i in 1..cellstocheck) {
                    val pp = schachbrett!!.findPiece(oldPos.first, oldPos.second + i)?.pos
                    if (pp != null) {
                        println("Found Piece blocking rooks path!")
                        return false
                    }
                }
                println("pieceOnNewPos: $pieceOnNewPos")
                if (pieceOnNewPos != null && pieceOnNewPos.color != color) {
                    println("pieceOnNewPos: $pieceOnNewPos")
                    removePiece(pieceOnNewPos)
                    whiteTurn = !isWhite
                    return true
                }
                // Case moving one down
                if (pieceOnNewPos == null && cellstocheck == 0) {
                    whiteTurn = !isWhite
                    return true
                }
                whiteTurn = !isWhite
                return true
            }
            if (newPos.second < oldPos.second) {
                val cellstocheck = oldPos.second - newPos.second - 1
                println("cellstocheck: $cellstocheck going up")
                for (i in 1..cellstocheck) {
                    val pp = schachbrett!!.findPiece(oldPos.first, oldPos.second - i)?.pos
                    if (pp != null) {
                        println("Found Piece blocking rooks path!")
                        return false
                    }
                }
                if (pieceOnNewPos != null && pieceOnNewPos.color != color) {
                    println("pieceOnNewPos: $pieceOnNewPos")
                    removePiece(pieceOnNewPos)
                    whiteTurn = !isWhite
                    return true
                }
                // Case moving one down
                if (pieceOnNewPos == null && cellstocheck == 0) {
                    whiteTurn = !isWhite
                    return true
                }
                whiteTurn = !isWhite
                return true
            }
        }

        // Case moving left or right
        if (oldPos.second == newPos.second) {
            // going right
            if (newPos.first > oldPos.first) {
                val cellstocheck = newPos.first - oldPos.first - 1
                println("cellstocheck: $cellstocheck going right")
                for (i in 1..cellstocheck) {
                    val pp = schachbrett!!.findPiece(oldPos.first + i, oldPos.second)?.pos
                    if (pp != null) {
                        println("Found Piece blocking rooks path!")
                        return false
                    }
                }
                if (pieceOnNewPos != null && pieceOnNewPos.color != color) {
                    println("pieceOnNewPos: $pieceOnNewPos")
                    removePiece(pieceOnNewPos)
                    whiteTurn = !isWhite
                    return true
                }

                // Case moving one right
                if (pieceOnNewPos == null && cellstocheck == 0) {
                    whiteTurn = !isWhite
                    return true
                }
                whiteTurn = !isWhite
                return true
            }
            if (newPos.first < oldPos.first) {
                val cellstocheck = oldPos.first - newPos.first - 1
                println("cellstocheck: $cellstocheck going left")
                for (i in 1..cellstocheck) {
                    val pp = schachbrett!!.findPiece(oldPos.first - i, oldPos.second)?.pos
                    if (pp != null) {
                        println("Found Piece blocking rooks path!")
                        return false
                    }
                }
                if (pieceOnNewPos != null && pieceOnNewPos.color != color) {
                    println("pieceOnNewPos: $pieceOnNewPos")
                    removePiece(pieceOnNewPos)
                    whiteTurn = !isWhite
                    return true
                }

                // Case moving one left
                if (pieceOnNewPos == null && cellstocheck == 0) {
                    whiteTurn = !isWhite
                    return true
                }
                whiteTurn = !isWhite
                return true
            }
        }

        return false
    }

    private fun moveKnight(
        oldPos: Pair<Int, Int>,
        newPos: Pair<Int, Int>,
        pieceOnNewPos: Piece?,
        isWhite: Boolean,
    ): Boolean {
        // Case moving down right or down left
        if (newPos.second-oldPos.second == 2 && (newPos.first-oldPos.first==1)||(oldPos.first-newPos.first == 1)){
            println("ye")
            if (pieceOnNewPos != null && pieceOnNewPos.color != color) {
                removePiece(pieceOnNewPos)
                whiteTurn = !isWhite
                return true
            }
            if (pieceOnNewPos == null) {
                whiteTurn = !isWhite
                return true
            }
        }
        // Case moving up right or up left
        if (oldPos.second-newPos.second == 2 && (newPos.first-oldPos.first==1)||(oldPos.first-newPos.first == 1)){
            println("ye")
            if (pieceOnNewPos != null && pieceOnNewPos.color != color) {
                removePiece(pieceOnNewPos)
                whiteTurn = !isWhite
                return true
            }
            if (pieceOnNewPos == null) {
                whiteTurn = !isWhite
                return true
            }
        }
        // Case moving right or left and a bit down or up
        if (newPos.second-oldPos.second == 1 && (newPos.first-oldPos.first==2)||(oldPos.first-newPos.first == 2)){
            println("ye")
            if (pieceOnNewPos != null && pieceOnNewPos.color != color) {
                removePiece(pieceOnNewPos)
                whiteTurn = !isWhite
                return true
            }
            if (pieceOnNewPos == null) {
                whiteTurn = !isWhite
                return true
            }
        }
        // Case moving right or left and a bit up or down
        if (oldPos.second-newPos.second == 1 && (newPos.first-oldPos.first==2)||(oldPos.first-newPos.first == 2)){
            println("ye")
            if (pieceOnNewPos != null && pieceOnNewPos.color != color) {
                removePiece(pieceOnNewPos)
                whiteTurn = !isWhite
                return true
            }
            if (pieceOnNewPos == null) {
                whiteTurn = !isWhite
                return true
            }
        }
        return false
    }

    private fun removePiece(piece: Piece) {
        println("Pieces list before removal: $pieces")
        pieces.remove(piece)
        piece.piece.removeFromParent()
        piece.removeFromParent()

        println("Pieces list after removal: $pieces")
        println("Piece removed: $piece")
    }

    override fun renderInternal(ctx: RenderContext) {}
}

fun addAllPieces(cont: SceneContainer) {
    // White pieces
    val whitePawn1 = Piece(PieceKind.WhitePawn, Colors.WHITE, 0, 1, cont)
    val whitePawn2 = Piece(PieceKind.WhitePawn, Colors.WHITE, 1, 1, cont)
    val whitePawn3 = Piece(PieceKind.WhitePawn, Colors.WHITE, 2, 1, cont)
    val whitePawn4 = Piece(PieceKind.WhitePawn, Colors.WHITE, 3, 1, cont)
    val whitePawn5 = Piece(PieceKind.WhitePawn, Colors.WHITE, 4, 1, cont)
    val whitePawn6 = Piece(PieceKind.WhitePawn, Colors.WHITE, 5, 1, cont)
    val whitePawn7 = Piece(PieceKind.WhitePawn, Colors.WHITE, 6, 1, cont)
    val whitePawn8 = Piece(PieceKind.WhitePawn, Colors.WHITE, 7, 1, cont)
    val whiteRook1 = Piece(PieceKind.WhiteRook, Colors.WHITE, 0, 0, cont)
    val whiteRook2 = Piece(PieceKind.WhiteRook, Colors.WHITE, 7, 0, cont)
    val whiteKnight1 = Piece(PieceKind.WhiteKnight, Colors.WHITE, 1, 0, cont)
    val whiteKnight2 = Piece(PieceKind.WhiteKnight, Colors.WHITE, 6, 0, cont)

    // black pieces
    val blackPawn1 = Piece(PieceKind.BlackPawn, Colors.BLACK, 0, 6, cont)
    val blackPawn2 = Piece(PieceKind.BlackPawn, Colors.BLACK, 1, 6, cont)
    val blackPawn3 = Piece(PieceKind.BlackPawn, Colors.BLACK, 2, 6, cont)
    val blackPawn4 = Piece(PieceKind.BlackPawn, Colors.BLACK, 3, 6, cont)
    val blackPawn5 = Piece(PieceKind.BlackPawn, Colors.BLACK, 4, 6, cont)
    val blackPawn6 = Piece(PieceKind.BlackPawn, Colors.BLACK, 5, 6, cont)
    val blackPawn7 = Piece(PieceKind.BlackPawn, Colors.BLACK, 6, 6, cont)
    val blackPawn8 = Piece(PieceKind.BlackPawn, Colors.BLACK, 7, 6, cont)
    val blackRook1 = Piece(PieceKind.BlackRook, Colors.BLACK, 0, 7, cont)
    val blackRook2 = Piece(PieceKind.BlackRook, Colors.BLACK, 7, 7, cont)
    val blackKnight1 = Piece(PieceKind.BlackKnight, Colors.BLACK, 1, 7, cont)
    val blackKnight2 = Piece(PieceKind.BlackKnight, Colors.BLACK, 6, 7, cont)

    // Add all pieces to the pieces list
    pieces.add(whitePawn1)
    pieces.add(whitePawn2)
    pieces.add(whitePawn3)
    pieces.add(whitePawn4)
    pieces.add(whitePawn5)
    pieces.add(whitePawn6)
    pieces.add(whitePawn7)
    pieces.add(whitePawn8)
    pieces.add(whiteRook1)
    pieces.add(whiteRook2)
    pieces.add(blackPawn1)
    pieces.add(blackPawn2)
    pieces.add(blackPawn3)
    pieces.add(blackPawn4)
    pieces.add(blackPawn5)
    pieces.add(blackPawn6)
    pieces.add(blackPawn7)
    pieces.add(blackPawn8)
    pieces.add(blackRook1)
    pieces.add(blackRook2)
    pieces.add(whiteKnight1)
    pieces.add(whiteKnight2)
    pieces.add(blackKnight1)
    pieces.add(blackKnight2)
}
