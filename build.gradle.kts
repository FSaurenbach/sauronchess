import korlibs.korge.gradle.*

plugins { alias(libs.plugins.korge) }

korge {
    id = "de.fsaurenbach.sauronchess"
    name = "Sauronchess"
    exeBaseName = "sauronchess"
    fullscreen = false
    targetJvm()
    targetJs()
    webBindPort = 8989
    androidPermission("INTERNET")
    androidManifestChunk(
        "<uses-permission android:name=\"android.permission.INTERNET\" />"
    )

    targetAndroid()
    icon = File(rootDir, "icon.png")
    serializationJson()
    version = "1.0.0"
    versionCode = 1
}

repositories {
    mavenCentral()
}
