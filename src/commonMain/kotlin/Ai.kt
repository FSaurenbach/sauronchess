import io.ktor.client.*
import io.ktor.client.request.*
import io.ktor.client.statement.*
import io.ktor.client.engine.*
class Ai {
    init {
        println("Ai created")
    }
    var fn = "rnbqkbnr/pppppp1p/8/6p1/5P2/8/PPPPP1PP/RNBQKBNR w KQkq - 0 1"
    fun piecesListToFEN(piecesList: List<Pair<String, Pair<Int, Int>>>): String {
        val board = Array(8) { Array(8) { '.' } }

        // Place pieces on the board
        for (piece in piecesList) {
            val pieceType = piece.first
            val (x, y) = piece.second
            board[y][x] = when (pieceType) {
                "WhitePawn" -> 'P'
                "WhiteRook" -> 'R'
                "WhiteKnight" -> 'N'
                "WhiteBishop" -> 'B'
                "WhiteQueen" -> 'Q'
                "WhiteKing" -> 'K'
                "BlackPawn" -> 'p'
                "BlackRook" -> 'r'
                "BlackKnight" -> 'n'
                "BlackBishop" -> 'b'
                "BlackQueen" -> 'q'
                "BlackKing" -> 'k'
                else -> '.'
            }
        }

        // Convert board to FEN
        val fen = StringBuilder()
        for (row in board) {
            var emptyCount = 0
            for (cell in row) {
                if (cell == '.') {
                    emptyCount++
                } else {
                    if (emptyCount > 0) {
                        fen.append(emptyCount)
                        emptyCount = 0
                    }
                    fen.append(cell)
                }
            }
            if (emptyCount > 0) {
                fen.append(emptyCount)
            }
            fen.append('/')
        }
        fen.setLength(fen.length - 1) // Remove the last '/'

        // Add default FEN fields (assuming it's the white's turn and default castling rights and en passant)
        //fen.append(" w KQkq - 0 1")
        if (whiteTurn){
            fen.append(" w KQkq - 0 1")
        }
        else{
            fen.append(" b KQkq - 0 1")
        }
        fn = fen.toString()
        return fen.toString()
    }

    suspend fun exampleRequest() {
        println("Example request")

        // Define FEN and other options
        val fen = "8/1P1R4/n1r2B2/3Pp3/1k4P1/6K1/Bppr1P2/2q5 w - - 0 1"
        val variants = 1 // max: 5, default: 1
        val depth = 12 // max: 18, default: 12
        val maxThinkingTime = 50 // max: 100, default: 50 (ms)
        val searchmoves = "" // evaluate specific moves only, e.g., 'd2d4 e2e4'

        // Initialize HttpClient
        val client = HttpClient()

        // Make the POST request
        val response = client.post("https://chess-api.com/v1") {
            setBody(
                """
            {
                "fen": "$fen",
                "variants": $variants,
                "depth": $depth,
                "maxThinkingTime": $maxThinkingTime,
                "searchmoves": "$searchmoves"
            }
            """.trimIndent()
            )
        }

        // Print the response
        println(response.bodyAsText())
    }
}
