import korlibs.image.color.*
import korlibs.korge.render.*
import korlibs.korge.scene.*
import korlibs.korge.view.*
import korlibs.math.geom.*


enum class PieceKind(kind: String) {
    whitePawn("wP"),
    blackPawn("bP"),
    whiteRook("wR"),
    blackRook("bR"),

}

fun decodePosition(cxy: Point): Pair<Int, Int> {
    val x = cxy.x / 64
    val y = cxy.y / 64
    return Pair(x.toInt(), y.toInt())
}


fun decode2(cx: Double, cy: Double): Point {
    val x = cx / 64
    val y = cy / 64
    return Point(x, y)
}

class Piece(kind: PieceKind, color: RGBA, cx: Int, cy: Int, cont: SceneContainer) : View() {

    var pieceKind: PieceKind = kind
    lateinit var piece: Image
    var position = board[cx][cy].pos

    init {
        if (color == Colors.WHITE) {
            if (kind == PieceKind.whitePawn) {
                piece = Image(whitePawn!!)
                piece.size(Size(64, 64))
                piece.addTo(cont) // Add the piece to the scene first
                moveTo(cx, cy) // Then update its position
            }
            if (kind == PieceKind.whiteRook) {
                piece = Image(whiteRook!!)
                piece.size(Size(64, 64))
                piece.addTo(cont) // Add the piece to the scene first
                moveTo(cx, cy) // Then update its position
            }
        }
        if (color == Colors.BLACK) {
            if (kind == PieceKind.blackPawn) {
                piece = Image(blackPawn!!)
                piece.size(Size(64, 64))
                piece.addTo(cont) // Add the piece to the scene first
                moveTo(cx, cy) // Then update its position
            }
            if (kind == PieceKind.blackRook) {
                piece = Image(blackRook!!)
                piece.size(Size(64, 64))
                piece.addTo(cont) // Add the piece to the scene first
                moveTo(cx, cy) // Then update its position
            }
        }

        //clickListener(cx, cy)

    }


    fun moveTo(cx: Int, cy: Int) {
        // Update the position of 'piece' based on 'cx' and 'cy'
        piece.position((cx * 64), (cy * 64))
        position = board[cy][cx].pos
    }

    fun moveChecker(oldPos: Pair<Int, Int>, newPos: Pair<Int, Int>, withCheck: Boolean): Boolean {
        var kind = this.pieceKind

        val pieceOnNewPos = pieces.find { it.position == board[newPos.second][newPos.first].pos }


        if (whiteTurn) {
            when (kind) {

                PieceKind.whitePawn -> {
                    if ((newPos.second - oldPos.second == 1 && oldPos.first == newPos.first) || (oldPos.second == 1 && newPos.second == 3 && oldPos.first == newPos.first)) {
                        if (pieceOnNewPos == null) {
                            if (withCheck) whiteTurn = false
                            return true

                        }

                    }
                    // Capture a piece
                    else if (newPos.second - oldPos.second == 1 && ((newPos.first - oldPos.first == 1) || (newPos.first - oldPos.first == -1))) {

                        println("Destiny: $pieceOnNewPos")
                        if (pieceOnNewPos != null && pieceOnNewPos.pieceKind == PieceKind.blackPawn) {
                            if (withCheck) {
                                pieces.remove(pieceOnNewPos)
                                pieceOnNewPos.piece.removeFromParent()
                                whiteTurn = false

                            }
                            return true


                        }
                    }
                }

                PieceKind.whiteRook -> {
                    if (oldPos.first != newPos.first && oldPos.second != newPos.second) {
                        return false // Rook can only move along rows or columns
                    }

                    // Check for any pieces between oldPos and newPos
                    val minRow = minOf(oldPos.first, newPos.first)
                    val maxRow = maxOf(oldPos.first, newPos.first)
                    val minCol = minOf(oldPos.second, newPos.second)
                    val maxCol = maxOf(oldPos.second, newPos.second)

                    for (piece in pieces) {
                        val row = decodePosition(piece.position).first
                        val col = decodePosition(piece.position).second
                        if (row == oldPos.first && col == oldPos.second) continue // Skip the rook's own position
                        if (row == newPos.first && col == newPos.second) continue // Skip the target position
                        if ((row == oldPos.first || col == oldPos.second) && row in minRow..maxRow && col in minCol..maxCol) {
                            return false // There's a piece blocking the path
                        }
                    }

                    return true // Rook can move without obstruction
                }

                else -> {
                    return false
                }
            }
        }
        if (!whiteTurn) {
            when (kind) {
                PieceKind.blackPawn -> {
                    if ((newPos.second - oldPos.second == -1 && oldPos.first == newPos.first) || (oldPos.second == 6 && newPos.second == 4 && oldPos.first == newPos.first)) {
                        if (pieceOnNewPos == null) {
                            if (withCheck) whiteTurn = true

                            return true
                        }
                    }
                    // If the pawn is trying to capture a piece
                    else if (newPos.second - oldPos.second == -1 && ((newPos.first - oldPos.first == 1) || (newPos.first - oldPos.first == -1))) {
                        if (pieceOnNewPos != null && pieceOnNewPos.pieceKind == PieceKind.whitePawn) {

                            if (withCheck) {
                                whiteTurn = true
                                pieces.remove(pieceOnNewPos)
                                pieceOnNewPos.piece.removeFromParent()

                            }
                            return true

                        }
                    }
                }
                PieceKind.blackRook -> {
                    if (oldPos.first != newPos.first && oldPos.second != newPos.second) {
                        return false // Rook can only move along rows or columns
                    }

                    // Check for any pieces between oldPos and newPos
                    val minRow = minOf(oldPos.first, newPos.first)
                    val maxRow = maxOf(oldPos.first, newPos.first)
                    val minCol = minOf(oldPos.second, newPos.second)
                    val maxCol = maxOf(oldPos.second, newPos.second)

                    for (piece in pieces) {
                        val row = decodePosition(piece.position).first
                        val col = decodePosition(piece.position).second
                        if (row == oldPos.first && col == oldPos.second) continue // Skip the rook's own position
                        if (row == newPos.first && col == newPos.second) continue // Skip the target position
                        if ((row == oldPos.first || col == oldPos.second) && row in minRow..maxRow && col in minCol..maxCol) {
                            return false // There's a piece blocking the path
                        }
                    }

                    return true // Rook can move without obstruction
                }

                else -> {
                    return false
                }
            }
        }
        return false
    }



    override fun renderInternal(ctx: RenderContext) {
        // Implement your rendering logic here
    }
}


