import kotlin.js.JsExport

@JsExport
interface Writer : Writable {
    fun build(builder: Writer.() -> Unit) {
        builder()
    }

    fun addImport(builder: ImportWriter.() -> Unit)
    fun addClass(builder: ClassWriter.() -> Unit)
    override fun write(): String
}