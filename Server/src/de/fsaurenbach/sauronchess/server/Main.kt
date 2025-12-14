package de.fsaurenbach.sauronchess.server

import de.fsaurenbach.sauronchess.common.*
import korlibs.io.net.http.*
import korlibs.io.serialization.json.*
import korlibs.time.*
import kotlinx.coroutines.*
import kotlin.time.*

var users = mutableListOf<User>()
var slots = mutableListOf<Slot>()

data class User(
    var id: Int, var color: Boolean, var opp: Int, var request: HttpServer.WsRequest, var timeLeft: Duration?
)

data class Slot(
    var id: Int, var whitePlayer: User?, var blackPlayer: User?, var chessClock: ChessClock?, var firstTime: Boolean
)

fun requestHandler(request: HttpServer.WsRequest) {
    var user: User?
    println("Opening connection...")
    request.onStringMessage { message ->
        println(message)
        if (!message.contains("id")) request.close()
        val input = message.fromJson() as MutableMap<String, String>
        user = users.find { it.id == input["id"]?.toInt() }


        if (user == null) {
            val newUser = User(
                input["id"]!!.toInt(), input["color"].toBoolean(), 0, request, null
            )
            users.add(newUser)
            user = newUser
        }
        val establishedSlot = slots.find { it.id == input["slot"]!!.toInt() }

        if (establishedSlot?.chessClock == null) {
            establishedSlot?.chessClock =
                ChessClock(90.toDuration(DurationUnit.SECONDS), 100.toDuration(DurationUnit.SECONDS))
        }

        if (establishedSlot?.blackPlayer == null && !user!!.color) establishedSlot?.blackPlayer = user
        else if (establishedSlot?.whitePlayer == null && user!!.color) establishedSlot?.whitePlayer = user

        println(establishedSlot?.chessClock?.whiteTimer?.timeLeft?.seconds.toString())
        input["whiteTimeLeft"] = establishedSlot?.chessClock?.whiteTimer?.timeLeft?.seconds.toString()
        input["blackTimeLeft"] = establishedSlot?.chessClock?.blackTimer?.timeLeft?.seconds.toString()
        val timeSync: MutableMap<String, String> = mutableMapOf(
            "timeSync" to "true",
            "whiteTimeLeft" to establishedSlot?.chessClock?.whiteTimer?.timeLeft?.seconds.toString(),
            "blackTimeLeft" to establishedSlot?.chessClock?.blackTimer?.timeLeft?.seconds.toString()
        )
        if (input.containsKey("newX") && input["newX"] != "null") {
            if (establishedSlot!!.firstTime) {

                establishedSlot.chessClock?.blackTimer?.toggle()
                establishedSlot.firstTime = false
            } else {

                establishedSlot.chessClock?.whiteTimer?.toggle()
                establishedSlot.chessClock?.blackTimer?.toggle()
            }

            establishedSlot.whitePlayer?.request?.sendSafe(timeSync.toJson())
            establishedSlot.blackPlayer?.request?.sendSafe(timeSync.toJson())

        }
        if (establishedSlot?.whitePlayer == user) {

            establishedSlot?.blackPlayer?.request?.sendSafe(input.toJson())
        } else if (establishedSlot?.blackPlayer == user) {

            establishedSlot?.whitePlayer?.request?.sendSafe(input.toJson())
        }


    }
    // TODO: Handle closing properly
    request.onClose {
        val closedConnection = users.find { it.request == request }
        for (slot in slots) {
            if (slot.whitePlayer == closedConnection) {
                println("CLOSED CONNECTION")
                slot.whitePlayer = null
            } else if (slot.blackPlayer == closedConnection) {
                println("CLOSED CONNECTION")

                slot.blackPlayer = null
            }
            if (slot.whitePlayer == null && slot.blackPlayer == null) {
                slot.chessClock?.cancel()
                slot.chessClock = null

            }
        }
    }
}

fun main() {
    println("Starting server...")
    for (i in 0..4) slots.add(
        Slot(
            i, null, null, null, true
        )
    )


    runBlocking {
        val httpServer = HttpServer().listen(port = 9999, "0.0.0.0")
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
        request.addHeader("Access-Control-Allow-Origin", "*")
        val no = request.path.last().toString().toInt()

        println("i want slot no: $no")
        val slot = slots[no]
        val map: Map<String, Int?> = mapOf(
            "id" to slot.id, "player1" to slot.whitePlayer?.id, "player2" to slot.blackPlayer?.id
        )
        request.end(map.toJson())

    } else if (request.path == "/check") {
        request.addHeader("Access-Control-Allow-Origin", "*")
        request.end("SUCCESS")
    }
}




