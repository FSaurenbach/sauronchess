package de.fsrb.sauronchess.client

import de.fsrb.sauronchess.client.DisplayConfig.cellHeight
import de.fsrb.sauronchess.client.DisplayConfig.cellWidth
import korlibs.image.color.*
import korlibs.korge.view.*
import korlibs.korge.view.addTo
import korlibs.math.geom.*


fun Container.cell(
    isWhite: Boolean, cx: Int, cy: Int, text: String, position: Int
) = Cell(isWhite, cx, cy, text, position).addTo(this)


class Cell(
    private var isWhite: Boolean,
    cx: Int,
    cy: Int,
    cellName: String,
    var positionInt: Int,

    ) : Container() {
    private val cell: SolidRect = solidRect(cellWidth, cellHeight)

    init {
        moveCell(cx, cy)
        colorCell()
        val text = if (UserSettings.debugMode) positionInt.toString() else cellName
        text(text, color = Colors.BLACK)

    }

    fun colorCell() {
        cell.color = if (isWhite) {
            if (UserSettings.darkMode) ThemeColors.darkModeWhite else ThemeColors.whiteModeWhite
        } else {
            if (UserSettings.darkMode) ThemeColors.darkModeBlack else ThemeColors.whiteModeBlack
        }
    }

    fun markActive() {
        cell.color = Colors.ALICEBLUE
    }


    private fun moveCell(
        newX: Int,
        newY: Int,
    ) {
        pos = Point(newX * cellWidth + DisplayConfig.offsetX, newY * cellHeight + DisplayConfig.offsetY)
    }

}


fun findCell(positionInt: Int): Cell? = GameState.cells.find { it.positionInt == positionInt }


fun reloadCells() = GameState.cells.forEach { it.colorCell() }

