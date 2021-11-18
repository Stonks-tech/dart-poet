package tech.stonks.writer

import kotlin.js.JsExport

@JsExport
interface ArrayWriter : Writable {
    fun add(adder: ArrayWriter.() -> String)
}