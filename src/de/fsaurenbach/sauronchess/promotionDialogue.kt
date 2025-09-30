package de.fsaurenbach.sauronchess

import korlibs.korge.input.onDown
import korlibs.korge.view.Container
import korlibs.korge.view.Image
import korlibs.korge.view.align.alignLeftToLeftOf
import korlibs.korge.view.align.alignLeftToRightOf
import korlibs.korge.view.align.centerXBetween
import korlibs.korge.view.align.centerYOn
import korlibs.korge.view.image
import korlibs.korge.view.roundRect
import korlibs.math.geom.RectCorners
import korlibs.math.geom.Size
import kotlinx.coroutines.suspendCancellableCoroutine
import kotlin.coroutines.resume

class PromotionDialogue(private var isWhite: Boolean) : Container() {
    private val queen: Image
    private val rook: Image
    private val knight: Image
    private val bishop: Image

    init {
        val bg = roundRect(
            Size(360, 80),
            fill = if (userSettings.darkMode) ThemeColors.darkModeBlack else ThemeColors.whiteModeWhite,
            radius = RectCorners(10)
        )
        this.centerXBetween(DisplayConfig.screenWidth / 2, DisplayConfig.screenWidth / 2)

        queen = image(
            if (isWhite) PieceImages.whiteQueen!! else PieceImages.blackQueen!!
        ).alignLeftToLeftOf(bg).centerYOn(bg)
        rook = image(
            if (isWhite) PieceImages.whiteRook!! else PieceImages.blackRook!!
        ).alignLeftToRightOf(queen).centerYOn(bg)
        knight = image(
            if (isWhite) PieceImages.whiteKnight!! else PieceImages.blackKnight!!
        ).alignLeftToRightOf(rook).centerYOn(bg)
        bishop = image(
            if (isWhite) PieceImages.whiteBishop!! else PieceImages.blackBishop!!
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
