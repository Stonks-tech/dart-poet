package tech.stonks.writer

import kotlin.js.JsExport

@JsExport
interface ParameterWriter : Writable {
    var name: String?
    var type: String?
    var defaultValue: String?
    var isInitializer: Boolean
}