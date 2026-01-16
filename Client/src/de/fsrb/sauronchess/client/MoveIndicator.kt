package de.fsaurenbach.sauronchess.client

import korlibs.image.color.*
import korlibs.korge.view.*

fun Container.moveIndicator(positionInt:Int): MoveIndicator = MoveIndicator(positionInt).addTo(this)

class MoveIndicator(var positionInt: Int) : Container() {

    private var circle: Circle = circle()
    private var isRed: Boolean = false

    init {
        markGrey()
        circle.zIndex = 2.0
    }

    fun markRed() {
        circle.apply {
            color = Colors["#cccccc"]
            fill = Colors.TRANSPARENT
            stroke = Colors.RED
            strokeThickness = 6.5
            radius = DisplayConfig.userScale * 39
        }
        isRed = true
    }

    fun markGrey() {
        if (isRed) return markRed()

        circle.apply {
            color = Colors["#3b3b3b81"]
            radius = DisplayConfig.userScale * 15
            stroke = Colors.BLACK
            strokeThickness = DisplayConfig.userScale * 3.1
        }
        isRed = false

    }

    fun markWhite() = circle.apply { color = Colors.WHITE }


}
