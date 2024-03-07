plugins { alias(libs.plugins.korge) }

korge {
    id = "com.sample.demo"
    targetJvm()
    targetJs()

    serializationJson()
    jvmMainClassName = "MainKt"
}

dependencies { add("commonMainApi", project(":deps")) }
