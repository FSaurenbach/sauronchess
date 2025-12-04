package de.fsaurenbach.sauronchess

import korlibs.image.color.*
import korlibs.korge.input.*
import korlibs.korge.view.*
import korlibs.korge.view.align.*
import korlibs.math.*
import korlibs.time.*
import kotlinx.coroutines.*
import kotlin.time.*


class ChessClock(whiteStartingTime: Duration, blackStartingTime: Duration) : Container() {
    inner class Timer(private var duration: Duration, var color: String) : Container() {
        private val timeSource = TimeSource.Monotonic
        private var counting = false
        private var mark: TimeSource.Monotonic.ValueTimeMark = timeSource.markNow()
        private var lastMark: TimeSource.Monotonic.ValueTimeMark = timeSource.markNow()
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
            button.addFixedUpdater(10.milliseconds) {
                counter.text =
                    "${timeLeft.toDouble(DurationUnit.SECONDS).roundDecimalPlaces(1).toDuration(DurationUnit.SECONDS)}"
                if (counting) {
                    stop = timeSource.markNow()
                    val difference = (stop - lastMark).inWholeMilliseconds
                    timeLeft -= difference.toDuration(DurationUnit.MILLISECONDS)
                    lastMark = timeSource.markNow()
                    elapsed = 0.0
                }
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
                counting = false
                stop = timeSource.markNow()
                val difference = (stop - mark).milliseconds
                println("$color stopped; elapsed: $difference ms")
                elapsed += (difference)
                timeLeft -= elapsed.milliseconds
                elapsed = 0.0
            } else {
                println("$color starting ")
                mark = timeSource.markNow()
                lastMark = timeSource.markNow()
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
