import kotlin.js.JsExport

@JsExport
class DartImportWriter : ImportWriter {
    override var importPackage: String? = null

    override fun write(): String {
        return "import \'$importPackage\';"
    }
}