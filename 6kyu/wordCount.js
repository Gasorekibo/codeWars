function wordCount(text) {
    const excludeSet = new Set(["a", "the", "on", "at", "of", "upon", "in", "as"]);
    const words = text.match(/[a-zA-Z]+/g) || [];
    const filteredWords = words.filter(word => !excludeSet.has(word.toLowerCase()));
    return filteredWords.length;
}