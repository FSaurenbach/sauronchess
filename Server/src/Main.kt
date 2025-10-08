import korlibs.io.net.http.*
import kotlinx.coroutines.*
var users = mutableListOf<HttpServer.WsRequest>()
fun requestHandler(request: HttpServer.WsRequest) {
    users.add(request)
    println("Opening connection...")
    request.onStringMessage {
        println(it)

        for (user in users-request) {
            user.sendSafe(it)
        }
    }
    request.sendSafe("testMessage")
}

fun main() {
    println("Starting server...")

    val webSocket = HttpServer()
    runBlocking {
        webSocket.listen(port = 9999).websocketHandler { handler ->
            requestHandler(handler)
        }


    }
}




