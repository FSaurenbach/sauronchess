package de.fsaurenbach.sauronchess.client

import de.fsaurenbach.sauronchess.client.DisplayConfig.cellHeight
import de.fsaurenbach.sauronchess.client.DisplayConfig.cellWidth
import korlibs.image.color.*
import korlibs.korge.view.*
import korlibs.korge.view.addTo
import korlibs.math.geom.*


fun Container.cell(
    isWhite: Boolean, cx: Int, cy: Int, text: String
) = Cell(isWhite, cx, cy, text).addTo(this)


class Cell(
    var isWhite: Boolean,
    var cx: Int,
    var cy: Int,
    text: String,

    ) : Container() {
    private val cell: SolidRect = solidRect(cellWidth, cellHeight)

    init {
        moveCell(cx, cy)
        colorCell()
        text(text, color = Colors.BLACK)

    }

    fun colorCell() {
        cell.color = if (isWhite) {
            if (UserSettings.darkMode) ThemeColors.darkModeWhite else ThemeColors.whiteModeWhite
        } else {
            if (UserSettings.darkMode) ThemeColors.darkModeBlack else ThemeColors.whiteModeBlack
        }
    }


    private fun moveCell(
        newX: Int,
        newY: Int,
    ) {
        pos = Point(newX * cellWidth + DisplayConfig.offsetX, newY * cellHeight + DisplayConfig.offsetY)
    }

}


fun findCell(cx: Int, cy: Int): Cell {
    return GameState.cells.find { it.cx == cx && it.cy == cy }!!
}

fun reloadCells() = GameState.cells.forEach { it.colorCell() }

