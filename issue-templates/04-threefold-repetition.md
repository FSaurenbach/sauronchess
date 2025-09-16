# Implement Draw by Threefold Repetition

## Description
The chess game is missing the **threefold repetition** draw rule. When the same position occurs three times, either player can claim a draw.

## Current State
- No position tracking or repetition detection
- Games continue indefinitely even with repeated positions
- No draw mechanisms beyond stalemate

## Expected Behavior
When the same board position (including turn to move, castling rights, and en passant possibilities) occurs three times during the game, a draw should be automatically declared or claimable.

## Implementation Requirements

### Game Logic Changes Needed:
1. **Position hashing**: Create unique identifiers for board positions
2. **Position history**: Track all positions that have occurred
3. **Repetition detection**: Count position occurrences
4. **Draw declaration**: Automatically or manually trigger draw

### Files to Modify:
- `src/Main.kt`: Add position tracking and repetition logic
- `src/Piece.kt`: Integrate position recording after each move
- Add new data structures for position history

### Technical Details:

#### Position State Components:
- Board position (piece locations)
- Active player (whose turn)
- Castling availability (white/black kingside/queenside)
- En passant target square (if any)

#### Implementation Approach:
```kotlin
data class GamePosition(
    val boardState: String, // Serialized board position
    val isWhiteTurn: Boolean,
    val whiteCastlingAvailable: Boolean,
    val blackCastlingAvailable: Boolean,
    val enPassantTarget: Pair<Int, Int>? // null if no en passant available
)

var positionHistory = mutableListOf<GamePosition>()
var positionCounts = mutableMapOf<GamePosition, Int>()

fun recordPosition() {
    val currentPosition = getCurrentPosition()
    positionHistory.add(currentPosition)
    positionCounts[currentPosition] = positionCounts.getOrDefault(currentPosition, 0) + 1
    
    if (positionCounts[currentPosition]!! >= 3) {
        declareDrawByRepetition()
    }
}

fun getCurrentPosition(): GamePosition {
    val boardState = pieces.sortedBy { "${it.cx}-${it.cy}" }
        .joinToString(",") { "${it.kind}-${it.cx}-${it.cy}" }
    
    return GamePosition(
        boardState = boardState,
        isWhiteTurn = whiteTurn,
        whiteCastlingAvailable = whiteCastlingLegal,
        blackCastlingAvailable = blackCastlingLegal,
        enPassantTarget = getEnPassantTarget() // Need to implement
    )
}
```

### Additional Considerations:
- Position must be identical in ALL aspects (not just piece placement)
- Positions separated by different moves still count as same position
- Need efficient position comparison (consider using hash codes)

## Acceptance Criteria
- [ ] Same positions are correctly identified across different move sequences
- [ ] Threefold repetition triggers automatic draw
- [ ] Position tracking includes all relevant game state (castling, en passant)
- [ ] Performance remains acceptable with position history tracking
- [ ] Draw is declared exactly when third repetition occurs
- [ ] Works correctly with other draw conditions

## Priority
**Medium** - Important for preventing infinite games and chess rule completeness

## Labels
- `enhancement`
- `chess-rules`
- `draw-conditions`
- `performance`