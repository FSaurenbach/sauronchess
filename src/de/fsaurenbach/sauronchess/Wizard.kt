package de.fsaurenbach.sauronchess

import korlibs.korge.input.*
import korlibs.korge.scene.*
import korlibs.korge.view.*
import korlibs.korge.view.align.*
import korlibs.math.geom.*
import kotlinx.coroutines.*

class Wizard() : Scene() {
    override suspend fun SContainer.sceneMain() {
        val backgroundSize = Size(100, 100)
        val corners = RectCorners(10)
        reloadPictures()


        val whiteQueen = image(Images.whiteQueen!!)

        roundRect(backgroundSize, corners, ThemeColors.whiteModeWhite)
            .apply {
                addTo(this@sceneMain)
                centerYOnStage()
                positionX(DisplayConfig.screenWidth / 3)
                whiteQueen.centerOn(this).zIndex(3)
                onClick { changeScene(true) }

            }

        val blackQueen = image(Images.blackQueen!!)
        roundRect(backgroundSize, corners, ThemeColors.whiteModeWhite)
            .apply {
                addTo(this@sceneMain)
                centerYOnStage()
                positionX(DisplayConfig.screenWidth / 3 + DisplayConfig.screenWidth / 3)
                blackQueen.centerOn(this).zIndex(3)
                onClick { changeScene(false) }

            }

    }

    private fun changeScene(isWhite: Boolean) {
        GameState.userIsWhite = isWhite
        GameState.sceneContainer.launch { GameState.sceneContainer.changeTo { GameScene() } }
    }
}
