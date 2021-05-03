fun assert(value: Boolean) {
    if (!value) {
        throw IllegalStateException("Asserted value is false")
    }
}