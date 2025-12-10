package de.fsaurenbach.sauronchess

import korlibs.image.color.*
import korlibs.korge.input.*
import korlibs.korge.view.*
import korlibs.korge.view.align.*
import korlibs.math.*
import korlibs.time.*
import kotlin.time.*


class ChessClock(whiteStartingTime: Duration, blackStartingTime: Duration) : Container() {

    val whiteTimer = Timer(whiteStartingTime).addTo(this)
    val blackTimer = Timer(blackStartingTime).addTo(this).alignLeftToRightOf(whiteTimer)

    inner class Timer(duration: Duration) : Container() {
        private val timeSource = TimeSource.Monotonic
        private var counting = false
        private var mark: TimeSource.Monotonic.ValueTimeMark = timeSource.markNow()
        private var lastMark: TimeSource.Monotonic.ValueTimeMark = timeSource.markNow()
        private var stop = timeSource.markNow()
        private var timeLeft: Duration = duration
        private var button = solidRect(100, 100, color = ThemeColors.whiteModeWhite)

        init {
            button.onClick {
                if (button.color == ThemeColors.whiteModeBlack) button.colorMul = ThemeColors.whiteModeWhite
                else if (button.color == ThemeColors.whiteModeWhite) button.colorMul = ThemeColors.whiteModeBlack
                toggle()
            }
            val counter = text("", color = Colors.BLACK).centerOn(button)
            button.addFixedUpdater(10.milliseconds) {
                counter.text = "${timeLeft.toDouble(DurationUnit.SECONDS).roundDecimalPlaces(1)}"
                if (counting) {
                    stop = timeSource.markNow()
                    val difference = (stop - lastMark).seconds
                    timeLeft -= difference.toDuration(DurationUnit.SECONDS)
                    lastMark = timeSource.markNow()
                }
            }

        }


        fun toggle() {
            if (counting) {
                counting = false
                stop = timeSource.markNow()
            } else {
                mark = timeSource.markNow()
                lastMark = timeSource.markNow()
                counting = true
            }

        }

    }

}
