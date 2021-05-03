import kotlin.js.JsExport

@JsExport
interface ArgumentWriter : Writable {
    var name: String?
    var value: String?
}