package de.fsaurenbach.sauronchess

import korlibs.image.color.*
import korlibs.io.net.http.*
import korlibs.io.stream.*
import korlibs.korge.input.*
import korlibs.korge.scene.*
import korlibs.korge.view.*
import korlibs.korge.view.align.*
import korlibs.math.geom.*
import kotlinx.coroutines.*

class Slot(var roundRect: RoundRect, var number: Int) : Container() {
    init {
        roundRect.addTo(this)
    }
}

class Wizard : Scene() {

    private var maxSlots = 4
    private var slots: MutableList<Slot> = mutableListOf()
    private fun updateColors() {
        for (rr in slots) {
            rr.roundRect.color = if (GameState.currentSlot == rr.number) Colors.GREEN else Colors.RED

        }
    }

    override suspend fun SContainer.sceneMain() {
        val backgroundSize = Size(100, 100)
        val corners = RectCorners(10)
        reloadPictures()


        for (integer in 0..maxSlots) {
            Slot(RoundRect(backgroundSize, corners, ThemeColors.whiteModeWhite), integer)
                .apply {
                    addTo(this@sceneMain)
                    addTo(slots)
                    positionX((DisplayConfig.screenWidth / 5) * integer)
                    positionY(DisplayConfig.screenHeight / 4)
                    zIndex(5)
                    updateColors()
                }


        }
        for (slot in slots) {
            slot.onClick {
                GameState.currentSlot = slot.number
                updateColors()
            }
        }
        println("Trying to connect to server")
        launch {
            val client = HttpClient()
            try {
                println("Trying to connect to server")
                val response = client.endpoint("http://127.0.0.1:9999")
                    .request(Http.Method.GET, "check")
                println("Server response: ${response.content.readAll().decodeToString()}")
                GameState.onlinePlay = true
                println("Online play enabled!")
                cancel()

            } catch (e: Throwable) {
                GameState.onlinePlay = false
                println("Server offline, disabling online play: $e")
                cancel()
            }
        }.invokeOnCompletion {
            println("FINISHED")
        }


        val whiteQueen = image(Images.whiteQueen!!)

        roundRect(backgroundSize, corners, ThemeColors.whiteModeWhite).apply {
            addTo(this@sceneMain)
            centerYOnStage()
            positionX(DisplayConfig.screenWidth / 3)
            whiteQueen.centerOn(this).zIndex(3)
            onClick { changeScene(true) }

        }

        val blackQueen = image(Images.blackQueen!!)
        roundRect(backgroundSize, corners, ThemeColors.whiteModeWhite).apply {
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
