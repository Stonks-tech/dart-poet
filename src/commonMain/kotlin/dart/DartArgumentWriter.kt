import kotlin.js.JsExport

@JsExport
class DartArgumentWriter(builder: (DartArgumentWriter.() -> Unit)? = null) : ArgumentWriter {
    override var name: String? = null
    override var value: String? = null

    init {
        builder?.invoke(this)
    }

    override fun write(): String {
        assert(value != null)
        return buildString {
            name?.let {
                append("$it: ")
            }
            append(value)
        }
    }
}