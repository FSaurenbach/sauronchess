import korlibs.io.lang.*
import korlibs.io.net.http.*
import korlibs.io.stream.*
import kotlinx.serialization.json.*

class ChessAi {
    fun piecesListToFEN(piecesList: List<Pair<String, Pair<Int, Int>>>): String {
        val board = Array(8) { Array(8) { '.' } }

        // Place pieces on the board
        for (piece in piecesList) {
            val pieceType = piece.first
            val (x, y) = piece.second
            board[y][x] =
                when (pieceType) {
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

        // Add default FEN fields (assuming it's the white's turn and default castling rights and en
        // passant)
        // fen.append(" w KQkq - 0 1")
        if (whiteTurn) {
            fen.append(" w KQkq - 0 1")
        } else {
            fen.append(" b KQkq - 0 1")
        }
        return fen.toString()
    }

    suspend fun postBestMove(fen: String): String {
        val client = HttpClient()
        val url = "http://192.168.178.54:5000/best_move"
        // Create JSON object
        val json = JsonObject(mapOf("fen" to JsonPrimitive(fen)))
        val jsonString = Json.encodeToString(JsonObject.serializer(), json)

        return try {
            val response = client.requestAsBytes(
                url = url,
                method = Http.Methods.POST,
                content = jsonString.openAsync(),
                headers = Http.Headers(
                    "Content-Type" to "application/json",
                    "Content-Length" to jsonString.length.toString()
                )
            )
            val responseString = response.content.decodeToString()
            val jsonResponse = Json.parseToJsonElement(responseString).jsonObject
            jsonResponse["best_move"]?.jsonPrimitive?.content ?: "No best_move found"

        } catch (e: IOException) {
            "Request failed: ${e.message}"
        }
    }

    fun convertMoveToPosition(move: String) {
        var old_x: Int = 9
        var old_y: Int = 9
        var new_x: Int = 9
        var new_y: Int = 9
        when (move[0]) {
            'a' -> old_x = 0
            'b' -> old_x = 1
            'c' -> old_x = 2
            'd' -> old_x = 3
            'e' -> old_x = 4
            'f' -> old_x = 5
            'g' -> old_x = 6
            'h' -> old_x = 7
        }
        when (move[1]) {
            '1' -> old_y = 7
            '2' -> old_y = 6
            '3' -> old_y = 5
            '4' -> old_y = 4
            '5' -> old_y = 3
            '6' -> old_y = 2
            '7' -> old_y = 1
            '8' -> old_y = 0
        }
        when (move[2]) {
            'a' -> new_x = 0
            'b' -> new_x = 1
            'c' -> new_x = 2
            'd' -> new_x = 3
            'e' -> new_x = 4
            'f' -> new_x = 5
            'g' -> new_x = 6
            'h' -> new_x = 7
        }
        when (move[3]) {
            '1' -> new_y = 7
            '2' -> new_y = 6
            '3' -> new_y = 5
            '4' -> new_y = 4
            '5' -> new_y = 3
            '6' -> new_y = 2
            '7' -> new_y = 1
            '8' -> new_y = 0
        }
        println("Old position: $old_x, $old_y")
        println("New position: $new_x, $new_y")
        for (piece in pieces){
            if (piece.cx == old_x && piece.cy == old_y && old_x != 9 && old_y != 9 && new_x != 9 && new_y != 9){
                figurBewegen(piece, new_x, new_y)
                whiteTurn = !whiteTurn
            }
        }

    }
}


