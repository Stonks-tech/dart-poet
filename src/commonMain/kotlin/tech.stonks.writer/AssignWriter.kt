package tech.stonks.writer

import kotlin.js.JsExport

@JsExport
interface AssignWriter : Writable {
    var name: String?
    var assign: String?
    fun build(builder: AssignWriter.() -> Unit)
}