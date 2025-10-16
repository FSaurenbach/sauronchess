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
    jvmMainClassName = "de.fsaurenbach.sauronchess.MainKt"
    version = "1.0.0"
    versionCode = 1
}

repositories {
    mavenCentral()
}
tasks.register("runMain") {
    dependsOn("runJvm") // the root run task
    group = "application"
    description = "Runs only the main project"
}
