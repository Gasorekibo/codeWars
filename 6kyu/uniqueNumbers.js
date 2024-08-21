function findUnique(numbers) {
    const unique = []
    const sorted = numbers.sort((a, b)=> a-b)
    for (let i = 0; i < sorted.length; i++) {
        if (sorted[i] !== sorted[i+1] && sorted[i] !== sorted[i-1]) {
            unique.push(sorted[i])
        }
    }
    return unique[0]
}