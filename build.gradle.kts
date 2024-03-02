import com.android.build.gradle.internal.tasks.*
import korlibs.korge.gradle.*

plugins {
    alias(libs.plugins.korge)

}


korge {
    id = "com.sample.demo"

// To enable all targets at once

    //targetAll()

// To enable targets based on properties/environment variables
    //targetDefault()

// To selectively enable targets

    targetJvm()
    targetJs()

    serializationJson()
    jvmMainClassName = "MainKt"

}

dependencies {
    add("commonMainApi", project(":deps"))
    //add("commonMainApi", project(":korge-dragonbones"))
}
// Jacoco report generation
