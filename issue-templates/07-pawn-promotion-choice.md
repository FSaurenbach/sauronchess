# Implement Pawn Promotion Choice

## Description
The chess game currently **automatically promotes pawns to queens only**. Players should be able to choose which piece (Queen, Rook, Bishop, or Knight) to promote their pawn to.

## Current State
- Pawn promotion exists but only to Queen
- Code in `Piece.kt` around lines 130-139 hardcodes `PieceKind.WhiteQueen` and `PieceKind.BlackQueen`
- No user interface for promotion choice

## Expected Behavior
When a pawn reaches the opposite end of the board:
1. **Pause the game** and show promotion options
2. **Display choice UI** with Queen, Rook, Bishop, Knight options  
3. **Wait for player selection** before completing the move
4. **Transform pawn** to chosen piece type
5. **Resume game** with promoted piece

## Implementation Requirements

### UI Changes Needed:
1. **Promotion dialog**: Modal or overlay showing piece options
2. **Piece selection**: Clickable buttons/images for each piece type
3. **Visual feedback**: Show what each piece type looks like
4. **Game pause**: Prevent other moves during promotion selection

### Code Changes Needed:
- `src/Piece.kt`: Modify `promoteTo()` and promotion logic
- `src/Main.kt`: Add promotion UI management
- Add promotion selection state management

### Technical Details:

#### Current Code (around line 130 in Piece.kt):
```kotlin
/** Pawn promotion.*/
if (this.kind == PieceKind.WhitePawn && newPosition!!.second == 0) {
    println("promote")
    var newKind: PieceKind = PieceKind.WhiteQueen  // HARDCODED!
    promoteTo(newKind)
}
if (this.kind == PieceKind.BlackPawn && newPosition!!.second == 7) {
    println("promoting black")
    var newKind: PieceKind = PieceKind.BlackQueen  // HARDCODED!
    promoteTo(newKind)
}
```

#### Proposed Implementation:
```kotlin
// Add promotion state variables
var promotionInProgress = false
var promotionPiece: Piece? = null
var promotionPosition: Pair<Int, Int>? = null

// Modified promotion logic
if (this.kind == PieceKind.WhitePawn && newPosition!!.second == 0) {
    showPromotionDialog(this, newPosition!!, true) // true = white
    return // Don't complete move until promotion choice made
}
if (this.kind == PieceKind.BlackPawn && newPosition!!.second == 7) {
    showPromotionDialog(this, newPosition!!, false) // false = black
    return
}

fun showPromotionDialog(piece: Piece, position: Pair<Int, Int>, isWhite: Boolean) {
    promotionInProgress = true
    promotionPiece = piece
    promotionPosition = position
    
    // Create UI with 4 options: Queen, Rook, Bishop, Knight
    // Each option calls: completePromotion(pieceType)
}

fun completePromotion(newPieceType: PieceKind) {
    promotionPiece?.promoteTo(newPieceType)
    movePiece(promotionPiece!!, promotionPosition!!.first, promotionPosition!!.second)
    
    promotionInProgress = false
    promotionPiece = null
    promotionPosition = null
    whiteTurn = !whiteTurn
}
```

### UI Design Considerations:
- **Visual clarity**: Show piece images, not just text
- **Easy selection**: Large, clickable buttons
- **Game context**: Show which pawn is promoting and where
- **Accessibility**: Keyboard navigation support
- **Default option**: Highlight Queen as most common choice

## Acceptance Criteria
- [ ] Promotion dialog appears when pawn reaches end rank
- [ ] All four piece types (Queen, Rook, Bishop, Knight) are selectable
- [ ] Selected piece type is correctly applied to promoted pawn
- [ ] Game pauses during promotion selection (no other moves allowed)
- [ ] Works for both white and black pawns
- [ ] Promotion UI is visually clear and user-friendly
- [ ] Game resumes normally after promotion choice
- [ ] No regression in existing promotion functionality

## Priority
**Medium-High** - Significant improvement to gameplay flexibility and chess rule completeness

## Labels
- `enhancement`
- `chess-rules`
- `ui-improvement`
- `user-experience`