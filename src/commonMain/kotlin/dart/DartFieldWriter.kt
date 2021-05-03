import kotlin.js.JsExport

@JsExport
class DartFieldWriter(builder: (DartFieldWriter.() -> Unit)? = null) : FieldWriter {
    override var name: String? = null
    override var type: String? = null
    override var isFinal: Boolean = true
    override var defaultValue: String? = null

    init {
        builder?.invoke(this)
    }

    override fun write(): String {
        assert(name != null)
        return buildString {
            append(if (isFinal) "final " else "")
            if (type == null && !isFinal) {
                append("var ")
            } else if (type != null) {
                append("$type ")
            }
            append(name)
            if (defaultValue != null) {
                append(" = $defaultValue")
            }
            append(";")
        }
    }
}