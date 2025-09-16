# Missing Chess Features - Issue Templates

This document summarizes all the missing chess functions that need to be implemented in the SauronChess game. Each feature has a detailed issue template in the `issue-templates/` directory.

## Summary of Missing Features

### High Priority (Essential Chess Rules)
1. **[Stalemate Detection](issue-templates/02-stalemate-detection.md)** - Game should draw when player has no legal moves but king not in check
2. **[Checkmate Detection](issue-templates/03-checkmate-detection.md)** - Game should end when player is in check with no legal moves

### Medium Priority (Important Chess Rules) 
3. **[En Passant Capture](issue-templates/01-en-passant.md)** - Special pawn capture rule implementation
4. **[Pawn Promotion Choice](issue-templates/07-pawn-promotion-choice.md)** - Allow choosing promotion piece (currently hardcoded to Queen)
5. **[Threefold Repetition](issue-templates/04-threefold-repetition.md)** - Draw when same position occurs 3 times
6. **[Insufficient Material](issue-templates/06-insufficient-material.md)** - Auto-draw when checkmate impossible
7. **[Resignation](issue-templates/09-resignation.md)** - Allow players to resign/concede games

### Medium-Low Priority (Nice to Have)
8. **[50-Move Rule](issue-templates/05-fifty-move-rule.md)** - Draw after 50 moves without pawn move or capture
9. **[Game State Persistence](issue-templates/10-game-state-persistence.md)** - Save/load game functionality
10. **[Draw Offers](issue-templates/08-draw-offers.md)** - Allow players to offer/accept draws
11. **[Time Controls](issue-templates/11-time-controls.md)** - Chess clocks and time management

## Current Implementation Status

### ✅ Already Implemented
- ✅ Basic piece movement (all piece types)
- ✅ Castling (kingside and queenside)
- ✅ Check detection
- ✅ Basic pawn promotion (Queen only)
- ✅ Turn management
- ✅ Piece capture

### ❌ Missing (Needs Implementation)
- ❌ En passant capture
- ❌ Stalemate detection 
- ❌ Checkmate detection
- ❌ Draw by repetition
- ❌ 50-move rule
- ❌ Insufficient material detection
- ❌ Pawn promotion choice
- ❌ Draw offers
- ❌ Resignation
- ❌ Save/load games
- ❌ Time controls

## How to Use These Templates

1. **Copy template content** from the appropriate markdown file in `issue-templates/`
2. **Create new GitHub issue** in the repository
3. **Paste template content** as the issue description
4. **Add appropriate labels** as suggested in each template
5. **Assign priority** based on the recommendations

## Files That Will Need Modification

Based on the analysis, these are the main files that will need updates:

- **`src/Main.kt`** - Core game logic, state management, UI elements
- **`src/Piece.kt`** - Move validation, special moves (en passant, promotion)
- **`src/Chessboard.kt`** - Possibly for game state display
- **`src/Helpers.kt`** - Utility functions for new features

## Implementation Order Recommendation

1. **Start with game-ending conditions** (stalemate, checkmate) - these are most critical
2. **Add special moves** (en passant, pawn promotion choice) - improve gameplay
3. **Implement draw conditions** (repetition, 50-move, insufficient material) - complete rule set
4. **Add user features** (resignation, draw offers, save/load) - enhance experience
5. **Add time controls** last - nice-to-have for competitive play

## Testing Considerations

Each feature should be tested for:
- ✅ Correct rule implementation
- ✅ No regression of existing features  
- ✅ Both white and black player scenarios
- ✅ Edge cases and boundary conditions
- ✅ UI/UX usability

---

*Generated on: 2024-09-16*  
*Total Missing Features: 11*