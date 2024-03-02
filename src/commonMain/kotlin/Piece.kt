import korlibs.image.color.*
import korlibs.korge.render.*
import korlibs.korge.scene.*
import korlibs.korge.view.*
import korlibs.math.geom.*

enum class PieceKind {
  WhitePawn,
  BlackPawn,
  WhiteRook,
  BlackRook
}

fun decodePosition(cxy: Point): Pair<Int, Int> {
  val x = cxy.x / 64
  val y = cxy.y / 64
  return Pair(x.toInt(), y.toInt())
}

/**
 * Represents a chess piece.
 *
 * @constructor Creates a Piece with the specified parameters.
 * @property kind The kind of piece.
 * @property color The color of the piece.
 * @property cx The x-coordinate of the piece.
 * @property cy The y-coordinate of the piece.
 * @property cont The scene container.
 */
class Piece(
  kind: PieceKind,
  private val color: RGBA,
  private val cx: Int,
  private val cy: Int,
  private val cont: SceneContainer,
) : View() {

  var pieceKind: PieceKind = kind
  private lateinit var piece: Image
  var position = board[cx][cy].pos

  init {
    if (color == Colors.WHITE) {
      if (kind == PieceKind.WhitePawn || kind == PieceKind.WhiteRook) {
        piece = Image(if (kind == PieceKind.WhitePawn) whitePawn!! else whiteRook!!)
        piece.size(Size(64, 64))
        piece.addTo(cont)
        moveTo(cx, cy)
      }
    } else {
      if (kind == PieceKind.BlackPawn || kind == PieceKind.BlackRook) {
        piece = Image(if (kind == PieceKind.BlackPawn) blackPawn!! else blackRook!!)
        piece.size(Size(64, 64))
        piece.addTo(cont)
        moveTo(cx, cy)
      }
    }
  }

  /**
   * Moves the piece to a new position on the board.
   *
   * @param cx The new x-coordinate of the piece.
   * @param cy The new y-coordinate of the piece.
   */
  fun moveTo(cx: Int, cy: Int) {
    piece.position((cx * 64), (cy * 64))
    position = board[cy][cx].pos
  }

  /**
   * Checks if the move of the piece is valid.
   *
   * @param oldPos The old position of the piece.
   * @param newPos The new position of the piece.
   * @param withCheck Indicates whether to perform the move or just check its validity.
   * @return true if the move is valid, false otherwise.
   */
  fun moveChecker(oldPos: Pair<Int, Int>, newPos: Pair<Int, Int>, withCheck: Boolean): Boolean {
    val pieceOnNewPos = pieces.find { it.position == board[newPos.second][newPos.first].pos }

    if (whiteTurn) {
      when (pieceKind) {
        PieceKind.WhitePawn -> {
          if (
            (newPos.second - oldPos.second == 1 && oldPos.first == newPos.first) ||
              (oldPos.second == 1 && newPos.second == 3 && oldPos.first == newPos.first)
          ) {
            if (pieceOnNewPos == null) {
              if (withCheck) whiteTurn = false
              return true
            }
          } else if (
            newPos.second - oldPos.second == 1 &&
              ((newPos.first - oldPos.first == 1) || (newPos.first - oldPos.first == -1))
          ) {
            if (pieceOnNewPos != null && pieceOnNewPos.pieceKind == PieceKind.BlackPawn) {
              if (withCheck) {
                pieces.remove(pieceOnNewPos)
                pieceOnNewPos.piece.removeFromParent()
                whiteTurn = false
              }
              return true
            }
          }
        }
        PieceKind.WhiteRook -> {
          if (oldPos.first != newPos.first && oldPos.second != newPos.second) {
            return false
          }

          val minRow = minOf(oldPos.first, newPos.first)
          val maxRow = maxOf(oldPos.first, newPos.first)
          val minCol = minOf(oldPos.second, newPos.second)
          val maxCol = maxOf(oldPos.second, newPos.second)

          for (piece in pieces) {
            val row = decodePosition(piece.position).first
            val col = decodePosition(piece.position).second
            if (row == oldPos.first && col == oldPos.second) continue
            if (row == newPos.first && col == newPos.second) continue
            if (
              (row == oldPos.first || col == oldPos.second) &&
                row in minRow..maxRow &&
                col in minCol..maxCol
            ) {
              return false
            }
          }

          if (withCheck && pieceOnNewPos != null && pieceOnNewPos.color == Colors.BLACK) {
            whiteTurn = false
            pieces.remove(pieceOnNewPos)
            pieceOnNewPos.piece.removeFromParent()
            return true
          }
          if (pieceOnNewPos == null) {
            return true
          }
        }
        else -> {
          return false
        }
      }
    } else {
      when (pieceKind) {
        PieceKind.BlackPawn -> {
          if (
            (newPos.second - oldPos.second == -1 && oldPos.first == newPos.first) ||
              (oldPos.second == 6 && newPos.second == 4 && oldPos.first == newPos.first)
          ) {
            if (pieceOnNewPos == null) {
              if (withCheck) whiteTurn = true

              return true
            }
          } else if (
            newPos.second - oldPos.second == -1 &&
              ((newPos.first - oldPos.first == 1) || (newPos.first - oldPos.first == -1))
          ) {
            if (pieceOnNewPos != null && pieceOnNewPos.pieceKind == PieceKind.WhitePawn) {

              if (withCheck) {
                whiteTurn = true
                pieces.remove(pieceOnNewPos)
                pieceOnNewPos.piece.removeFromParent()
              }
              return true
            }
          }
        }
        PieceKind.BlackRook -> {
          if (oldPos.first != newPos.first && oldPos.second != newPos.second) {
            return false
          }

          val minRow = minOf(oldPos.first, newPos.first)
          val maxRow = maxOf(oldPos.first, newPos.first)
          val minCol = minOf(oldPos.second, newPos.second)
          val maxCol = maxOf(oldPos.second, newPos.second)

          for (piece in pieces) {
            val row = decodePosition(piece.position).first
            val col = decodePosition(piece.position).second
            if (row == oldPos.first && col == oldPos.second) continue
            if (row == newPos.first && col == newPos.second) continue
            if (
              (row == oldPos.first || col == oldPos.second) &&
                row in minRow..maxRow &&
                col in minCol..maxCol
            ) {
              return false
            }
          }
          if (withCheck && pieceOnNewPos != null && pieceOnNewPos.color == Colors.WHITE) {
            whiteTurn = true
            pieces.remove(pieceOnNewPos)
            pieceOnNewPos.piece.removeFromParent()
            return true
          }
          if (pieceOnNewPos == null) {
            return true
          }
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
