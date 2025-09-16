# Implement Draw Offers

## Description
The chess game is missing **draw offer functionality**. Players should be able to offer draws to their opponent, who can accept or decline.

## Current State
- No mechanism for players to offer draws
- Games can only end through checkmate, stalemate, or automatic draw conditions
- No player-initiated game termination except implicit abandonment

## Expected Behavior
Players should be able to:
1. **Offer a draw** during their turn
2. **See opponent's draw offer** and choose to accept or decline
3. **Withdraw draw offers** if not yet responded to
4. **End the game** immediately when draw offer is accepted

## Implementation Requirements

### UI Changes Needed:
1. **Draw offer button**: Visible during player's turn
2. **Draw offer notification**: Show when opponent offers draw
3. **Accept/Decline buttons**: Response options for draw offers
4. **Visual feedback**: Indicate when draw offer is pending

### Game Logic Changes:
1. **Draw offer state**: Track who offered draw and when
2. **Turn integration**: Draw offers available during player's turn
3. **Offer expiration**: Offers expire when opponent makes a move (optional)
4. **Game termination**: End game as draw when accepted

### Files to Modify:
- `src/Main.kt`: Add draw offer management and UI
- Add new UI elements to the game scene
- Add game state tracking for draw offers

### Technical Details:

#### State Management:
```kotlin
var drawOfferPending = false
var drawOfferedBy: Boolean? = null // true = white offered, false = black offered, null = no offer

fun offerDraw() {
    if (!drawOfferPending) {
        drawOfferPending = true
        drawOfferedBy = whiteTurn
        showDrawOfferNotification()
    }
}

fun acceptDraw() {
    if (drawOfferPending) {
        declareDrawByAgreement()
        endGame(result = "Draw by agreement")
    }
}

fun declineDraw() {
    drawOfferPending = false
    drawOfferedBy = null
    hideDrawOfferNotification()
}
```

#### UI Integration:
```kotlin
// Add to GameScene
val drawOfferButton = text("Offer Draw") {
    color = Colors.WHITE
    textSize = 20.0
    position(50, 50)
    
    onClick {
        if (canOfferDraw()) {
            offerDraw()
        }
    }
}

// Draw offer notification
val drawOfferNotification = container {
    visible = false
    val background = roundRect(Size(300, 100), RectCorners(10), Colors["#4444AA"])
    text("Draw Offered") {
        centerOn(background)
        color = Colors.WHITE
    }
    
    text("Accept") {
        position(50, 60)
        color = Colors.GREEN
        onClick { acceptDraw() }
    }
    
    text("Decline") {
        position(200, 60)  
        color = Colors.RED
        onClick { declineDraw() }
    }
}
```

### Game Rules Integration:
- Draw offers typically available only during player's own turn
- Offers can be made before or after making a move
- Some implementations auto-decline offers when opponent moves
- Draw by agreement is immediate (no take-backs)

### Additional Features:
- **Draw offer history**: Track previous offers in game
- **Multiple offers**: Allow repeated offers (with etiquette considerations)
- **Sound/visual cues**: Notify players clearly when draw is offered

## Acceptance Criteria
- [ ] Players can offer draws during their turn
- [ ] Draw offer notifications are clearly visible to opponent
- [ ] Accept/decline functionality works correctly
- [ ] Game ends immediately when draw is accepted
- [ ] Draw offers are properly managed (not duplicated/confused)
- [ ] UI is intuitive and doesn't interfere with normal gameplay
- [ ] Both players can offer draws (not just one side)
- [ ] Draw offers are cleared/handled appropriately when declined

## Priority
**Low-Medium** - Nice-to-have feature for complete chess experience

## Labels
- `enhancement`
- `user-interface`
- `game-features`
- `draw-conditions`