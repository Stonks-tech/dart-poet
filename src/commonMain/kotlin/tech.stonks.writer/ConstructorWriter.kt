package tech.stonks.writer

import kotlin.js.JsExport

@JsExport
interface ConstructorWriter : Writable {
    var className: String?
    var name: String?

    fun addBody(builder: BodyWriter.() -> Unit)
    fun addParameter(builder: ParameterWriter.() -> Unit)
    fun addOptionalParameter(builder: ParameterWriter.() -> Unit)
    fun addNamedParameter(builder: ParameterWriter.() -> Unit)
    fun addAssignment(builder: AssignWriter.() -> Unit)
}