import korlibs.korge.gradle.*

plugins {
    alias(libs.plugins.korge)
    id("org.jetbrains.kotlinx.kover") version "0.7.5"

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
koverReport {
    filters {
        excludes {
            classes("com.baeldung.code.not.covered")
        }
    }
    verify {
        rule {
            isEnabled = true
            bound {
                minValue = 80 // Minimum coverage percentage
            }
        }
    }
}



dependencies {
    add("commonMainApi", project(":deps"))
    //add("commonMainApi", project(":korge-dragonbones"))
}

