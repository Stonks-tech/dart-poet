import kotlin.js.JsExport

@JsExport
interface ClassWriter : Writable {
    var name: String?
    var extends: String?
    fun build(builder: ClassWriter.() -> Unit) {
        builder()
    }

    fun addField(builder: FieldWriter.() -> Unit)
    fun addMethod(builder: MethodWriter.() -> Unit)
    fun addConstructor(builder: ConstructorWriter.() -> Unit)
}