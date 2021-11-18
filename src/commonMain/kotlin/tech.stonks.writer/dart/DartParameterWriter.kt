import tech.stonks.writer.ParameterWriter
import kotlin.js.JsExport

@JsExport
class DartParameterWriter(override var name: String?, builder: (ParameterWriter.() -> Unit)? = null) : ParameterWriter {
    override var type: String? = null
    override var defaultValue: String? = null
    override var isInitializer: Boolean = false

    init {
        builder?.invoke(this)
    }

    override fun write(): String {
        assert(name != null)
        return buildString {
            if (!isInitializer) {
                if (type != null) {
                    append("$type ")
                }
            } else {
                append("this.")
            }
            append(name)
            if (defaultValue != null) {
                append(" = $defaultValue")
            }
        }
    }
}