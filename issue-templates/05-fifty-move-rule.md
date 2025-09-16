# Implement 50-Move Rule Draw

## Description
The chess game is missing the **50-move rule**. If 50 moves pass without a pawn move or piece capture, the game should be declared a draw.

## Current State
- No tracking of pawn moves or captures
- No move counting mechanism
- Games can continue indefinitely without progress

## Expected Behavior
When 50 consecutive moves (100 half-moves) occur without:
1. Any pawn move, OR  
2. Any piece capture

The game should automatically declare a draw.

## Implementation Requirements

### Game Logic Changes Needed:
1. **Move counter**: Track moves since last pawn move or capture  
2. **Reset conditions**: Reset counter on pawn moves or captures
3. **Draw detection**: Trigger draw at 50 moves (100 half-moves)
4. **Move tracking**: Integrate with existing move system

### Files to Modify:
- `src/Main.kt`: Add move counting and 50-move rule logic
- `src/Piece.kt`: Reset counter on pawn moves
- Integrate with capture detection in `doMove()`

### Technical Details:

#### Implementation Variables:
```kotlin
var movesSinceProgressCount = 0 // Half-moves since last pawn move or capture
val FIFTY_MOVE_LIMIT = 100 // 50 full moves = 100 half-moves
```

#### Integration Points:
```kotlin
// In doMove() function - reset counter on captures
fun doMove(piece: Piece, oldPos: Pair<Int, Int>, newPos: Pair<Int, Int>): Boolean {
    // ... existing code ...
    
    val pieceOnNewPos = findPiece(newPos.first, newPos.second)
    
    // Reset counter if piece captured
    if (pieceOnNewPos != null) {
        movesSinceProgressCount = 0
    }
    
    // Reset counter if pawn move
    if (piece.kind == PieceKind.WhitePawn || piece.kind == PieceKind.BlackPawn) {
        movesSinceProgressCount = 0
    } else {
        movesSinceProgressCount++
    }
    
    // Check for 50-move rule
    if (movesSinceProgressCount >= FIFTY_MOVE_LIMIT) {
        declareFiftyMoveRuleDraw()
        return true
    }
    
    // ... rest of existing code ...
}
```

#### Additional Considerations:
- Counter resets to 0 on any pawn move (including en passant)
- Counter resets to 0 on any capture (including en passant captures)  
- Pawn promotion counts as pawn move (resets counter)
- Counter increments on all other moves

### UI Integration:
- Consider displaying move counter to players
- Show warning when approaching 50-move limit
- Clear indication when draw is declared

## Acceptance Criteria
- [ ] Counter correctly tracks moves without pawn moves or captures
- [ ] Counter resets to 0 on any pawn move
- [ ] Counter resets to 0 on any piece capture  
- [ ] Draw is declared exactly at 50 moves (100 half-moves)
- [ ] Works correctly with en passant (both move and capture reset counter)
- [ ] Works correctly with pawn promotion
- [ ] No false positives or missed draw conditions

## Priority
**Low-Medium** - Standard chess rule but less commonly encountered in typical games

## Labels
- `enhancement`
- `chess-rules`
- `draw-conditions`
- `move-tracking`