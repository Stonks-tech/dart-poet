import kotlin.js.JsExport

@JsExport
interface ListWriter : Writable {
    fun addElement(writable: Writable)
}