# 🏰 SauronChess ♟️

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/09437976fa054f2cb7ad3f32504b4132)](https://app.codacy.com/gh/FSaurenbach/sauronchess/dashboard?utm_source=gh&utm_medium=referral&utm_content=&utm_campaign=Badge_grade)
[![License](https://img.shields.io/github/license/FSaurenbach/sauronchess?style=flat-square)](LICENSE)
[![Kotlin](https://img.shields.io/badge/Kotlin-1.9.22-purple?style=flat-square&logo=kotlin)](https://kotlinlang.org/)
[![KorGE](https://img.shields.io/badge/KorGE-6.0.0-blue?style=flat-square)](https://korge.org/)
[![Platform](https://img.shields.io/badge/Platform-JVM%20%7C%20JS%20%7C%20Android-green?style=flat-square)](#platform-support)

A modern, cross-platform chess game built with Kotlin and KorGE game engine. Experience the timeless game of chess with smooth animations, intuitive drag-and-drop controls, and professional-grade chess mechanics.

## 🎮 **[Play Now!](https://fsaurenbach.github.io/sauronchess)** 🎮

---

## 🚀 Quick Start

### Prerequisites
- **Java 21+** (Required for KorGE 6.0.0)
- **Git** for cloning the repository

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

### Core Components

**Game Engine**: Built on KorGE for cross-platform 2D rendering
- Scene management with `GameScene`
- Container-based UI architecture  
- Event-driven input handling with drag-and-drop

**Chess Logic**: Professional-grade chess implementation
- `Piece` class with individual movement validation methods
- Smart check detection system (`inCheck` function)
- Turn-based gameplay with proper move validation
- Castling logic with legal move tracking

**Visual System**: Modern game interface
- Dynamic move highlighting with colored circles
- Drag-and-drop with visual feedback and scaling
- Responsive board layout with algebraic notation
- Professional piece sprites for all chess pieces

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

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

## Acknowledgments

- **KorGE Team** - Amazing Kotlin game engine
- **Kotlin** - Outstanding language and ecosystem

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
