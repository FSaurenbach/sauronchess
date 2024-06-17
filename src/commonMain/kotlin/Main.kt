@file:OptIn(KorgeExperimental::class)
import korlibs.image.bitmap.*
import korlibs.image.color.*
import korlibs.image.format.*
import korlibs.io.file.std.*
import korlibs.io.net.http.*
import korlibs.io.serialization.json.*
import korlibs.io.stream.*
import korlibs.korge.*
import korlibs.korge.annotations.*
import korlibs.korge.input.*
import korlibs.korge.scene.*
import korlibs.korge.view.*
import korlibs.math.geom.*
import korlibs.io.async.*
import korlibs.io.net.http.*
import korlibs.korge.view.align.*
import kotlinx.atomicfu.TraceBase.None.append
import kotlinx.serialization.*
import kotlinx.serialization.json.*
var cells = ArrayList<Cell>()
var schachbrett: Schachbrett? = null
var pieces = ArrayList<Piece>()
var whitePawn: Bitmap? = null
var whiteRook: Bitmap? = null
var whiteKnight: Bitmap? = null
var whiteBishop: Bitmap? = null
var whiteQueen: Bitmap? = null
var whiteKing: Bitmap? = null
var whiteKingInCheck = false
var whiteKingPosition = Pair(4, 7)

var blackPawn: Bitmap? = null
var blackRook: Bitmap? = null
var blackKnight: Bitmap? = null
var blackBishop: Bitmap? = null
var blackQueen: Bitmap? = null
var blackKing: Bitmap? = null
var blackKingInCheck = false
var blackKingPosition = Pair(4, 0)

var whiteTurn = true

suspend fun main() =
    Korge(windowSize = Size(512, 512), backgroundColor = Colors["#2b2b2b"]) {
        val sceneContainer = sceneContainer()

        sceneContainer.changeTo { MyScene(sceneContainer) }
    }
@Serializable
data class SerializedPiece(val kind: String, val color: String, val row: Int, val col: Int)
val json = Json { ignoreUnknownKeys = true }
@Serializable
data class BoardState(val pieces: List<SerializedPiece>)
suspend fun getBestMove(boardState: BoardState): String? {
    val client = HttpClient()
    val json = Json { ignoreUnknownKeys = true }

    val jsonString = json.encodeToString(boardState)
    val response = client.request(
        Http.Method.POST,
        "http://127.0.0.1:8000/best_move",
        headers = Http.Headers.build {
            append("Content-Type", "application/json")
        },
        content = jsonString.openAsync()
    )

    val responseBody = response.readAllString()
    val jsonResponse = json.parseToJsonElement(responseBody).jsonObject

    return jsonResponse["best_move"]?.jsonPrimitive?.content
}

class MyScene(private val cont: SceneContainer) : PixelatedScene(512, 512) {

    /**
     * This method is called to render the main content of the game scene. Main function to set up
     * the chessboard, pieces, and handle piece movement.
     */
    override suspend fun SContainer.sceneMain() {




        schachbrett = Schachbrett(cont)
        whitePawn = resourcesVfs["w_pawn.png"].readBitmap()
        whiteRook = resourcesVfs["w_rook.png"].readBitmap()
        whiteKnight = resourcesVfs["w_knight.png"].readBitmap()
        whiteBishop = resourcesVfs["w_bishop.png"].readBitmap()
        whiteQueen = resourcesVfs["w_queen.png"].readBitmap()
        whiteKing = resourcesVfs["w_king.png"].readBitmap()

        blackPawn = resourcesVfs["b_pawn.png"].readBitmap()
        blackRook = resourcesVfs["b_rook.png"].readBitmap()
        blackKnight = resourcesVfs["b_knight.png"].readBitmap()
        blackBishop = resourcesVfs["b_bishop.png"].readBitmap()
        blackQueen = resourcesVfs["b_queen.png"].readBitmap()
        blackKing = resourcesVfs["b_king.png"].readBitmap()

        addAllPieces(cont)
        // add pieces to board state

        handlePieceMovement()
        // board state where the pieces are in their initial position (whites at the bottom
        val boardState = BoardState(
            listOf(
                SerializedPiece("Rook", "White", 0, 7),
                SerializedPiece("Knight", "White", 1, 7),
                SerializedPiece("Bishop", "White", 2, 7),
                SerializedPiece("Queen", "White", 3, 7),
                SerializedPiece("King", "White", 4, 7),
                SerializedPiece("Bishop", "White", 5, 7),
                SerializedPiece("Knight", "White", 6, 7),
                SerializedPiece("Rook", "White", 7, 7),
                SerializedPiece("Pawn", "White", 0, 6),
                SerializedPiece("Pawn", "White", 1, 6),
                SerializedPiece("Pawn", "White", 2, 6),
                SerializedPiece("Pawn", "White", 3, 6),
                SerializedPiece("Pawn", "White", 4, 6),
                SerializedPiece("Pawn", "White", 5, 6),
                SerializedPiece("Pawn", "White", 6, 6),
                SerializedPiece("Pawn", "White", 7, 6),
                SerializedPiece("Rook", "Black", 0, 0),
                SerializedPiece("Knight", "Black", 1, 0),
                SerializedPiece("Bishop", "Black", 2, 0),
                SerializedPiece("Queen", "Black", 3, 0),
                SerializedPiece("King", "Black", 4, 0),
                SerializedPiece("Bishop", "Black", 5, 0),
                SerializedPiece("Knight", "Black", 6, 0),
                SerializedPiece("Rook", "Black", 7, 0),
                SerializedPiece("Pawn", "Black", 0, 1),
                SerializedPiece("Pawn", "Black", 1, 1),
                SerializedPiece("Pawn", "Black", 2, 1),
                SerializedPiece("Pawn", "Black", 3, 1),
                SerializedPiece("Pawn", "Black", 4, 1),
                SerializedPiece("Pawn", "Black", 5, 1),
                SerializedPiece("Pawn", "Black", 6, 1),
                SerializedPiece("Pawn", "Black", 7, 1)

            )
        )
        val jsonString = json.encodeToString(boardState)
        println(jsonString)

        val bestMove = getBestMove(boardState)
        println(bestMove)
    }

    private fun SContainer.handlePieceMovement() {
        // Variables initialization
        var newPosition: Pair<Int, Int>? = null
        var currentPos: Pair<Int, Int>? = null
        var selectedPiece: Piece? = null
        var error: Boolean

        // Function to handle piece movement
        for (piece in pieces) {
            piece.draggableCloseable(
                onMouseDrag {
                    // When dragging starts, update newPosition and newPositionEncoded
                    newPosition =
                        Pair(this.globalMousePos.x.toInt() / 64, this.globalMousePos.y.toInt() / 64)
                }) { info ->
                    error = false

                    // When dragging starts
                    if (info.start) {
                        // Iterate through pieces to find the selected piece
                        // //println("Start dragging...")
                        // Set king position
                        val pieceAtCurrentPos =
                            schachbrett!!.findPiece(newPosition!!.first, newPosition!!.second)

                        if (schachbrett!!.findPiece(newPosition!!.first, newPosition!!.second) !=
                            null) {
                            currentPos = newPosition
                            selectedPiece = pieceAtCurrentPos
                        }
                    }

                    // When dragging ends
                    if (info.end && selectedPiece != null) {
                        // //println("End dragging...")
                        // Check if newPosition is within the game board
                        if (newPosition!!.first < 0 ||
                            newPosition!!.first >= 8 ||
                            newPosition!!.second < 0 ||
                            newPosition!!.second >= 8) {
                            error = true
                            // Reset variables
                            selectedPiece = null
                            newPosition = null
                            currentPos = null
                        }
                        // Perform the move if no error
                        if (!error) {
                            if (selectedPiece!!.moveChecker(currentPos!!, newPosition!!, true)) {
                                figurBewegen(
                                    selectedPiece!!, newPosition!!.first, newPosition!!.second)
                                selectedPiece = null
                            }

                            // Check if king is in Check
                            inCheck()



                            // Reset variables
                            selectedPiece = null
                            newPosition = null
                            currentPos = null
                        }

                        error = false
                    }
                }
        }
    }
}
fun inCheck(): Boolean {

    println("checking for check...")
    val piecesCopy = pieces.toMutableList()
    for (piece in piecesCopy) {
        if (piece.kind == PieceKind.WhiteKing) {
            whiteKingPosition = Pair(piece.cx, piece.cy)
            //println("White King Position: $whiteKingPosition")
        }
        if (piece.kind == PieceKind.BlackKing) {
            blackKingPosition = Pair(piece.cx, piece.cy)
            //println("Black King Position: $blackKingPosition")
        }
    }
    var foundsmt = false
    for (bp in piecesCopy){

        if (bp.moveChecker(Pair(bp.cx, bp.cy), whiteKingPosition, false)){

            println("Piece ${bp.kind} at location x:${bp.cx}y:${bp.cy}is attacking the white king")
            whiteKingInCheck = true
            return true
        }
        else whiteKingInCheck = foundsmt
        if (bp.moveChecker(Pair(bp.cx, bp.cy), blackKingPosition, false)){
            blackKingInCheck = true
            println("Piece ${bp.kind} at location x:${bp.cx}y:${bp.cy}is attacking the black king")
            return true
        }
    }
    return false
}
