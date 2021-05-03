import kotlin.js.JsExport

@JsExport
class DartInstantiateWriter(builder: (DartInstantiateWriter.() -> Unit)? = null) : InstantiateWriter {
    override var name: String? = null
    private val _arguments = mutableListOf<ArgumentWriter>()

    init {
        builder?.invoke(this)
    }

    override fun addArgument(builder: ArgumentWriter.() -> Unit) {
        _arguments += DartArgumentWriter(builder)
    }

    override fun write(): String {
        assert(name != null)
        return "$name(${writeArguments()})"
    }

    private fun writeArguments(): String {
        return if (_arguments.isEmpty()) {
            ""
        } else {
            _arguments.joinToString(",\n") { it.write() }.addTabs(true).prefix("\n").postfix(",\n")
        }
    }
}