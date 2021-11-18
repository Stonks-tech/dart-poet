package tech.stonks.writer

import kotlin.js.JsExport

@JsExport
interface MapWriter : Writable {
    var map: MutableMap<String, String>
    fun addPair(key: String, value: String)
}