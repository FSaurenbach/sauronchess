import korlibs.korge.gradle.*

plugins { alias(libs.plugins.korge) }

korge {
    id = "de.fsaurenbach.sauronchess"
    name = "Sauronchess"
    fullscreen = false
    targetJvm()
    targetJs()
    targetAndroid()
    icon = File(rootDir,"icon.png")
    serializationJson()
    jvmMainClassName = "MainKt"
}
kotlin {
    sourceSets {
        val commonMain by getting {
            dependencies {
                implementation("org.jetbrains.kotlinx:kotlinx-serialization-json:1.6.2")
            }
        }
        val jvmMain by getting {
            dependencies {
            }
        }
        val jsMain by getting {
            dependencies {

            }
        }
    }
}
dependencies {
    add("commonMainApi", project(":deps"))

}
repositories {
    mavenCentral()
    maven("https://jitpack.io")
}
