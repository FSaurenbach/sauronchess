# 🏰 SauronChess ♟️

> *"One does not simply play chess... but in Kotlin, you can!"*

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/09437976fa054f2cb7ad3f32504b4132)](https://app.codacy.com/gh/FSaurenbach/sauronchess/dashboard?utm_source=gh&utm_medium=referral&utm_content=&utm_campaign=Badge_grade)
[![License](https://img.shields.io/github/license/FSaurenbach/sauronchess?style=flat-square)](LICENSE)
[![Kotlin](https://img.shields.io/badge/Kotlin-1.9.22-purple?style=flat-square&logo=kotlin)](https://kotlinlang.org/)
[![KorGE](https://img.shields.io/badge/KorGE-6.0.0-blue?style=flat-square)](https://korge.org/)
[![Platform](https://img.shields.io/badge/Platform-JVM%20%7C%20JS%20%7C%20Android-green?style=flat-square)](#platform-support)

A modern, cross-platform chess game built with Kotlin and KorGE game engine. Experience the timeless game of chess with smooth animations, intuitive drag-and-drop controls, and professional-grade chess mechanics.

## 🎮 **[Play Now!](https://fsaurenbach.github.io/sauronchess)** 🎮

---

## ✨ Features

### 🎯 **Chess Implementation**
- ✅ **Smart Movement**: Intelligent piece movement validation
- ✅ **Check Detection**: Advanced king safety detection
- ✅ **Special Moves**: Castling (kingside & queenside)
- ✅ **Pawn Promotion**: Automatic promotion to Queen
- 🔄 **Checkmate Detection**: *Currently in development*
- 🔄 **En Passant**: *Currently in development*
- 🔄 **Stalemate Detection**: *Currently in development*

### 🎨 **Beautiful Interface**
- ✅ **Visual Board**: Classic brown and white checkered design
- ✅ **Professional Pieces**: High-quality chess piece sprites
- ✅ **Drag & Drop**: Intuitive piece movement
- ✅ **Move Hints**: Visual indicators for valid moves
- ✅ **Attack Highlights**: Red circles show capture opportunities
- ✅ **Smooth Animations**: Polished piece movement and scaling

### 🎲 **Game Mechanics**
- ✅ **Turn-Based Play**: Proper alternating turns
- ✅ **Piece Capture**: Full capture mechanics
- ✅ **Move Validation**: Prevents illegal moves
- ✅ **King Safety**: Cannot move into check
- ✅ **Castling Rights**: Properly tracks castling availability
- ✅ **Board Notation**: Algebraic notation display (a1-h8)

### 🚀 **Technical Excellence**
- ✅ **Cross-Platform**: JVM, JavaScript, and Android support
- ✅ **Modern Kotlin**: Clean, idiomatic Kotlin code
- ✅ **KorGE Engine**: Powerful 2D game engine
- ✅ **Responsive Design**: Adaptive to different screen sizes
- ✅ **Code Quality**: Codacy Grade A rating

---

## 🚀 Quick Start

### Prerequisites
- **Java 21+** (Required for KorGE 6.0.0)
- **Git** for cloning the repository
- **Network Access** for downloading Android build tools (if building for Android)

### 🏃‍♂️ Run Instantly
```bash
git clone https://github.com/FSaurenbach/sauronchess.git
cd sauronchess
./gradlew runJvm
```

### 🌐 Platform Support

| Platform | Command | Status |
|----------|---------|--------|
| **Desktop (JVM)** | `./gradlew runJvm` | ✅ Ready |
| **Web (JS)** | `./gradlew runJs` | ✅ Ready |
| **Android** | `./gradlew runAndroid` | ✅ Ready |

---

## 🏗️ Architecture

### 📁 Project Structure
```
src/
├── Main.kt          # Game entry point and scene management
├── Piece.kt         # Chess piece logic and movement rules  
├── Chessboard.kt    # Board initialization and helpers
├── Cell.kt          # Individual board cell representation
├── Helpers.kt       # Utility functions and piece management
└── resources/       # Chess piece sprites and assets
    ├── w_*.png      # White piece sprites
    ├── b_*.png      # Black piece sprites
    └── ...
```

### 🧠 Core Components

**🎮 Game Engine**: Built on KorGE for cross-platform 2D rendering
- Scene management with `GameScene`
- Container-based UI architecture  
- Event-driven input handling with drag-and-drop

**♟️ Chess Logic**: Professional-grade chess implementation
- `Piece` class with individual movement validation methods
- Smart check detection system (`inCheck` function)
- Turn-based gameplay with proper move validation
- Castling logic with legal move tracking

**🎨 Visual System**: Modern game interface
- Dynamic move highlighting with colored circles
- Drag-and-drop with visual feedback and scaling
- Responsive board layout with algebraic notation
- Professional piece sprites for all chess pieces

**🏗️ Architecture Patterns**
- **Container Composition**: UI built with nested containers
- **Event-Driven**: Mouse events drive piece movement
- **State Management**: Global variables track game state
- **Validation Chain**: Multiple layers of move validation

---

## 🎯 Implementation Status

| Feature | Status | Description |
|---------|--------|-------------|
| **Basic Movement** | ✅ Complete | All pieces move according to chess rules |
| **Capture Mechanics** | ✅ Complete | Pieces can capture opponent pieces |
| **Check Detection** | ✅ Complete | Detects when kings are in check |
| **Checkmate Logic** | 🔄 In Progress | Game ending conditions need implementation |
| **Castling** | ✅ Complete | Both kingside and queenside castling |
| **Pawn Promotion** | ✅ Complete | Pawns promote to Queen automatically |
| **Turn Management** | ✅ Complete | Proper turn-based gameplay |
| **Move Validation** | ✅ Complete | Prevents illegal moves |
| **Visual Interface** | ✅ Complete | Full drag-and-drop interface |
| **Cross-Platform** | ✅ Complete | JVM, JS, and Android builds |
| **En Passant** | 🔄 In Progress | Special pawn capture rule |
| **Stalemate Detection** | 🔄 In Progress | Draw condition detection |
| **Checkmate Detection** | 🔄 In Progress | Game ending when king cannot escape |
| **AI Opponent** | 📋 Planned | Computer player implementation |
| **Online Play** | 📋 Planned | Multiplayer functionality |

---

## 🛠️ Development

### Building from Source
```bash
# Clean build
./gradlew clean build

# Run tests
./gradlew test

# Generate documentation
./gradlew dokka
```

### 🏢 Build Requirements
- **Gradle 8.8+**
- **Kotlin 1.9.22+**
- **Java 21+** (KorGE requirement)

### ⚠️ **Common Issues**
- **Java Version**: Make sure you're using Java 21+. Check with `java -version`
- **Network Access**: Android builds require access to Google's Maven repository
- **Memory**: Large builds may need increased heap size: `export GRADLE_OPTS="-Xmx4g"`

### 🎨 Assets
Professional chess piece sprites included:
- **White Pieces**: `w_king.png`, `w_queen.png`, `w_rook.png`, etc.
- **Black Pieces**: `b_king.png`, `b_queen.png`, `b_rook.png`, etc.
- **Board Elements**: Square textures and UI elements

---

## 🤝 Contributing

We welcome contributions! Here's how you can help:

### 🐛 **Priority Issues**
1. **Complete Checkmate Detection**: Implement proper game ending conditions
2. **Add Stalemate Detection**: Detect draw conditions when no legal moves available
3. **Complete En Passant**: Implement the special pawn capture rule
4. **AI Player**: Add computer opponent with difficulty levels
5. **Game State**: Save/load game functionality
6. **Move History**: Display move notation history
7. **Sound Effects**: Add audio feedback for moves

### 📝 **How to Contribute**
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### 🧪 **Testing**
- Ensure all chess rules work correctly
- Test cross-platform compatibility
- Verify UI responsiveness

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- **KorGE Team** - Amazing Kotlin game engine
- **Chess.com** - Inspiration for piece design
- **Kotlin Community** - Outstanding language and ecosystem
- **Contributors** - Everyone who helps improve SauronChess

---

## 📊 Stats

![GitHub repo size](https://img.shields.io/github/repo-size/FSaurenbach/sauronchess?style=flat-square)
![GitHub last commit](https://img.shields.io/github/last-commit/FSaurenbach/sauronchess?style=flat-square)
![GitHub stars](https://img.shields.io/github/stars/FSaurenbach/sauronchess?style=social)

---

<div align="center">

**⭐ If you enjoy SauronChess, please consider giving it a star! ⭐**

*Built with ❤️ using Kotlin & KorGE*

</div>
