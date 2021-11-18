import tech.stonks.writer.ArrayWriter
import kotlin.js.JsExport

@JsExport
class DartArrayWriter : ArrayWriter {
    private val _lines = mutableListOf<String>()
    override fun write(): String {
        return _lines
            .joinToString(",\n")
            .addTabs(true)
            .prefix("[\n")
            .postfix(",\n]")
    }

    override fun add(adder: ArrayWriter.() -> String) {
        _lines.add(adder())
    }
}