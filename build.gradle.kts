import korlibs.korge.gradle.*

plugins { alias(libs.plugins.korge) }

korge {
    id = "de.fsaurenbach.sauronchess"
    name = "Sauronchess"
    fullscreen = false
    targetJvm()
    targetJs()
    targetAndroid()

    serializationJson()
    jvmMainClassName = "MainKt"
}

dependencies { add("commonMainApi", project(":deps")) }
