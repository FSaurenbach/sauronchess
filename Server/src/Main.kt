import korlibs.io.net.http.*
import korlibs.io.serialization.json.*
import kotlinx.coroutines.*

var users = mutableListOf<User>()
var slots = mutableListOf<Slot>()

data class User(var id: Int, var color: Boolean, var opp: Int, var request: HttpServer.WsRequest)
data class Slot(var id: Int, var player1: User?, var player2: User?)

fun requestHandler(request: HttpServer.WsRequest) {
    var user: User?
    println("Opening connection...")
    request.onStringMessage { message ->
        println(message)
        if (!message.contains("id")) request.close()
        val input = message.fromJson() as Map<String, String>
        user = users.find { it.id == input["id"]?.toInt() }


        if (user == null) {
            val newUser = User(input["id"]!!.toInt(), input["color"].toBoolean(), 0, request)
            users.add(newUser)
            user = newUser
        }
        for (opponent in users - user) {
            opponent?.request?.sendSafe(message)

        }
        val establishedSlot = slots.find { it.id == input["slot"]!!.toInt() }
        if (establishedSlot == null) {
            if (input["color"] == "true") {
                slots.add(Slot(input["slot"]!!.toInt(), user, null))
            } else {
                slots.add(Slot(input["slot"]!!.toInt(), null, user))
            }
        } else {
            establishedSlot.player2 = user
        }
    }
}

fun main() {
    println("Starting server...")


    runBlocking {
        val httpServer = HttpServer().listen(port = 9999)
        httpServer.websocketHandler { request ->
            requestHandler(request)
        }
        httpServer.httpHandler { request ->
            httpHandler(request)
        }


    }
}

suspend fun httpHandler(request: HttpServer.Request) {
    println("GOT HTTP REQUEST:")
    println(request.path)
    if (request.path == "/get_slots") {
        for (slot in slots) {
            println("slot: $slot")
        }
        request.end()
    }
}




