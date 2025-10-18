package de.fsaurenbach.sauronchess

import korlibs.image.color.*
import korlibs.korge.view.*
import korlibs.korge.view.align.*
import korlibs.math.geom.*
import korlibs.time.*
import kotlinx.coroutines.*
import kotlin.properties.*

/**
 * Chess clock component that tracks time for both players
 */
class ChessClock : Container() {
    private var whiteTimeRemaining: TimeSpan = TimeSpan.NIL
    private var blackTimeRemaining: TimeSpan = TimeSpan.NIL
    private var isRunning = false
    private var currentPlayerIsWhite = true
    
    private lateinit var whiteTimeText: Text
    private lateinit var blackTimeText: Text
    private lateinit var whiteBackground: RoundRect
    private lateinit var blackBackground: RoundRect
    
    private var timerJob: Job? = null
    
    init {
        setupUI()
    }
    
    private fun setupUI() {
        val clockWidth = 120.0
        val clockHeight = 60.0
        val corners = RectCorners(8)
        
        // Black clock (top)
        blackBackground = roundRect(Size(clockWidth, clockHeight), corners, Colors.DARKGRAY) {
            position(0, 0)
        }
        
        blackTimeText = text("", 24, Colors.WHITE) {
            centerOn(blackBackground)
        }
        
        // White clock (bottom)
        whiteBackground = roundRect(Size(clockWidth, clockHeight), corners, Colors.DARKGRAY) {
            position(0, clockHeight + 10)
        }
        
        whiteTimeText = text("", 24, Colors.WHITE) {
            centerOn(whiteBackground)
        }
    }
    
    fun initialize(initialTime: TimeSpan) {
        whiteTimeRemaining = initialTime
        blackTimeRemaining = initialTime
        currentPlayerIsWhite = true
        isRunning = false
        updateDisplay()
    }
    
    fun start() {
        if (!isRunning) {
            isRunning = true
            startTimer()
        }
    }
    
    fun stop() {
        isRunning = false
        timerJob?.cancel()
        timerJob = null
    }
    
    fun switchTurn() {
        currentPlayerIsWhite = !currentPlayerIsWhite
        updateDisplay()
    }
    
    private fun startTimer() {
        timerJob?.cancel()
        timerJob = GameState.sceneContainer.launch {
            while (isRunning) {
                delay(100) // Update every 100ms
                
                if (currentPlayerIsWhite) {
                    whiteTimeRemaining -= TimeSpan(100.0)
                    if (whiteTimeRemaining <= TimeSpan.ZERO) {
                        whiteTimeRemaining = TimeSpan.ZERO
                        handleTimeExpired(isWhite = true)
                        return@launch
                    }
                } else {
                    blackTimeRemaining -= TimeSpan(100.0)
                    if (blackTimeRemaining <= TimeSpan.ZERO) {
                        blackTimeRemaining = TimeSpan.ZERO
                        handleTimeExpired(isWhite = false)
                        return@launch
                    }
                }
                
                updateDisplay()
            }
        }
    }
    
    private fun updateDisplay() {
        whiteTimeText.text = formatTime(whiteTimeRemaining)
        blackTimeText.text = formatTime(blackTimeRemaining)
        
        // Highlight active clock
        if (isRunning) {
            whiteBackground.color = if (currentPlayerIsWhite) Colors.GREEN else Colors.DARKGRAY
            blackBackground.color = if (!currentPlayerIsWhite) Colors.GREEN else Colors.DARKGRAY
        } else {
            whiteBackground.color = Colors.DARKGRAY
            blackBackground.color = Colors.DARKGRAY
        }
        
        // Re-center text after updating
        whiteTimeText.centerOn(whiteBackground)
        blackTimeText.centerOn(blackBackground)
    }
    
    private fun formatTime(time: TimeSpan): String {
        val totalSeconds = time.seconds.toInt()
        val minutes = totalSeconds / 60
        val seconds = totalSeconds % 60
        return "%d:%02d".format(minutes, seconds)
    }
    
    private suspend fun handleTimeExpired(isWhite: Boolean) {
        stop()
        val winner = if (isWhite) "Black" else "White"
        val text = GameState.sceneContainer.text("TIME OUT!\n$winner wins!", 50, Colors.RED)
        text.centerOnStage()
        delay(4000)
        
        if (GameState.onlinePlay) {
            sendGameOver(draw = false)
        } else {
            GameState.sceneContainer.launch { GameState.sceneContainer.changeTo { Wizard() } }.invokeOnCompletion {
                text.removeFromParent()
                GameState.reset()
            }
        }
    }
    
    fun getWhiteTime(): TimeSpan = whiteTimeRemaining
    fun getBlackTime(): TimeSpan = blackTimeRemaining
}
