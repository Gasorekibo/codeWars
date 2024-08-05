function arrayDiff(a, b) {
    return a.filter(ele => !b.includes(ele))
}

console.log(arrayDiff([1,2],[1]))