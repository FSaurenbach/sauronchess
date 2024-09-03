import korlibs.image.color.*
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
        val url = "http://192.168.178.90:5000/best_move"
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
        var oldX = 9
        var oldY = 9
        var newX = 9
        var newY = 9
        when (move[0]) {
            'a' -> oldX = 0
            'b' -> oldX = 1
            'c' -> oldX = 2
            'd' -> oldX = 3
            'e' -> oldX = 4
            'f' -> oldX = 5
            'g' -> oldX = 6
            'h' -> oldX = 7
        }
        when (move[1]) {
            '1' -> oldY = 7
            '2' -> oldY = 6
            '3' -> oldY = 5
            '4' -> oldY = 4
            '5' -> oldY = 3
            '6' -> oldY = 2
            '7' -> oldY = 1
            '8' -> oldY = 0
        }
        when (move[2]) {
            'a' -> newX = 0
            'b' -> newX = 1
            'c' -> newX = 2
            'd' -> newX = 3
            'e' -> newX = 4
            'f' -> newX = 5
            'g' -> newX = 6
            'h' -> newX = 7
        }
        when (move[3]) {
            '1' -> newY = 7
            '2' -> newY = 6
            '3' -> newY = 5
            '4' -> newY = 4
            '5' -> newY = 3
            '6' -> newY = 2
            '7' -> newY = 1
            '8' -> newY = 0
        }
        //println("Old position: $oldX, $oldY")
        //println("New position: $newX, $newY")
        var copy = pieces.toMutableList()
        for (piece in copy) {
            if (piece.cx == oldX && piece.cy == oldY && oldX != 9 && oldY != 9 && newX != 9 && newY != 9) {
                if (!whiteTurn && piece.moveChecker(Pair(oldX, oldY), Pair(newX, newY), true, false) && piece.color == Colors.BLACK) {
                    println(piece)
                    figurBewegen(piece, newX, newY)
                }
            }
        }

    }
}


