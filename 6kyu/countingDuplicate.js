function duplicateCount(text) {
    let count = 0;
    let textArr = text.toLowerCase().split("");
    let obj = {};
    textArr.forEach((letter) => {
        if (obj[letter]) {
        obj[letter]++;
        } else {
        obj[letter] = 1;
        }
    });
    for (let key in obj) {
        if (obj[key] > 1) {
        count++;
        }
    }
    return count;
}

console.log(duplicateCount("aabbcde"));
