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
kotlin {
    sourceSets {
        val commonMain by getting {
            dependencies {
                implementation("io.ktor:ktor-client-core:2.1.0")
                implementation("io.ktor:ktor-client-json:2.1.0")
                implementation("io.ktor:ktor-client-serialization:2.1.0")
                implementation("org.jetbrains.kotlinx:kotlinx-serialization-json:1.6.2")
                implementation("com.squareup.okhttp3:okhttp:4.9.2")
            }
        }
        val jvmMain by getting {
            dependencies {
                implementation("io.ktor:ktor-client-cio:2.1.0")
                implementation("com.squareup.okhttp3:okhttp:4.9.2")
            }
        }
        val jsMain by getting {
            dependencies {
                implementation("io.ktor:ktor-http-cio:1.6.0")
                implementation("io.ktor:ktor-client-js:1.6.0")
                implementation("com.squareup.okhttp3:okhttp:4.9.2")

            }
        }
    }
}
dependencies {
    add("commonMainApi", project(":deps"))
    add("commonMainApi", "com.squareup.okhttp3:okhttp:4.9.2")
}
repositories {
    mavenCentral()
}
