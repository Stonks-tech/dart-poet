package tech.stonks.writer

import kotlin.js.JsExport

@JsExport
interface Writable {
    fun write(): String
}