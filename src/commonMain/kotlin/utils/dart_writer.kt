import kotlin.js.JsExport

@JsExport
fun arrayWriter(builder: ArrayWriter.() -> Unit): String {
    return DartArrayWriter().apply {
        builder()
    }.write()
}

@JsExport
fun lambdaWriter(builder: DartLambdaWriter.() -> Unit): String {
    return DartLambdaWriter(builder).write()
}

@JsExport
fun instantiateWriter(builder: DartInstantiateWriter.() -> Unit): String {
    return DartInstantiateWriter(builder).write()
}

@JsExport
fun typeWriter(builder: DartTypeWriter.() -> Unit): String {
    return DartTypeWriter(builder).write()
}

@JsExport
fun assignWriter(builder: DartAssignWriter.() -> Unit): String {
    return DartAssignWriter().apply(builder).write()
}

@JsExport
fun mapWriter(builder: DartMapWriter.() -> Unit): String {
    return DartMapWriter().apply(builder).write()
}

@JsExport
fun listWriter(builder: DartListWriter.() -> Unit): String {
    return DartListWriter().apply(builder).write()
}
