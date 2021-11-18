import tech.stonks.writer.AssignWriter
import tech.stonks.writer.BodyWriter
import tech.stonks.writer.ConstructorWriter
import tech.stonks.writer.ParameterWriter
import kotlin.js.JsExport

@JsExport
class DartConstructorWriter : ConstructorWriter {
    override var className: String? = null
    override var name: String? = null
    private val _parameters = mutableListOf<ParameterWriter>()
    private val _optionalParameters = mutableListOf<ParameterWriter>()
    private val _namedParameters = mutableListOf<ParameterWriter>()
    private val _assignments = mutableListOf<AssignWriter>()
    private var body: BodyWriter? = null

    override fun addBody(builder: BodyWriter.() -> Unit) {
        body = DartBodyWriter(builder)
    }

    override fun addParameter(builder: ParameterWriter.() -> Unit) {
        _parameters += DartParameterWriter(null, builder)
    }

    override fun addOptionalParameter(builder: ParameterWriter.() -> Unit) {
        _optionalParameters += DartParameterWriter(null, builder)
    }

    override fun addNamedParameter(builder: ParameterWriter.() -> Unit) {
        _namedParameters += DartParameterWriter(null, builder)
    }

    override fun addAssignment(builder: AssignWriter.() -> Unit) {
        _assignments.add(DartAssignWriter().apply { builder() })
    }

    override fun write(): String {
        assert(className != null)
        val parameters = listOf(writeParameters(), writeOptionalParameters(), writeNamedParameters())
            .filter { it.isNotEmpty() }
            .joinToString(", ")
        return buildString {
            append(className)
            if (name != null) {
                append(".$name")
            }
            append("($parameters)")
            if (_assignments.isNotEmpty()) {
                append("\n: ")
                val assignments = _assignments.joinToString(",\n") {
                    it.write()
                }.addTabs(false)
                append(assignments)
            }
            if (body != null) {
                appendLine("{")
                appendLine(body!!.write())
                append("}")
            } else {
                append(";")
            }
        }
    }


    private fun writeParameters(): String {
        return if (_parameters.isEmpty()) {
            ""
        } else {
            _parameters.joinToString(", ") { it.write() }
        }
    }

    private fun writeOptionalParameters(): String {
        return if (_optionalParameters.isEmpty()) {
            ""
        } else {
            "[${_optionalParameters.joinToString(", ") { it.write() }}]"
        }
    }

    private fun writeNamedParameters(): String {
        return if (_namedParameters.isEmpty()) {
            ""
        } else {
            "{${_namedParameters.joinToString(", ") { it.write() }}}"
        }
    }
}