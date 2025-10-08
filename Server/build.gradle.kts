import korlibs.korge.gradle.*


plugins {
    alias(libs.plugins.korge)
}

korge {
    id = "de.fsaurenbach.sauronchess.server"
    name = "Sauronchess Server"
    targetJvm()
    jvmMainClassName = "MainKt"
}
