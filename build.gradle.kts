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

dependencies {
    add("commonMainApi", project(":deps"))

}
dependencies {
    commonMainApi("io.ktor:ktor-client-core:2.1.0")
    commonMainApi("io.ktor:ktor-client-json:2.1.0")
    commonMainApi("io.ktor:ktor-client-serialization:2.1.0")
    commonMainApi("io.ktor:ktor-client-cio:2.1.0")
    commonMainApi("org.jetbrains.kotlinx:kotlinx-serialization-json:1.6.2")
}
