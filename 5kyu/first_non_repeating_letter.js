function first_non_repeating_letter(str) {
//     const arr = str.split("").reduce((acc, curr)=> {
//         if (acc[curr.toLowerCase()]) {
//             acc[curr.toLowerCase()]+=1
//         }
//         else {
//             acc[curr.toLowerCase()] = 1
//         }
//         return acc
//     },{})
//    console.log(Object.entries(arr).flat())

const arr = str.split("");
const set = new Set()
const dup = []
for (let char of arr) {
    if (!set.has(char)) {
        set.add(char);  
        arr.pop(char)  
    }
}
console.log(set)
console.log(arr)
}
console.log(first_non_repeating_letter("stress"))