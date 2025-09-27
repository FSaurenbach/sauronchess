import korlibs.image.color.*
import korlibs.image.format.*
import korlibs.image.vector.*
import korlibs.image.vector.format.*
import korlibs.io.file.std.*
import korlibs.korge.input.*
import korlibs.korge.view.*
import korlibs.korge.view.Circle
import korlibs.korge.view.align.*
import korlibs.math.geom.*
import kotlin.properties.*

fun removePiece(piece: Piece) {
    pieces.remove(piece)
    piece.removeFromParent()
}

fun addAllPieces(chessboard: Container) {
    // Add all pieces in right order and add them to the pieces list (white pieces are at the
    // bottom)
    for (i in 0 until 8) {
        chessboard.piece(PieceKind.WhitePawn, Colors.WHITE, i, 6, isWhite = true)
    }
    chessboard.piece(PieceKind.WhiteRook, Colors.WHITE, 0, 7, isWhite = true)
    chessboard.piece(PieceKind.WhiteRook, Colors.WHITE, 7, 7, isWhite = true)
    chessboard.piece(PieceKind.WhiteKnight, Colors.WHITE, 1, 7, isWhite = true)
    chessboard.piece(PieceKind.WhiteKnight, Colors.WHITE, 6, 7, isWhite = true)
    chessboard.piece(PieceKind.WhiteBishop, Colors.WHITE, 2, 7, isWhite = true)
    chessboard.piece(PieceKind.WhiteBishop, Colors.WHITE, 5, 7, isWhite = true)
    chessboard.piece(PieceKind.WhiteQueen, Colors.WHITE, 3, 7, isWhite = true)
    chessboard.piece(PieceKind.WhiteKing, Colors.WHITE, 4, 7, isWhite = true)

    for (i in 0 until 8) {
        chessboard.piece(PieceKind.BlackPawn, Colors.BLACK, i, 1, isWhite = false)
    }
    chessboard.piece(PieceKind.BlackRook, Colors.BLACK, 0, 0, isWhite = false)
    chessboard.piece(PieceKind.BlackRook, Colors.BLACK, 7, 0, isWhite = false)
    chessboard.piece(PieceKind.BlackKnight, Colors.BLACK, 1, 0, isWhite = false)
    chessboard.piece(PieceKind.BlackKnight, Colors.BLACK, 6, 0, isWhite = false)
    chessboard.piece(PieceKind.BlackBishop, Colors.BLACK, 2, 0, isWhite = false)
    chessboard.piece(PieceKind.BlackBishop, Colors.BLACK, 5, 0, isWhite = false)
    chessboard.piece(PieceKind.BlackQueen, Colors.BLACK, 3, 0, isWhite = false)
    chessboard.piece(PieceKind.BlackKing, Colors.BLACK, 4, 0, isWhite = false)

    for (piece in pieces) {
        movePiece(piece, piece.cx, piece.cy)
    }
}

/**Load bitmaps of the pieces.*/
suspend fun reloadPictures() {
    // Load pictures
    whitePawn = resourcesVfs["wikipedia/white_pieces/Chess_plt45.svg"].readSVG().scaled(2.2, 2.0).render()
    whiteRook = resourcesVfs["wikipedia/white_pieces/Chess_rlt45.svg"].readSVG().scaled(2.0, 2.0).render()
    whiteKnight = resourcesVfs["wikipedia/white_pieces/Chess_nlt45.svg"].readSVG().scaled(2.0, 2.0).render()
    whiteBishop = resourcesVfs["wikipedia/white_pieces/Chess_blt45.svg"].readSVG().scaled(2.0, 2.0).render()
    whiteQueen = resourcesVfs["wikipedia/white_pieces/Chess_qlt45.svg"].readSVG().scaled(2.0, 2.0).render()
    whiteKing = resourcesVfs["wikipedia/white_pieces/Chess_klt45.svg"].readSVG().scaled(2.0, 2.0).render()

    blackPawn = resourcesVfs["wikipedia/black_pieces/Chess_pdt45.svg"].readSVG().scaled(2.2, 2.0).render()
    blackRook = resourcesVfs["wikipedia/black_pieces/Chess_rdt45.svg"].readSVG().scaled(2.0, 2.0).render()
    blackKnight = resourcesVfs["wikipedia/black_pieces/Chess_ndt45.svg"].readSVG().scaled(2.0, 2.0).render()
    blackBishop = resourcesVfs["wikipedia/black_pieces/Chess_bdt45.svg"].readSVG().scaled(2.0, 2.0).render()
    blackQueen = resourcesVfs["wikipedia/black_pieces/Chess_qdt45.svg"].readSVG().scaled(2.0, 2.0).render()
    blackKing = resourcesVfs["wikipedia/black_pieces/Chess_kdt45.svg"].readSVG().scaled(2.0, 2.0).render()
    creditsSvg = resourcesVfs["credits.png"].readBitmap()
}

/** Simulates a move for showing available moves.*/
fun simulateMove(
    oldPos: Pair<Int, Int>, newPos: Pair<Int, Int>, piece: Piece, calledFromKing: Boolean = false
): Boolean {
    if (!calledFromKing) if (!piece.moveChecker(
            Pair(oldPos.first, oldPos.second), Pair(newPos.first, newPos.second)
        )
    ) {
        return false
    }

    inCheck(pieces, calledFromKing)
    val pieceOnNewPos = findPiece(newPos.first, newPos.second)
    if (piece.color == pieceOnNewPos?.color) return false
    println("Simulated move: ${piece.cx}, ${piece.cy}, inCheck: ${inCheck(pieces)} , pieceonnewpos $pieceOnNewPos")
    if (whiteTurn && piece.color == Colors.BLACK) return false
    if (!whiteTurn && piece.color == Colors.WHITE) return false
    movePiece(piece, newPos.first, newPos.second)
    pieceOnNewPos?.disabled = true
    if ((piece.color == Colors.WHITE && blackKingInCheck) || (piece.color == Colors.BLACK && whiteKingInCheck)) {
        movePiece(piece, oldPos.first, oldPos.second)
        println("move is not possible")
        return false
    }
    val stillInCheck = inCheck(pieces, calledFromKing)
    println("Simulated move: ${piece.cx}, ${piece.cy}, stillInCheck: $stillInCheck")
    movePiece(piece, oldPos.first, oldPos.second)
    pieceOnNewPos?.disabled = false
    return !stillInCheck
}

fun Container.moveIndicator(callback: @ViewDslMarker (MoveIndicator.() -> Unit) = {}): MoveIndicator =
    MoveIndicator().addTo(this, callback)

class MoveIndicator : Container() {
    var cx = 0
    var cy = 0

    // private var outline: Circle = circle()
    private var circle: Circle = circle()
    private var isRed: Boolean = false

    init {


        markGrey()
        circle.zIndex = 2.0
    }

    fun markRed() {
        circle.color = Colors["#cccccc"]

        circle.fill = Colors.TRANSPARENT
        circle.stroke = Colors.RED
        circle.strokeThickness = 6.5
        //circle.alpha = 5.0
        circle.radius = userScale * 39
        isRed = true
    }

    fun markGrey() {

        if (isRed) {
            markRed()
            return
        }
        circle.color = Colors["#3b3b3b81"]
        circle.radius = userScale * 15
        circle.stroke = Colors.BLACK
        circle.strokeThickness = userScale * 3.1
        isRed = false

    }

    fun markWhite() {
        circle.color = Colors.WHITE
    }
}

fun <T : View> T.centerYBetween(y1: Double, y2: Double): T {
    this.y = (y2 + y1 - this.scaledHeight) / 2
    return this
}

var settingsContainer: Container by Delegates.notNull()
var settingsInForeground = false
var aboutPageInForeground = false
fun showSettings() {
    settingsContainer = sCont.container()

    settingsContainer.solidRect(chessBoardWidth + 18, chessBoardHeight + 18, Colors["#000000"].withAd(0.6))
        .centerOnStage()
    Settings().addTo(settingsContainer).centerOnStage()
    settingsInForeground = true
}

data class Options(var darkMode: Boolean = false)


class Settings : Container() {
    val amountOfOptions = 3
    var currentNo = 1
    var background: RoundRect by Delegates.notNull()

    inner class AboutPage:Container(){

        init {
            val background = roundRect(Size((chessBoardWidth / 2)*1.7, (chessBoardHeight / 3)*1.7), radius = RectCorners(10)){
                fill = if (user_settings.darkMode) white_mode_cellColorBlack else white_mode_cellColorWhite
            }
            val bg = roundRect(Size(500, background.height-30), RectCorners(10), Colors.LIGHTGRAY){
                centerOn(background)
            }

            image(creditsSvg!!).scale(0.5).centerOn(bg)
            var exitButton = SettingsButton(SettingsKind.About)
            exitButton.centerXOn(bg)
            exitButton.positionY(bg.y+bg.height/4)
            exitButton.zIndex(33)
            exitButton.addTo(this@Settings)



        }
    }
    inner class SettingsButton(private val settingsKind: SettingsKind) : Container() {
        private var baseButton: RoundRect by Delegates.notNull()

        init {
            baseButton =
                roundRect(Size(200, 50), radius = RectCorners(10), fill = Colors.DARKGRAY).centerXOn(this@Settings)
                    .centerYBetween(
                        this@Settings.y + this@Settings.width / (1 + amountOfOptions) * currentNo,
                        this@Settings.y + this@Settings.width / (1 + amountOfOptions) * currentNo
                    )

            when (settingsKind) {
                SettingsKind.DarkMode -> {
                    text("Dark mode", 30, Colors.BLACK).centerOn(baseButton)
                    baseButton.color = if (user_settings.darkMode) Colors.GREEN else Colors.RED
                }

                SettingsKind.About -> text("About", 30, Colors.BLACK).centerOn(baseButton)
                SettingsKind.Exit -> text("Exit", 30, Colors.BLACK).centerOn(baseButton)

            }

            onClick {
                when (settingsKind) {
                    SettingsKind.DarkMode -> handleDarkModeClick()
                    SettingsKind.About -> handleAboutClick()
                    SettingsKind.Exit -> handleExitClick()
                }
            }


            currentNo++

        }


        private fun handleDarkModeClick() {

            user_settings.darkMode = !user_settings.darkMode
            reloadCells()
            if (user_settings.darkMode) {
                background.color = (white_mode_cellColorBlack)
                baseButton.color = (Colors.GREEN)

            } else {
                background.color = (white_mode_cellColorWhite)
                baseButton.color = (Colors.RED)

            }
        }

        private fun handleAboutClick() {
            // TODO Show Credits
            if (aboutPageInForeground) {
                settingsContainer.findViewByName("AboutPage")?.removeFromParent()
                aboutPageInForeground = false
                return
            }
            solidRect(background.width, background.height, Colors["#000000"].withAd(0.3))
            AboutPage().name("AboutPage").addTo(settingsContainer!!).centerOnStage()
            aboutPageInForeground = true

        }

        private fun handleExitClick() {
            settingsInForeground = false
            settingsContainer?.removeFromParent()
        }

    }

    enum class SettingsKind {
        DarkMode, About, Exit
    }

    init {

        // Background
        background = roundRect(
            Size(chessBoardWidth / 1.5, chessBoardHeight / 1.5),
            radius = RectCorners(15),
        )
        background.color = if (user_settings.darkMode) white_mode_cellColorBlack else white_mode_cellColorWhite

        // Dark mode button
        SettingsButton(SettingsKind.DarkMode).addTo(this)
        SettingsButton(SettingsKind.About).addTo(this)
        SettingsButton(SettingsKind.Exit).addTo(this)


    }
}
