import korlibs.korge.gradle.*


plugins {
    alias(libs.plugins.korge)
}

korge {
    id = "de.fsaurenbach.sauronchess.client"
    name = "Sauronchess Client"
    targetJvm()
    jvmMainClassName = "MainKt"
}
