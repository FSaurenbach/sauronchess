import korlibs.korge.gradle.*

plugins { alias(libs.plugins.korge) }

korge {
    id = "de.fsaurenbach.sauronchess"
    name = "Sauronchess"
    exeBaseName = "sauronchess"
    fullscreen = false
    targetJvm()
    targetJs()
    targetAndroid()
    icon = File(rootDir,"icon.png")
    serializationJson()
    jvmMainClassName = "MainKt"
    version = "0.1.0"
    versionCode = 1

}
dependencies {
    add("commonMainApi", project(":deps"))
}
repositories {
    mavenCentral()
}
