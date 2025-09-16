# Implement Game State Persistence (Save/Load)

## Description
The chess game currently has **no save/load functionality**. Players cannot save their game progress and resume later, making long games impractical.

## Current State
- No game saving or loading capability
- Game state is lost when browser is closed or refreshed
- Players must complete games in single sessions

## Expected Behavior
Players should be able to:
1. **Save current game** at any point during play
2. **Load previously saved games** from main menu or during play
3. **Auto-save progress** periodically or after each move
4. **Resume games** with all state intact (positions, turn, special rights)

## Implementation Requirements

### Data to Persist:
1. **Piece positions**: All pieces and their current locations
2. **Game state**: Whose turn, check status
3. **Special rights**: Castling availability, en passant targets
4. **Move history**: For repetition detection and game review
5. **Game metadata**: Date saved, player names, time elapsed

### Storage Options:
- **localStorage**: Browser local storage (simplest)
- **IndexedDB**: For larger games with full history
- **Export/Import**: PGN or custom format files
- **Server storage**: If multiplayer is added later

### Files to Modify:
- `src/Main.kt`: Add save/load UI and game state management
- Add new save/load utility functions
- Modify game initialization to support loaded states

### Technical Details:

#### Game State Serialization:
```kotlin
data class GameSaveState(
    val pieces: List<PieceSaveData>,
    val whiteTurn: Boolean,
    val whiteKingInCheck: Boolean,
    val blackKingInCheck: Boolean,
    val whiteCastlingLegal: Boolean,
    val blackCastlingLegal: Boolean,
    val moveHistory: List<String>,
    val timestamp: Long,
    val moveCount: Int
)

data class PieceSaveData(
    val kind: PieceKind,
    val color: String,
    val cx: Int,
    val cy: Int,
    val disabled: Boolean
)

fun saveGameState(): GameSaveState {
    return GameSaveState(
        pieces = pieces.map { PieceSaveData(it.kind, it.color.hexString, it.cx, it.cy, it.disabled) },
        whiteTurn = whiteTurn,
        whiteKingInCheck = whiteKingInCheck,
        blackKingInCheck = blackKingInCheck,
        whiteCastlingLegal = whiteCastlingLegal,
        blackCastlingLegal = blackCastlingLegal,
        moveHistory = moveHistory, // Need to implement move history tracking
        timestamp = System.currentTimeMillis(),
        moveCount = getCurrentMoveCount()
    )
}

fun saveToLocalStorage(saveState: GameSaveState) {
    val json = Json.encodeToString(saveState)
    kotlinx.browser.localStorage.setItem("sauronchess_save", json)
}

fun loadFromLocalStorage(): GameSaveState? {
    val json = kotlinx.browser.localStorage.getItem("sauronchess_save")
    return if (json != null) {
        Json.decodeFromString<GameSaveState>(json)
    } else null
}
```

#### Game State Restoration:
```kotlin
fun restoreGameState(saveState: GameSaveState) {
    // Clear current game
    pieces.clear()
    
    // Restore pieces
    saveState.pieces.forEach { pieceData ->
        val piece = chessboard.piece(
            kind = pieceData.kind,
            color = Colors[pieceData.color],
            cx = pieceData.cx,
            cy = pieceData.cy,
            disabled = pieceData.disabled,
            isWhite = pieceData.color == Colors.WHITE.hexString
        )
    }
    
    // Restore game state
    whiteTurn = saveState.whiteTurn
    whiteKingInCheck = saveState.whiteKingInCheck
    blackKingInCheck = saveState.blackKingInCheck
    whiteCastlingLegal = saveState.whiteCastlingLegal
    blackCastlingLegal = saveState.blackCastlingLegal
    
    // Restore move history if implemented
    moveHistory = saveState.moveHistory.toMutableList()
}
```

#### UI Integration:
```kotlin
// Add to main menu or game UI
val saveButton = text("Save Game") {
    color = Colors.WHITE
    textSize = 20.0
    onClick {
        val saveState = saveGameState()
        saveToLocalStorage(saveState)
        showSaveConfirmation()
    }
}

val loadButton = text("Load Game") {
    color = Colors.WHITE  
    textSize = 20.0
    onClick {
        val saveState = loadFromLocalStorage()
        if (saveState != null) {
            restoreGameState(saveState)
            showLoadConfirmation()
        } else {
            showNoSaveFoundMessage()
        }
    }
}
```

### Advanced Features:
- **Multiple save slots**: Allow multiple saved games
- **Auto-save**: Automatically save after each move
- **Save game naming**: Let players name their saves
- **Save file export**: Download saves as files
- **PGN format**: Standard chess notation for compatibility

## Acceptance Criteria
- [ ] Game state can be saved at any point during play
- [ ] Saved games can be loaded and resume correctly
- [ ] All game elements are preserved (pieces, turns, special rights)
- [ ] Save/load UI is intuitive and accessible
- [ ] Browser refresh doesn't lose unsaved progress (auto-save)
- [ ] Multiple save slots or save management
- [ ] Save data persistence across browser sessions
- [ ] Error handling for corrupted or missing save data

## Priority
**Medium** - Significantly improves user experience for longer games

## Labels
- `enhancement`
- `user-experience`
- `persistence`
- `local-storage`