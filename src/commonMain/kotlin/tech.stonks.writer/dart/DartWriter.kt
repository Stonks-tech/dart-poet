import tech.stonks.writer.ClassWriter
import tech.stonks.writer.ImportWriter
import tech.stonks.writer.Writer
import kotlin.js.JsExport

@JsExport
class DartWriter : Writer {
    private val classes = mutableListOf<ClassWriter>()
    private val _imports = mutableListOf<ImportWriter>()

    override fun addClass(builder: ClassWriter.() -> Unit) {
        classes += DartClassWriter(builder)
    }

    override fun addImport(builder: ImportWriter.() -> Unit) {
        _imports += DartImportWriter().apply(builder)
    }

    override fun write(): String {
        return buildString {
            appendLine(_imports.joinToString("\n") { it.write() })
            append(classes.joinToString("\n\n") { it.write() })
        }
    }
}