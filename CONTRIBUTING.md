# Contributing to SauronChess 🏰♟️

Thank you for your interest in contributing to SauronChess! This document provides guidelines and information for contributors.

## 🚀 Getting Started

### Development Setup
1. **Fork the repository** on GitHub
2. **Clone your fork**: `git clone https://github.com/YOUR_USERNAME/sauronchess.git`
3. **Set up Java 21+**: Ensure you have Java 21 or newer installed
4. **Test the build**: Run `./gradlew build` to ensure everything works

### Running the Game
```bash
# Desktop version (fastest for development)
./gradlew runJvm

# Web version 
./gradlew runJs

# Android version (requires Android SDK)
./gradlew runAndroid
```

## 🎯 Priority Contributions

### 🚨 **Critical Features Needed**
1. **Checkmate Detection** - The game currently detects check but doesn't end on checkmate
2. **Stalemate Detection** - Need to detect when no legal moves are available
3. **En Passant** - Missing this special pawn capture rule
4. **Game Over UI** - Show winner/draw with restart option

### 🎨 **Quality Improvements**
- **Move Animation** - Smooth piece movement instead of instant teleport
- **Sound Effects** - Audio feedback for moves, captures, check
- **Better UI** - Game menus, settings, move history display
- **Code Documentation** - More KDoc comments for public APIs

### 🧠 **Advanced Features**
- **AI Opponent** - Computer player with different difficulty levels
- **Online Multiplayer** - Network play capability
- **Move Notation** - Display algebraic notation for moves
- **Game Analysis** - Show move suggestions or analysis

## 📝 Coding Guidelines

### Kotlin Style
- Follow [Kotlin coding conventions](https://kotlinlang.org/docs/coding-conventions.html)
- Use meaningful variable and function names
- Add KDoc comments for public APIs
- Keep functions focused and small

### Architecture
- Keep game logic separate from UI code
- Use KorGE patterns and conventions
- Maintain the existing container-based UI structure
- Add proper error handling

### Code Quality
- Test your changes thoroughly
- Ensure cross-platform compatibility (JVM, JS, Android)
- Run the linter: `./gradlew detekt`
- Check that builds work: `./gradlew build`

## 🧪 Testing

### Manual Testing Checklist
- [ ] All piece types move correctly
- [ ] Check detection works
- [ ] Castling works (both sides)
- [ ] Pawn promotion functions
- [ ] Drag and drop feels responsive
- [ ] Game works on different platforms

### Test Cases to Verify
- Basic piece movement (all types)
- Capture mechanics
- Check detection and prevention
- Castling rules and restrictions
- Pawn promotion
- Turn alternation
- Invalid move rejection

## 🐛 Bug Reports

When reporting bugs, please include:
- **Steps to reproduce** the issue
- **Expected behavior** vs actual behavior
- **Platform** (JVM, JS, Android)
- **Java version** and OS
- **Screenshots** if applicable

## 💡 Feature Requests

For new features:
- Check if it's already in the [Priority Issues](#-priority-contributions)
- Explain the **use case** and **benefit**
- Consider **implementation complexity**
- Think about **cross-platform compatibility**

## 🔧 Development Tips

### Working with KorGE
- Use `Container` for grouping UI elements
- Leverage `draggableCloseable` for interactive elements
- Use `position()` and `centerOn()` for layout
- Handle mouse events with `onClick` and drag handlers

### Chess Logic
- Study the existing `moveChecker` functions in `Piece.kt`
- Understand the coordinate system (0-7, with (0,0) at top-left black corner)
- Use `simulateMove` for move validation
- Check `inCheck` function for king safety

### Debugging
- Use `println()` for console debugging (already used throughout)
- Test with `./gradlew runJvm` for fastest iteration
- Use browser dev tools for JS debugging

## 📚 Resources

### Chess Rules
- [Official FIDE Laws of Chess](https://www.fide.com/FIDE/handbook/LawsOfChess.pdf)
- [Chess Programming Wiki](https://www.chessprogramming.org/)

### KorGE Documentation
- [KorGE Official Docs](https://docs.korge.org/)
- [KorGE Samples](https://github.com/korlibs/korge-samples)

### Kotlin Resources
- [Kotlin Documentation](https://kotlinlang.org/docs/)
- [Kotlin Style Guide](https://kotlinlang.org/docs/coding-conventions.html)

## 📬 Communication

- **Issues**: Use GitHub issues for bugs and feature requests
- **Discussions**: GitHub discussions for questions and ideas
- **Pull Requests**: For code contributions

## 📄 License

By contributing to SauronChess, you agree that your contributions will be licensed under the same MIT License that covers the project.

---

**Happy Contributing! 🎉**

*Remember: Every contribution, no matter how small, makes SauronChess better for everyone!*