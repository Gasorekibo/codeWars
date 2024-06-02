function scramble(str, arr) {
 const obj = {};
 const result = []
 for (let i = 0; i < str.length; i++) {
    obj[arr[i]] = str[i]
 }
 for (let val in obj) {
    result.push(obj[val])
 }
 return result.join("")
};
console.log(scramble('abcd', [0,3,1,2])) // 'acdb'