function capitalizeCharAtIndex(str, i) {
    let result = '';
    for(let j=0; j<str.length; j++) {
        if(j === i) {
            result += str[j].toUpperCase()
        } else {
            result += str[j]
        }
    }
    return result
}
function wave(str) {
    if(str === '') return [];
    let waveArr = [];
    for(let i=0; i<str.length; i++) {
        if(str[i] === ' ') continue;
        waveArr.push(capitalizeCharAtIndex(str, i))
    }
    return waveArr.filter(ele => ele)
}
console.log(wave('two words'))