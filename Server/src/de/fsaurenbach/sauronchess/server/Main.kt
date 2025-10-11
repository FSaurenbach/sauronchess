package de.fsaurenbach.sauronchess.server

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
        var establishedSlot = slots.find { it.id == input["slot"]!!.toInt() }
        if (establishedSlot == null) {
            if (input["color"] == "true") {
                establishedSlot = Slot(input["slot"]!!.toInt(), user, null)
                slots.add(establishedSlot)

            } else {
                establishedSlot = Slot(input["slot"]!!.toInt(), null, user)
                slots.add(establishedSlot)
            }
        } else {
            if (establishedSlot.player2 == null) establishedSlot.player2 = user
            else if (establishedSlot.player1 == null) establishedSlot.player1 = user

        }
        if (establishedSlot.player1 == user) {
            establishedSlot.player2?.request?.sendSafe(message)
        }
        if (establishedSlot.player2 == user) {

            establishedSlot.player1?.request?.sendSafe(message)
        }


    }
    request.onClose {
        val closedConnection = users.find { it.request == request }
        for (slot in slots) {
            if (slot.player1 == closedConnection) {
                slot.player1 = null
            } else if (slot.player2 == closedConnection) {
                slot.player2 = null
            }
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
    if (request.path.startsWith("/get_slot")) {
        val no = request.path.last().toString().toInt()

        println("i want slot no: $no")
        val slot = slots[no]
        val map: Map<String,Int?> = mapOf(
            "id" to slot.id,
            "player1" to slot.player1?.id,
            "player2" to slot.player2?.id
        )
        request.end(map.toJson())
//        request.end(slots[no].associate { "id" to it.id.toString(); "player1" to it.player1; "player2" to it.player2 }.toJson())

    } else if (request.path == "/check") {
        request.addHeader("Access-Control-Allow-Origin", "*")
        request.end("SUCCESS")
    }
}




