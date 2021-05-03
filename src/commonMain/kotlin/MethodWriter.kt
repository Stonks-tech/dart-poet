import kotlin.js.JsExport

@JsExport
interface MethodWriter : Writable {
    var name: String?
    var returnType: String?
    var isOverride: Boolean

    fun addBody(builder: BodyWriter.() -> Unit)
    fun addParameter(builder: ParameterWriter.() -> Unit)
    fun addOptionalParameter(builder: ParameterWriter.() -> Unit)
    fun addNamedParameter(builder: ParameterWriter.() -> Unit)

}