package tech.stonks.writer

import kotlin.js.JsExport

@JsExport
interface ImportWriter : Writable {
    var importPackage: String?
}