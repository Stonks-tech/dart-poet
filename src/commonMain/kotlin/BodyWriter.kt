import kotlin.js.JsExport

@JsExport
interface BodyWriter : Writable {
    var returnLine: String?
    fun addLine(line: String)
}