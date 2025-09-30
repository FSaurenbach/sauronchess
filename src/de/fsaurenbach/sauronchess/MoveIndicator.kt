package de.fsaurenbach.sauronchess

import korlibs.image.color.Colors
import korlibs.korge.view.*

fun Container.moveIndicator(): MoveIndicator =
    MoveIndicator().addTo(this)
class MoveIndicator : Container() {
    var cx = 0
    var cy = 0

    private var circle: Circle = circle()
    private var isRed: Boolean = false

    init {


        markGrey()
        circle.zIndex = 2.0
    }

    fun markRed() {
        circle.color = Colors["#cccccc"]

        circle.fill = Colors.TRANSPARENT
        circle.stroke = Colors.RED
        circle.strokeThickness = 6.5
        circle.radius = DisplayConfig.userScale * 39
        isRed = true
    }

    fun markGrey() {

        if (isRed) {
            markRed()
            return
        }
        circle.color = Colors["#3b3b3b81"]
        circle.radius = DisplayConfig.userScale * 15
        circle.stroke = Colors.BLACK
        circle.strokeThickness = DisplayConfig.userScale * 3.1
        isRed = false

    }

    fun markWhite() {
        circle.color = Colors.WHITE
    }
}
