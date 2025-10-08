import korlibs.korge.gradle.*

plugins { alias(libs.plugins.korge)}

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
    jvmMainClassName = "de.fsaurenbach.sauronchess.MainKt"
    version = "1.0.0"
    versionCode = 1

}

repositories {
    mavenCentral()
}
