# Implement En Passant Capture

## Description
The chess game is currently missing the **en passant** capture rule. En passant is a special pawn capturing move in chess.

## Current State
- Basic pawn moves are implemented
- Regular diagonal pawn captures work
- En passant capture is not implemented

## Expected Behavior
When an opponent's pawn moves two squares forward from its starting position and lands next to your pawn, you should be able to capture it "en passant" on the very next turn.

## Implementation Requirements

### Game Logic Changes Needed:
1. **Track pawn double moves**: Need to track when a pawn moves two squares forward
2. **En passant opportunity detection**: Detect when an enemy pawn is vulnerable to en passant
3. **En passant move validation**: Allow en passant moves in `movePawn()` function
4. **Piece removal**: Remove the captured pawn (not at the destination square)
5. **Turn-based validity**: En passant must be done immediately on the next turn

### Files to Modify:
- `src/Piece.kt`: Update `movePawn()` method to handle en passant
- `src/Main.kt`: Add tracking for en passant opportunities
- Possibly add new global variables to track last move information

### Technical Details:
- Need to track the last moved piece and whether it was a two-square pawn move
- En passant capture removes the pawn that moved two squares (not the destination square)
- Only valid for one turn after the opponent's two-square pawn move

## Acceptance Criteria
- [ ] En passant captures work correctly for both white and black pawns
- [ ] En passant opportunity expires after one turn
- [ ] Captured pawn is removed from the correct position
- [ ] Move validation prevents invalid en passant attempts
- [ ] No regression in existing pawn move functionality

## Priority
**Medium** - This is a standard chess rule that affects gameplay completeness

## Labels
- `enhancement`
- `chess-rules`
- `gameplay`