package de.fsaurenbach.sauronchess

import korlibs.image.color.*
import korlibs.korge.input.*
import korlibs.korge.view.*
import korlibs.korge.view.align.*
import korlibs.math.*
import korlibs.time.*
import kotlinx.coroutines.*
import kotlin.time.*


class ChessClock(var whiteStartingTime: Duration, var blackStartingTime: Duration) : Container() {
    inner class Timer(var duration: Duration, var color: String) : Container() {
        private val timeSource = TimeSource.Monotonic
        private var counting = false
        private var mark: TimeSource.Monotonic.ValueTimeMark = timeSource.markNow()
        private var stop = timeSource.markNow()
        private var elapsed: Double = 0.0
        private var timeLeft: Duration = duration
        private var button = solidRect(100, 100, color = ThemeColors.whiteModeWhite)

        init {
            button.onClick {
                if (button.color == ThemeColors.whiteModeBlack) button.colorMul = ThemeColors.whiteModeWhite
                else if (button.color == ThemeColors.whiteModeWhite) button.colorMul = ThemeColors.whiteModeBlack
                toggle()
            }
            val counter = text("", color = Colors.BLACK).centerOn(button)
            button.addUpdater {
                counter.text = "$timeLeft"
            }



            resetTimer()
        }

        private fun resetTimer() {
            GameState.sceneContainer.launch {
                timeLeft = duration
            }
        }

        private fun toggle() {
            if (counting) {
                stop = timeSource.markNow()
                val difference = (stop - mark).seconds.roundDecimalPlaces(1)
                println(color + "stopped, elapsed: " + difference)
                elapsed += (difference)
                timeLeft -= elapsed.seconds
                println("$color elapsed: $elapsed")
                counting = false
                elapsed = 0.0
            } else {

                println(color + "starting ")
                mark = timeSource.markNow()
                counting = true

            }

        }

    }

    init {

        val whiteTimer = Timer(whiteStartingTime, color = "WHITE").addTo(this)
        val blackTimer = Timer(blackStartingTime, color = "BLACK").addTo(this)

        blackTimer.alignLeftToRightOf(whiteTimer)
    }
}
