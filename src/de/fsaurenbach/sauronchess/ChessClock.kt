package de.fsaurenbach.sauronchess

import korlibs.korge.view.*
import korlibs.math.*
import korlibs.time.*
import kotlinx.coroutines.*
import kotlin.time.*


class ChessClock(var whiteStartingTime: Duration, var blackStartingTime: Duration) : Container() {
    inner class Timer(time: Duration) {
        private val timeSource = TimeSource.Monotonic
        private var counting = false
        private var mark: TimeSource.Monotonic.ValueTimeMark = timeSource.markNow()
        private var stop = timeSource.markNow()

        private var timeLeftWhite: Duration = 0.seconds
        private var timeLeftBlack: Duration = 0.seconds


        fun reset() {
            // TODO: Check if GameState.sceneContainer.launch() really is as slow as I think -> find a replacement
            GameState.sceneContainer.launch {
                timeLeftWhite = whiteStartingTime
                timeLeftBlack = blackStartingTime
            }
        }

        fun toggle() {
            if (counting) {
                stop = timeSource.markNow()
                val elapsed = (stop - mark)
                println("stopped, elapsed: " + elapsed.seconds.roundDecimalPlaces(2))
                counting = false
            } else {
                println("starting ")
                mark = timeSource.markNow()
                counting = true

            }

        }

    }

}
