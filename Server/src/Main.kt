import korlibs.io.net.http.*
import kotlinx.coroutines.*
import java.util.concurrent.atomic.*

suspend fun main(){

    var webSocket = HttpServer().listen(port = 9999).websocketHandler {
        handler -> requestHandler(handler)
    }


    /*.allHandler {
        println("$it")
    }*/
    while (true) {
        delay(1000)
    }
}

suspend fun requestHandler(request: HttpServer.WsRequest) {
    request.accept(Http.Headers.build {  })
    request.send("af")

    /*request.write("a\n")
    println(request.headers)
    request.end()*/
}


class PlayerConnection() {
    companion object {
        val ID = AtomicInteger()
    }

    private val id = ID.getAndIncrement()

    var player = Player(id)

    override fun toString(): String {
        return "PlayerConnection(id=$id)"
    }
}
data class Player(val id:Int)
