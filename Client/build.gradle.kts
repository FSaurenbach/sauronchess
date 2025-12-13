import korlibs.korge.gradle.*

plugins {
    alias(libs.plugins.korge)
}

korge {
    id = "de.fsaurenbach.sauronchess.client"
    name = "Sauronchess Server"
    targetJvm()
    targetJs()
    jvmMainClassName = "de.fsaurenbach.sauronchess.client.MainKt"
}

kotlin {
    sourceSets {
        val commonMain by getting {
            dependencies {
                implementation(project(":Common"))
            }
        }
    }
}

tasks.register("runMain") {
    dependsOn("runJvm")
    group = "application"
    description = "Runs only the main project"
}

tasks.register("runMainJs") {
    dependsOn("runJs")
    group = "application"
    description = "Runs only the main project"
}

tasks.register("ClientBrowserReleaseWebpack") {
    dependsOn("browserReleaseWebpack")
    group = "application"
    description = "Runs only the main project"
}
