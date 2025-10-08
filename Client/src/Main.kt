import korlibs.io.net.*
import korlibs.io.net.http.*
import korlibs.io.net.ws.*
import kotlinx.coroutines.*
import java.util.concurrent.atomic.*

suspend fun main(){
    var client = WebSocketClient("ws://127.0.0.1:9999")
    println(client)
    client.onOpen{ println("opened ws")}
    client.onAnyMessage { println("Message: $it")}
    while (true){
        delay(1000)
    }

}


