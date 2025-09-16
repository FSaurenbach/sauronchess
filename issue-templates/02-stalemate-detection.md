# Implement Stalemate Detection

## Description
The chess game currently lacks **stalemate detection**. Stalemate occurs when a player has no legal moves but their king is not in check, resulting in a draw.

## Current State
- Check detection is implemented
- Game continues even when stalemate conditions are met
- No draw detection for stalemate situations

## Expected Behavior
When a player's turn begins and they have:
1. No legal moves available
2. King is NOT in check

The game should declare a **draw by stalemate**.

## Implementation Requirements

### Game Logic Changes Needed:
1. **Legal move detection**: Function to check if any legal moves exist for current player
2. **Stalemate check**: Combine "no legal moves" + "not in check" = stalemate
3. **Game state management**: Handle draw state and prevent further moves
4. **UI feedback**: Display stalemate message to players

### Files to Modify:
- `src/Main.kt`: Add stalemate detection logic
- `src/Piece.kt`: Ensure move validation works with stalemate detection
- `src/Chessboard.kt`: Possibly add game state display

### Technical Details:
- Need function `hasLegalMoves(player)` that checks all pieces of current player
- For each piece, test if any move from `simulateMove()` returns true
- Call stalemate check at start of each turn
- Distinguish between stalemate (draw) and checkmate (loss)

### Algorithm:
```kotlin
fun checkForStalemate(): Boolean {
    if (inCheck(pieces)) return false // Not stalemate if in check
    
    val currentPlayerPieces = pieces.filter { 
        if (whiteTurn) it.color == Colors.WHITE else it.color == Colors.BLACK 
    }
    
    for (piece in currentPlayerPieces) {
        for (x in 0..7) {
            for (y in 0..7) {
                if (simulateMove(Pair(piece.cx, piece.cy), Pair(x, y), piece)) {
                    return false // Found a legal move, not stalemate
                }
            }
        }
    }
    return true // No legal moves found = stalemate
}
```

## Acceptance Criteria
- [ ] Stalemate is correctly detected when player has no legal moves and king not in check
- [ ] Game declares draw when stalemate occurs
- [ ] No false positives (checkmate incorrectly identified as stalemate)
- [ ] Works for both white and black players
- [ ] Game stops accepting moves after stalemate is declared

## Priority
**High** - Essential chess rule for proper game termination

## Labels
- `bug`
- `chess-rules`
- `game-logic`
- `draw-conditions`