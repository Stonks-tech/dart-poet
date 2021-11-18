import tech.stonks.writer.AssignWriter
import kotlin.js.JsExport

@JsExport
class DartAssignWriter : AssignWriter {
    override var name: String? = null
    override var assign: String? = null

    override fun build(builder: AssignWriter.() -> Unit) {
        builder()
    }

    override fun write(): String {
        assert(name != null)
        assert(assign != null)
        return "$name = $assign"
    }
}