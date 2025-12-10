package de.fsaurenbach.sauronchess

import korlibs.image.color.*
import korlibs.korge.view.*
import korlibs.korge.view.align.*
import korlibs.math.*
import korlibs.math.geom.*
import korlibs.time.*
import kotlin.time.*

// TODO: Handle it online?????????????
class ChessClock(whiteStartingTime: Duration, blackStartingTime: Duration) : Container() {
    val background = roundRect(Size(250, 100), RectCorners(10), ThemeColors.darkModeBlack)
    val whiteTimer = Timer(whiteStartingTime, ThemeColors.whiteModeWhite).addTo(this).centerOn(background)
        .alignLeftToLeftOf(background, 20)
    val blackTimer = Timer(blackStartingTime, ThemeColors.darkModeWhite).addTo(this).centerOn(background)
        .alignRightToRightOf(background, 20)

    inner class Timer(duration: Duration, color: RGBA) : Container() {
        private val timeSource = TimeSource.Monotonic
        private var counting = false
        private var mark: TimeSource.Monotonic.ValueTimeMark = timeSource.markNow()
        private var lastMark: TimeSource.Monotonic.ValueTimeMark = timeSource.markNow()
        private var stop = timeSource.markNow()
        private var timeLeft: Duration = duration
        private var button = roundRect(Size(80, 80), RectCorners(10), color)

        init {
            val counter = text("$duration", color = Colors.BLACK).centerOn(button)
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

    init {

    }
}
