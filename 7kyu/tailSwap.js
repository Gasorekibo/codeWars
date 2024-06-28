function tailSwap(arr) {
    const [a1,b1] = arr[0].split(":")
    const [a2,b2] = arr[1].split(":")
    const string1 = `${a1}:${b2}`
    const string2 = `${a2}:${b1}`
    return [string1, string2]
    }
console.log(tailSwap(["a:12345", "777:xyz"])) //["a:xyz", "777:12345"]