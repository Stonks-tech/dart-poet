fun String.addTabs(hasLeadingTab: Boolean = false): String {
    return replace("\n", "\n    ")
        .let {
            if (hasLeadingTab) {
                it.replace(Regex("^"), "    ")
            } else {
                it
            }
        }
}

fun String.prefix(prefix: String): String {
    return replace(Regex("^"), prefix)
}

fun String.postfix(postfix: String): String {
    return replace(Regex("$"), postfix)
}

fun String.toStringValue(): String = "\"$this\""