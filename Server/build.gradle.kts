import korlibs.korge.gradle.*


plugins {
    alias(libs.plugins.korge)
}

korge {
    id = "de.fsaurenbach.sauronchess.server"
    name = "Sauronchess Server"
    targetJvm()
    jvmMainClassName = "de.fsaurenbach.sauronchess.server.MainKt"
}
tasks.register("runServer") {
    dependsOn("runJvm")
    group = "application"
    description = "Run the server"
}
