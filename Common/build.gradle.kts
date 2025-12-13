plugins {
    kotlin("multiplatform")
}

group = "de.fsaurenbach.sauronchess"
version = "1.0"

repositories {
    mavenCentral()
}

kotlin {
    jvm()
    js()
    sourceSets {
        val commonMain by getting {
            dependencies {
                implementation("org.jetbrains.kotlinx:kotlinx-coroutines-core:1.9.0")
            }
        }
    }
}

