# Implement Checkmate Detection

## Description
The chess game currently lacks **checkmate detection**. While check detection exists, the game doesn't recognize when a player is checkmated and should lose the game.

## Current State
- Check detection works (`inCheck()` function exists)
- Players can continue moving even when checkmated
- No win/loss game termination logic

## Expected Behavior
When a player's king is in check AND they have no legal moves to escape check, the game should declare **checkmate** and end the game with the opponent winning.

## Implementation Requirements

### Game Logic Changes Needed:
1. **Checkmate detection**: Combine "in check" + "no legal moves to escape" = checkmate
2. **Legal move validation**: Ensure all potential moves are tested against check
3. **Game termination**: Stop the game and declare winner
4. **UI feedback**: Display checkmate message and winner

### Files to Modify:
- `src/Main.kt`: Add checkmate detection and game termination logic
- `src/Piece.kt`: Ensure move validation properly prevents moves that leave king in check
- Add game state variables for win/loss tracking

### Technical Details:
- Build on existing `inCheck()` function
- For each piece of the player in check, test all possible moves
- Use `simulateMove()` to verify if any move gets the king out of check
- If no legal moves exist while in check = checkmate

### Algorithm:
```kotlin
fun checkForCheckmate(): Boolean {
    if (!inCheck(pieces)) return false // Not checkmate if not in check
    
    val currentPlayerPieces = pieces.filter { 
        if (whiteTurn) it.color == Colors.WHITE else it.color == Colors.BLACK 
    }
    
    for (piece in currentPlayerPieces) {
        for (x in 0..7) {
            for (y in 0..7) {
                if (simulateMove(Pair(piece.cx, piece.cy), Pair(x, y), piece)) {
                    return false // Found a legal move to escape check
                }
            }
        }
    }
    return true // No legal moves to escape check = checkmate
}
```

### Game State Management:
- Add variables: `gameOver: Boolean`, `winner: String?`
- Prevent further moves when `gameOver = true`
- Display winner announcement

## Acceptance Criteria
- [ ] Checkmate is correctly detected when king is in check with no escape moves
- [ ] Game ends immediately upon checkmate
- [ ] Correct player is declared the winner
- [ ] No false positives (stalemate incorrectly identified as checkmate)
- [ ] Works for both white and black players
- [ ] Players cannot make moves after checkmate

## Priority
**High** - Essential chess rule for proper game completion

## Labels
- `bug`
- `chess-rules`
- `game-logic`
- `win-conditions`