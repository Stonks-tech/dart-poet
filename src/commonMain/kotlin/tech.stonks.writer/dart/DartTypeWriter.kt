import tech.stonks.writer.TypeWriter
import kotlin.js.JsExport

@JsExport
class DartTypeWriter(builder: (DartTypeWriter.() -> Unit)? = null) : TypeWriter {
    override var name: String? = null
    private val _types = mutableListOf<TypeWriter>()

    init {
        builder?.invoke(this)
    }

    override fun addGenericType(builder: TypeWriter.() -> Unit) {
        _types += DartTypeWriter(builder)
    }

    override fun write(): String {
        assert(name != null)
        return buildString {
            append(name)
            if (_types.isNotEmpty()) {
                append("<${_types.joinToString(", ") { it.write() }}>")
            }
        }
    }
}