# Implement Time Controls

## Description
The chess game currently has **no time controls or chess clocks**. Players can take unlimited time for moves, which is unrealistic for proper chess games.

## Current State
- No time tracking or limitations
- Players can think indefinitely for each move
- No time pressure or game urgency
- No automatic loss by time (timeout)

## Expected Behavior
The game should support various time control formats:
1. **Blitz**: Short time controls (e.g., 5 minutes per player)
2. **Rapid**: Medium time controls (e.g., 15-30 minutes per player)  
3. **Classical**: Long time controls (e.g., 90+ minutes per player)
4. **Increment**: Additional time added per move (e.g., +5 seconds)
5. **Fischer**: Time added only if used (increment variant)

## Implementation Requirements

### Core Features:
1. **Chess clocks**: Visual timers for both players
2. **Time tracking**: Countdown during active player's turn
3. **Time selection**: Choose time controls before game starts
4. **Timeout detection**: Automatic loss when time expires
5. **Move timing**: Start/stop clocks on move completion

### UI Components:
1. **Clock display**: Large, visible timers for both players
2. **Time selection menu**: Pre-game time control options
3. **Time warnings**: Visual/audio alerts for low time
4. **Pause functionality**: Stop clocks when needed

### Files to Modify:
- `src/Main.kt`: Add time management and UI elements
- Modify game flow to include time tracking
- Add new time control selection scene

### Technical Details:

#### Time Management:
```kotlin
data class TimeControl(
    val initialTimeMs: Long,
    val incrementMs: Long = 0,
    val type: TimeControlType = TimeControlType.STANDARD
)

enum class TimeControlType {
    STANDARD,    // Fixed time per game
    INCREMENT,   // Add time each move
    FISCHER      // Add time only if clock was running
}

var whiteTimeMs: Long = 0
var blackTimeMs: Long = 0
var gameStartTime: Long = 0
var turnStartTime: Long = 0
var timeControl: TimeControl? = null
var gameTimer: Timer? = null

fun startGameClock(timeControl: TimeControl) {
    this.timeControl = timeControl
    whiteTimeMs = timeControl.initialTimeMs
    blackTimeMs = timeControl.initialTimeMs
    gameStartTime = System.currentTimeMillis()
    turnStartTime = gameStartTime
    
    startClockUpdates()
}

fun switchTurns() {
    val now = System.currentTimeMillis()
    val turnDuration = now - turnStartTime
    
    // Deduct time from current player
    if (whiteTurn) {
        whiteTimeMs = maxOf(0, whiteTimeMs - turnDuration)
        // Add increment if applicable
        if (timeControl?.incrementMs != 0) {
            whiteTimeMs += timeControl?.incrementMs ?: 0
        }
    } else {
        blackTimeMs = maxOf(0, blackTimeMs - turnDuration)
        if (timeControl?.incrementMs != 0) {
            blackTimeMs += timeControl?.incrementMs ?: 0
        }
    }
    
    // Check for timeout
    if ((whiteTurn && whiteTimeMs <= 0) || (!whiteTurn && blackTimeMs <= 0)) {
        handleTimeout()
        return
    }
    
    // Switch turns
    whiteTurn = !whiteTurn
    turnStartTime = now
}

fun handleTimeout() {
    val winner = if (whiteTurn) "Black" else "White"
    gameResult = "$winner wins on time"
    endGame()
}
```

#### UI Implementation:
```kotlin
// Clock display components
val whiteClockDisplay = text("15:00") {
    textSize = 32.0
    color = if (whiteTurn) Colors.GREEN else Colors.WHITE
    position(50, screenSizeY - 100)
}

val blackClockDisplay = text("15:00") {
    textSize = 32.0
    color = if (!whiteTurn) Colors.GREEN else Colors.WHITE
    position(50, 50)
}

fun updateClockDisplay() {
    val now = System.currentTimeMillis()
    val currentTurnTime = now - turnStartTime
    
    val whiteDisplayTime = if (whiteTurn) {
        maxOf(0, whiteTimeMs - currentTurnTime)
    } else whiteTimeMs
    
    val blackDisplayTime = if (!whiteTurn) {
        maxOf(0, blackTimeMs - currentTurnTime)
    } else blackTimeMs
    
    whiteClockDisplay.text = formatTime(whiteDisplayTime)
    blackClockDisplay.text = formatTime(blackDisplayTime)
    
    // Color coding for active player and low time
    whiteClockDisplay.color = when {
        whiteDisplayTime < 60000 -> Colors.RED
        whiteTurn -> Colors.GREEN
        else -> Colors.WHITE
    }
    
    blackClockDisplay.color = when {
        blackDisplayTime < 60000 -> Colors.RED
        !whiteTurn -> Colors.GREEN
        else -> Colors.WHITE
    }
}

fun formatTime(timeMs: Long): String {
    val totalSeconds = timeMs / 1000
    val minutes = totalSeconds / 60
    val seconds = totalSeconds % 60
    return "%02d:%02d".format(minutes, seconds)
}
```

#### Time Control Selection:
```kotlin
class TimeControlSelectionScene : Scene() {
    override suspend fun SContainer.sceneMain() {
        text("Select Time Control") {
            textSize = 36.0
            centerXOnStage()
            y = 100.0
            color = Colors.WHITE
        }
        
        // Blitz options
        createTimeControlButton("Blitz 3+2", TimeControl(3 * 60 * 1000, 2000), 200.0)
        createTimeControlButton("Blitz 5+0", TimeControl(5 * 60 * 1000, 0), 250.0)
        
        // Rapid options  
        createTimeControlButton("Rapid 15+5", TimeControl(15 * 60 * 1000, 5000), 300.0)
        createTimeControlButton("Rapid 30+0", TimeControl(30 * 60 * 1000, 0), 350.0)
    }
    
    private fun SContainer.createTimeControlButton(text: String, timeControl: TimeControl, y: Double) {
        text(text) {
            textSize = 24.0
            centerXOnStage()
            this.y = y
            color = Colors.CYAN
            
            onClick {
                startGameWithTimeControl(timeControl)
            }
        }
    }
}
```

## Acceptance Criteria
- [ ] Multiple time control options available before game start
- [ ] Chess clocks display correctly for both players
- [ ] Time counts down only for active player
- [ ] Games end automatically when player runs out of time
- [ ] Increment time controls work correctly (if implemented)
- [ ] Visual indicators show which player's clock is running
- [ ] Low time warnings (visual/color changes)
- [ ] Time display is accurate and updates smoothly
- [ ] Pause/resume functionality works if implemented

## Priority
**Medium-Low** - Enhances competitive play but not essential for basic chess

## Labels
- `enhancement`
- `game-features`
- `time-management`
- `competitive-play`