package de.fsaurenbach.sauronchess.client

import de.fsaurenbach.sauronchess.client.*
import korlibs.korge.input.*
import korlibs.korge.view.*
import korlibs.korge.view.align.*
import korlibs.math.geom.*
import kotlinx.coroutines.*
import kotlin.coroutines.*

class PromotionDialogue(private var isWhite: Boolean) : Container() {
    private val queen: Image
    private val rook: Image
    private val knight: Image
    private val bishop: Image

    init {
        val bg = roundRect(
            Size(360, 80),
            fill = if (UserSettings.darkMode) ThemeColors.darkModeBlack else ThemeColors.whiteModeWhite,
            radius = RectCorners(10)
        )
        this.centerXBetween(DisplayConfig.screenWidth / 2, DisplayConfig.screenWidth / 2)

        queen = image(
            if (isWhite) Images.whiteQueen!! else Images.blackQueen!!
        ).alignLeftToLeftOf(bg).centerYOn(bg)
        rook = image(
            if (isWhite) Images.whiteRook!! else Images.blackRook!!
        ).alignLeftToRightOf(queen).centerYOn(bg)
        knight = image(
            if (isWhite) Images.whiteKnight!! else Images.blackKnight!!
        ).alignLeftToRightOf(rook).centerYOn(bg)
        bishop = image(
            if (isWhite) Images.whiteBishop!! else Images.blackBishop!!
        ).alignLeftToRightOf(knight).centerYOn(bg)


    }

    suspend fun getChoice(): PieceKind = suspendCancellableCoroutine { coroutine ->
        queen.onDown {
            val choice = if (isWhite) PieceKind.WhiteQueen else PieceKind.BlackQueen
            coroutine.resume(choice)
        }
        bishop.onDown {
            val choice = if (isWhite) PieceKind.WhiteBishop else PieceKind.BlackBishop
            coroutine.resume(choice)
        }
        rook.onDown {
            val choice = if (isWhite) PieceKind.WhiteRook else PieceKind.BlackRook
            coroutine.resume(choice)
        }
        knight.onDown {
            val choice = if (isWhite) PieceKind.WhiteKnight else PieceKind.BlackKnight
            coroutine.resume(choice)
        }
    }
}
