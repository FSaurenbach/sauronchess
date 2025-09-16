# Implement Insufficient Material Draw Detection

## Description
The chess game is missing **insufficient material** draw detection. When neither player has enough pieces to deliver checkmate, the game should automatically end in a draw.

## Current State
- Games continue even when checkmate is impossible
- No analysis of remaining material on the board
- Players must manually abandon hopeless endgames

## Expected Behavior
The game should automatically declare a draw when neither side has sufficient material to achieve checkmate, including scenarios like:
- King vs King
- King + Bishop vs King  
- King + Knight vs King
- King + Bishop vs King + Bishop (same color squares)

## Implementation Requirements

### Game Logic Changes Needed:
1. **Material analysis**: Count and categorize remaining pieces
2. **Checkmate possibility**: Determine if checkmate is theoretically possible
3. **Draw declaration**: Automatically end game when material is insufficient
4. **Integration**: Check after each piece capture

### Files to Modify:
- `src/Main.kt`: Add insufficient material detection
- `src/Piece.kt`: Integrate checking after captures
- Possibly add new utility functions for material analysis

### Technical Details:

#### Insufficient Material Scenarios:
```kotlin
fun hasInsufficientMaterial(): Boolean {
    val whitePieces = pieces.filter { it.color == Colors.WHITE && !it.disabled }
    val blackPieces = pieces.filter { it.color == Colors.BLACK && !it.disabled }
    
    return isInsufficientMaterial(whitePieces) && isInsufficientMaterial(blackPieces)
}

fun isInsufficientMaterial(playerPieces: List<Piece>): Boolean {
    val pieceTypes = playerPieces.map { it.kind }.toSet()
    
    return when {
        // King only
        pieceTypes.size == 1 && pieceTypes.contains(PieceKind.WhiteKing || PieceKind.BlackKing) -> true
        
        // King + Bishop only  
        pieceTypes.size == 2 && pieceTypes.any { it.toString().contains("King") } 
            && pieceTypes.any { it.toString().contains("Bishop") } -> true
            
        // King + Knight only
        pieceTypes.size == 2 && pieceTypes.any { it.toString().contains("King") }
            && pieceTypes.any { it.toString().contains("Knight") } -> true
            
        else -> false
    }
}
```

#### Special Cases to Handle:
- **King + Bishop vs King + Bishop**: Draw only if bishops on same color squares
- **Multiple Knights**: King + 2+ Knights can theoretically mate (rare but possible)
- **King + Bishop + Knight**: Can achieve mate (sufficient material)

#### Advanced Implementation:
```kotlin
fun checkBishopSquareColors(): Boolean {
    val whiteBishops = pieces.filter { 
        it.kind == PieceKind.WhiteBishop && !it.disabled 
    }
    val blackBishops = pieces.filter { 
        it.kind == PieceKind.BlackBishop && !it.disabled 
    }
    
    if (whiteBishops.size == 1 && blackBishops.size == 1) {
        val whiteSquareColor = (whiteBishops[0].cx + whiteBishops[0].cy) % 2
        val blackSquareColor = (blackBishops[0].cx + blackBishops[0].cy) % 2
        return whiteSquareColor == blackSquareColor // Same color = draw
    }
    return false
}
```

### Integration Point:
```kotlin
// Add to doMove() after successful capture
if (pieceOnNewPos != null) {
    removePiece(pieceOnNewPos)
    if (hasInsufficientMaterial()) {
        declareInsufficientMaterialDraw()
        return true
    }
}
```

## Acceptance Criteria
- [ ] King vs King automatically draws
- [ ] King + Bishop vs King automatically draws  
- [ ] King + Knight vs King automatically draws
- [ ] King + Bishop vs King + Bishop draws when bishops on same color squares
- [ ] Sufficient material combinations do NOT trigger draw
- [ ] Detection works immediately after capturing pieces
- [ ] Both players' material is considered simultaneously
- [ ] Clear indication to players why draw was declared

## Priority
**Medium** - Prevents pointless continuation of impossible-to-win games

## Labels
- `enhancement`
- `chess-rules`
- `draw-conditions`
- `endgame`