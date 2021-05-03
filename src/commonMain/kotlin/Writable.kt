import kotlin.js.JsExport

@JsExport
interface Writable {
    fun write(): String
}