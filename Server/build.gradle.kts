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
tasks.named("runJvm") {
    //enabled = false
}
