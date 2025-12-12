package de.fsaurenbach.sauronchess

import korlibs.image.color.*
import korlibs.korge.view.*
import korlibs.korge.view.align.*
import korlibs.math.*
import korlibs.math.geom.*
import korlibs.time.*
import kotlin.time.*

// TODO: Handle it online?????????????
class ChessClock(val whiteStartingTime: Duration, val blackStartingTime: Duration, var serverClock: Boolean) :
    Container() {
    private var background: RoundRect? = null

    val whiteTimer = Timer(whiteStartingTime, ThemeColors.whiteModeWhite)
    val blackTimer = Timer(blackStartingTime, ThemeColors.darkModeWhite)

    init {
        if (!serverClock) {
            background = roundRect(Size(250, 100), RectCorners(10), ThemeColors.darkModeBlack)
            whiteTimer.centerOn(background!!).addTo(this)
                .alignLeftToLeftOf(background!!, 20)
            blackTimer.addTo(this).centerOn(background!!)
                .alignRightToRightOf(background!!, 20)
        }

    }


    inner class Timer(duration: Duration, color: RGBA) : Container() {
        private val timeSource = TimeSource.Monotonic
        private var counting = false
        private var mark: TimeSource.Monotonic.ValueTimeMark = timeSource.markNow()
        private var lastMark: TimeSource.Monotonic.ValueTimeMark = timeSource.markNow()
        private var stop = timeSource.markNow()
        private var timeLeft: Duration = duration
        private var counterBackground: Container? = null

        init {
            var counter: Text? = null
            if (!serverClock) {
                counterBackground = roundRect(Size(80, 80), RectCorners(10), color)
                counter = text("$duration", color = Colors.BLACK).scale(1.4).centerOn(counterBackground!!)
            } else {
                counterBackground = GameState.sceneContainer
            }


            counterBackground!!.addFixedUpdater(50.milliseconds) {
                if (!serverClock) {
                    counter!!.text = "${timeLeft.toDouble(DurationUnit.SECONDS).roundDecimalPlaces(1)}"
                }
                println("timeleft: $timeLeft")
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
