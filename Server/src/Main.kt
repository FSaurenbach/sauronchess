import korlibs.io.net.http.*
import korlibs.io.serialization.json.*
import kotlinx.coroutines.*

var users = mutableListOf<User>()

data class User(var id: Int, var request: HttpServer.WsRequest)

fun requestHandler(request: HttpServer.WsRequest) {
    var user: User?
    println("Opening connection...")
    request.onStringMessage { message ->
        println(message)

        val input = message.fromJson() as Map<String, String>
        user = users.find { it.id == input["id"]?.toInt() }
        if (user == null) {
            val newUser = User(input["id"]!!.toInt(), request)
            users.add(newUser)
            user = newUser
        }
        println(users)
        for (opponent in users - user) {
            opponent?.request?.sendSafe(message)

        }

    }
    //request.sendSafe("testMessage")
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




