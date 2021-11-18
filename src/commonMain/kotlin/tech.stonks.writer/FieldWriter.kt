package tech.stonks.writer

import kotlin.js.JsExport

@JsExport
interface FieldWriter : Writable {
    var name: String?
    var type: String?
    var isFinal: Boolean
    var defaultValue: String?
    fun build(builder: FieldWriter.() -> Unit) {
        builder()
    }
}