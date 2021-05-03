import kotlin.js.JsExport

@JsExport
interface TypeWriter : Writable {
    var name: String?
    fun addGenericType(builder: TypeWriter.() -> Unit)
}