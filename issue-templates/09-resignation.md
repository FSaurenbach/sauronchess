# Implement Resignation Functionality

## Description
The chess game is missing **resignation functionality**. Players should be able to resign from the game, immediately ending it with their opponent winning.

## Current State
- No way for players to concede/resign
- Games must continue until checkmate, stalemate, or draw conditions
- Players in losing positions cannot gracefully end the game

## Expected Behavior
Players should be able to:
1. **Resign during their turn** (or opponent's turn in some implementations)
2. **Confirm resignation** to prevent accidental clicks
3. **End the game immediately** with opponent declared winner
4. **See clear game result** showing resignation

## Implementation Requirements

### UI Changes Needed:
1. **Resign button**: Always available during game
2. **Confirmation dialog**: "Are you sure you want to resign?"
3. **Game result display**: Show winner and method (resignation)
4. **Post-game state**: Prevent further moves after resignation

### Game Logic Changes:
1. **Resignation handling**: Immediate game termination
2. **Winner determination**: Opponent of resigning player wins
3. **Game state management**: Mark game as ended by resignation
4. **Turn management**: Resignation can interrupt normal turn flow

### Files to Modify:
- `src/Main.kt`: Add resignation logic and game termination
- Add UI elements to GameScene
- Add game state tracking for resignation

### Technical Details:

#### Core Implementation:
```kotlin
var gameEnded = false
var gameResult: String? = null
var winner: String? = null

fun resignGame() {
    showResignationConfirmation()
}

fun confirmResignation() {
    gameEnded = true
    winner = if (whiteTurn) "Black" else "White"
    gameResult = "${if (whiteTurn) "White" else "Black"} resigned"
    
    showGameResult()
    disableAllMoves()
}

fun showResignationConfirmation() {
    // Show modal dialog with "Are you sure?" message
    // Include "Yes, Resign" and "Cancel" buttons
}

fun disableAllMoves() {
    // Prevent any further piece movement
    pieces.forEach { it.disabled = true }
}
```

#### UI Integration:
```kotlin
// Add to GameScene
val resignButton = text("Resign") {
    color = Colors.WHITE
    textSize = 20.0
    position(screenSizeX - 100, 50)
    
    onClick {
        if (!gameEnded) {
            resignGame()
        }
    }
}

// Resignation confirmation dialog
val resignationDialog = container {
    visible = false
    
    val background = roundRect(Size(400, 200), RectCorners(15), Colors["#444444"])
    centerOnStage()
    
    text("Are you sure you want to resign?") {
        centerXOn(background)
        y = 50.0
        color = Colors.WHITE
        textSize = 24.0
    }
    
    val yesButton = text("Yes, Resign") {
        position(50, 120)
        color = Colors.RED
        textSize = 20.0
        onClick {
            confirmResignation()
            this@container.visible = false
        }
    }
    
    val cancelButton = text("Cancel") {
        position(250, 120)
        color = Colors.GREEN  
        textSize = 20.0
        onClick {
            this@container.visible = false
        }
    }
}
```

### Game Result Display:
```kotlin
fun showGameResult() {
    val resultDialog = container {
        val background = roundRect(Size(500, 300), RectCorners(20), Colors["#2A2A2A"])
        centerOnStage()
        
        text("Game Over") {
            centerXOn(background)
            y = 50.0
            color = Colors.WHITE
            textSize = 36.0
        }
        
        text("$winner wins by resignation") {
            centerXOn(background)
            y = 120.0
            color = Colors.YELLOW
            textSize = 24.0
        }
        
        text("New Game") {
            centerXOn(background)
            y = 200.0
            color = Colors.GREEN
            textSize = 20.0
            onClick {
                startNewGame()
            }
        }
    }
}
```

### Additional Considerations:
- **Confirmation dialog**: Prevent accidental resignations
- **Timing**: Allow resignation at any time during game
- **Visual feedback**: Clear indication of game end
- **Statistics**: Track resignation in game history (if implemented)
- **Accessibility**: Keyboard shortcuts for resignation

## Acceptance Criteria
- [ ] Resign button is always visible during active game
- [ ] Resignation requires confirmation to prevent accidents
- [ ] Game ends immediately upon confirmed resignation
- [ ] Correct player is declared winner
- [ ] No further moves possible after resignation
- [ ] Game result clearly shows resignation as end condition
- [ ] New game can be started after resignation
- [ ] Works correctly regardless of whose turn it is

## Priority
**Medium** - Important for user experience and standard chess functionality

## Labels
- `enhancement`
- `user-interface`
- `game-features`
- `user-experience`