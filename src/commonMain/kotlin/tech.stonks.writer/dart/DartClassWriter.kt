import tech.stonks.writer.ClassWriter
import tech.stonks.writer.ConstructorWriter
import tech.stonks.writer.FieldWriter
import tech.stonks.writer.MethodWriter
import kotlin.js.JsExport

@JsExport
class DartClassWriter(builder: (DartClassWriter.() -> Unit)? = null) : ClassWriter {
    override var extends: String? = null
    override var name: String? = null
    private val _fields = mutableListOf<FieldWriter>()
    private val _methods = mutableListOf<MethodWriter>()
    private val _constructors = mutableListOf<ConstructorWriter>()

    init {
        builder?.invoke(this)
    }


    override fun addField(builder: FieldWriter.() -> Unit) {
        _fields += DartFieldWriter(builder)
    }

    override fun addMethod(builder: MethodWriter.() -> Unit) {
        _methods += DartMethodWriter(null, builder)
    }

    override fun addConstructor(builder: ConstructorWriter.() -> Unit) {
        _constructors += DartConstructorWriter().apply { builder() }
    }

    override fun write(): String {
        assert(name != null)
        return buildString {
            appendLine("class $name ${if (extends != null) "extends $extends " else ""}{")
            if (_fields.isNotEmpty()) {
                appendLine(_fields.joinToString("\n") { it.write() }.addTabs(true))
            }
            if (_constructors.isNotEmpty()) {
                appendLine()
                appendLine(_constructors.joinToString("\n") { it.write() }.addTabs(true))
            }
            if (_methods.isNotEmpty()) {
                appendLine()
                appendLine(_methods.joinToString("\n\n") { it.write() }.addTabs(true))
            }
            appendLine("}")
        }
    }
}