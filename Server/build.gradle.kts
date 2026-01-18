import korlibs.korge.gradle.*

plugins {
    alias(libs.plugins.korge)
}

korge {
    id = "de.fsrb.sauronchess.server"
    name = "Sauronchess Server"
    targetJvm()
    jvmMainClassName = "de.fsrb.sauronchess.server.MainKt"
}

dependencies {
    add("commonMainImplementation", project(":Common"))
}

tasks.register("runServer") {
    dependsOn("runJvm")
    group = "application"
    description = "Run the server"
}
