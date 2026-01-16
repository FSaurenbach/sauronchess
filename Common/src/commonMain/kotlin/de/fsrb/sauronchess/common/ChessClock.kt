package de.fsrb.sauronchess.common

import kotlinx.coroutines.*
import kotlin.time.*
import kotlin.time.Duration.Companion.seconds

class ChessClock(whiteStartingTime: Duration, blackStartingTime: Duration, callback: ((Boolean) -> Unit)) {

    val whiteTimer = Timer(whiteStartingTime, true, callback)
    val blackTimer = Timer(blackStartingTime, false, callback)


    inner class Timer(duration: Duration, isWhite: Boolean, callback: (Boolean) -> Unit) {
        private val timeSource = TimeSource.Monotonic
        private var counting = false
        private var lastMark: TimeSource.Monotonic.ValueTimeMark = timeSource.markNow()
        private var stop = timeSource.markNow()
        var timeLeft: Duration = duration
        var countJob: Job? = null
        init {

            countJob = CoroutineScope(Dispatchers.Default).launch {
                while (isActive) {
                    var string = ""
                    string = if (isWhite) "white: " else "black: "
                    // println(string + "time left: ${timeLeft.inWholeSeconds}")

                    if (counting) {
                        stop = timeSource.markNow()
                        val difference = (stop - lastMark).inWholeMilliseconds
                        timeLeft -= difference.toDuration(DurationUnit.MILLISECONDS)
                        lastMark = timeSource.markNow()
                        if (timeLeft <= 0.seconds) {
                            // TODO: Implement game over here!
                            callback.invoke(isWhite)
                            cancel()
                        }
                    }




                    delay(100)
                }
            }


        }

        fun toggle() {
            if (counting) {
                counting = false
                stop = timeSource.markNow()
            } else {
                lastMark = timeSource.markNow()
                counting = true
            }

        }

        fun override(duration: Duration) {
            timeLeft = duration
        }

    }

    fun cancel(){
        whiteTimer.countJob?.cancel()
        blackTimer.countJob?.cancel()
    }
}
