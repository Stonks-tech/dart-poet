import kotlin.js.JsExport

@JsExport
class DartMapWriter : MapWriter {
    override var map: MutableMap<String, String> = mutableMapOf()
    override fun addPair(key: String, value: String) {
        map[key] = value
    }

    override fun write(): String {
        return if (map.isEmpty()) {
            "{}"
        } else {
            buildString {
                appendLine("{")
                appendLine(map.map { (key, value) -> "\t$key: $value" }.joinToString(",\n"))
                append("}")
            }
        }
    }
}