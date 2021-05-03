import kotlin.js.JsExport

@JsExport
class DartLambdaWriter(builder: (DartLambdaWriter.() -> Unit)? = null) : LambdaWriter {
    private var _body: BodyWriter? = null
    private val _parameters = mutableListOf<ParameterWriter>()

    init {
        builder?.invoke(this)
    }

    override fun addBody(builder: BodyWriter.() -> Unit) {
        _body = DartBodyWriter(builder)
    }

    override fun addParameter(builder: ParameterWriter.() -> Unit) {
        _parameters += DartParameterWriter(null, builder)
    }

    override fun write(): String {
        return buildString {
            append(
                if (_parameters.isEmpty()) {
                    "()"
                } else {
                    "(${_parameters.joinToString(", ") { it.write() }})"
                }
            )
            append(" ")
            append(
                if (_body != null) {
                    "{\n${_body?.write()?.addTabs(true)}\n}"
                } else {
                    "{}"
                }
            )
        }
    }
}