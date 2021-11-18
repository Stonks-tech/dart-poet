import tech.stonks.writer.ListWriter
import tech.stonks.writer.Writable
import kotlin.js.JsExport
import kotlin.js.JsName

@JsExport
@JsName("DartListWriter")
class DartListWriter : ListWriter {
    private val elements = mutableListOf<Writable>()
    override fun addElement(writable: Writable) {
        elements += writable
    }

    override fun write(): String {
        return buildString {
            append("[")
            if (elements.isNotEmpty()) {
                appendLine()
                elements.forEach {
                    appendLine(it.write())
                }
            }
            append("]")
        }
    }
}