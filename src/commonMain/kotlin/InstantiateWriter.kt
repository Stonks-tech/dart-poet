import kotlin.js.JsExport

@JsExport
interface InstantiateWriter : Writable {
    var name: String?
    fun addArgument(builder: ArgumentWriter.() -> Unit)
}