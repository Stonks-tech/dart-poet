import kotlin.js.JsExport

@JsExport
class DartMethodWriter(override var name: String? = null, builder: (DartMethodWriter.() -> Unit)? = null) :
    MethodWriter {
    override var returnType: String? = "void"
    override var isOverride: Boolean = false
    private val _parameters = mutableListOf<ParameterWriter>()
    private val _optionalParameters = mutableListOf<ParameterWriter>()
    private val _namedParameters = mutableListOf<ParameterWriter>()
    private var body: BodyWriter? = null

    init {
        builder?.invoke(this)
    }

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

    override fun write(): String {
        assert(name != null)
        val parameters = listOf(writeParameters(), writeOptionalParameters(), writeNamedParameters())
            .filter { it.isNotEmpty() }
            .joinToString(", ")
        return buildString {
            if (isOverride) {
                appendLine("@override")
            }
            appendLine("$returnType $name($parameters) {")
            if (body != null) {
                appendLine(body?.write()?.addTabs(true))
            }
            append("}")
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