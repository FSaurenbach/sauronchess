package de.fsaurenbach.sauronchess

import korlibs.image.color.*
import korlibs.io.net.http.*
import korlibs.io.serialization.json.*
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
    private var whiteFree = true
    private var blackFree = true
    private lateinit var whiteQueen: RoundRect
    private lateinit var blackQueen: RoundRect
    private val backgroundSize = Size(100, 100)
    private val corners = RectCorners(10)
    private lateinit var onlinePlayButton: RoundRect
    private lateinit var offlinePlayButton: RoundRect
    private fun updateColors() {
        for (rr in slots) {
            rr.roundRect.color = if (GameState.currentSlot == rr.number) Colors.GREEN else Colors.RED

        }
    }

    override suspend fun SContainer.sceneMain() {

        reloadPictures()
        offlinePlayButton = roundRect(Size(200, 100), corners, ThemeColors.whiteModeWhite).centerOnStage()
        offlinePlayButton.onClick {
            changeScene(true)
        }
        text("Play Offline", 40, ThemeColors.whiteModeBlack).addTo(offlinePlayButton).centerOn(offlinePlayButton)

        whiteQueen = roundRect(backgroundSize, corners, ThemeColors.whiteModeWhite).apply {
            centerYOnStage()
            positionX(DisplayConfig.screenWidth / 3)
            addChild(Image(Images.whiteQueen!!).centerOn(this))
            onClick { changeScene(true) }
            visible = false
        }.addTo(this)
        blackQueen = roundRect(backgroundSize, corners, ThemeColors.whiteModeWhite).apply {
            centerYOnStage()
            positionX(DisplayConfig.screenWidth / 3 + DisplayConfig.screenWidth / 3)
            addChild(Image(Images.blackQueen!!).centerOn(this))
            onClick { changeScene(false) }
            visible = false
        }.addTo(this)


        onlinePlayButton = roundRect(backgroundSize, corners)
        text("Play\nOnline", 30).centerOn(onlinePlayButton)
        onlinePlayButton.color = Colors.RED
        onlinePlayButton.onClick {
            if (onlinePlayButton.color == Colors.GREEN) {
                onlinePlayButton.color = Colors.RED
                GameState.onlinePlay = false
                removeSlots()
                offlinePlayButton.visible(true)
                whiteQueen.visible = false
                blackQueen.visible = false
            } else {
                onlinePlayButton.color = Colors.GREEN
                GameState.onlinePlay = true
                updateOnline()
                offlinePlayButton.visible(false)
                whiteQueen.visible = true
                blackQueen.visible = true
            }
        }


    }

    private fun removeSlots() {
        for (slot in slots) slot.removeFromParent()
        slots.clear()
    }


    private fun Container.updateOnline() {
        launch {
            println("Trying to connect to server")
            val client = HttpClient()
            try {
                val response = client.endpoint("http://127.0.0.1:9999")
                    .request(Http.Method.GET, "check")
                println("Server response: ${response.decode()}")
                GameState.onlinePlay = true
                println("Online play enabled!")

            } catch (e: Throwable) {
                GameState.onlinePlay = false
                println("Server offline, disabling online play: $e")
                onlinePlayButton.color = Colors.RED
                removeSlots()
            }
        }.invokeOnCompletion {
            println("FINISHED")
            if (GameState.onlinePlay) {
                for (integer in 0..maxSlots) {
                    Slot(RoundRect(backgroundSize, corners), integer)
                        .apply {
                            addTo(this@updateOnline)
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
                        launch {
                            val response = HttpClient().endpoint("http://127.0.0.1:9999")
                                .request(Http.Method.GET, ("get_slot" + GameState.currentSlot))
                            println("repossnse: $response")
                            val map: Map<String, *> = response.decode().fromJson() as Map<String, *>
                            println("map: $map")
                            whiteQueen.visible = true
                            blackQueen.visible = true
                            if (map["player1"] != null) {
                                println("player1 is already used " + map["player1"])
                                whiteFree = false; whiteQueen.visible = false
                            }
                            if (map["player2"] != null) {
                                println("player2 is already used " + map["player2"])
                                blackFree = false; blackQueen.visible = false
                            }
                        }

                    }
                }
            }
        }
    }

    private fun changeScene(isWhite: Boolean) {
        GameState.userIsWhite = isWhite
        GameState.sceneContainer.launch { GameState.sceneContainer.changeTo { GameScene() } }
    }
}

suspend fun HttpClient.Response.decode(): String {
    return this.content.readAll().decodeToString()
}
