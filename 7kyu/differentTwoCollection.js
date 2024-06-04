function diff(a,b) {
const inA = [];
const inB = []
const result = []
for(let i of a) {
    if(!b.includes(i)) {
        inA.push(i)
    }
}
for(let y of b) {
    if(!a.includes(y)) {
        inB.push(y)
    }
}
 const ans= new Set([...inA, ...inB]);
 for (let i of ans) {
    result.push(i)
 }
 return result.sort()
}
console.log(diff(["a","b","z","d","e","d"],["a","b", "j","j"]))