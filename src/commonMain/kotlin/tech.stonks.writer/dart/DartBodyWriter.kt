import tech.stonks.writer.BodyWriter
import kotlin.js.JsExport

@JsExport
class DartBodyWriter(builder: (DartBodyWriter.() -> Unit)? = null) : BodyWriter {
    private val _lines = mutableListOf<String>()
    override var returnLine: String? = null

    init {
        builder?.invoke(this)
    }

    override fun addLine(line: String) {
        _lines += line
    }

    override fun write(): String {
        val lines = mutableListOf<String>()
        if (_lines.isNotEmpty()) {
            lines.addAll(_lines.map { "$it;" })
        }
        if (returnLine != null) {
            lines.add("return $returnLine;")
        }
        return lines.joinToString("\n")
    }
}