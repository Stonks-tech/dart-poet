import kotlin.js.JsExport

@JsExport
interface LambdaWriter : Writable {

    fun addBody(builder: BodyWriter.() -> Unit)
    fun addParameter(builder: ParameterWriter.() -> Unit)
}