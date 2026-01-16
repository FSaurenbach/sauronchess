package de.fsaurenbach.sauronchess.client

import de.fsaurenbach.sauronchess.common.*
import korlibs.image.color.*
import korlibs.korge.view.*
import korlibs.korge.view.align.*
import korlibs.math.geom.*
import korlibs.time.*

class ChessClockContainer : Container() {
    private var background: RoundRect? = null
    private val whiteTimer = Timer(ThemeColors.whiteModeWhite, GameState.chessClock!!.whiteTimer)
    private val blackTimer = Timer(ThemeColors.darkModeWhite, GameState.chessClock!!.blackTimer)

    init {
        background = roundRect(Size(250, 100), RectCorners(10), ThemeColors.darkModeBlack)
        whiteTimer.centerOn(background!!).addTo(this).alignLeftToLeftOf(background!!, 20)
        blackTimer.addTo(this).centerOn(background!!).alignRightToRightOf(background!!, 20)


    }

    inner class Timer(color: RGBA, timer: ChessClock.Timer) : Container() {

        private var counterBackground = roundRect(Size(80, 80), RectCorners(10), color)

        init {

            val counter = counterBackground.text("${timer.timeLeft.inWholeSeconds}", color = Colors.BLACK)
            counter.centerOn(counterBackground)

            counterBackground.addFixedUpdater(50.milliseconds) {
                counter.text = "${timer.timeLeft.inWholeSeconds}"
            }

        }


    }
}
