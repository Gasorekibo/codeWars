// https://www.codewars.com/kata/5a1dc4baffe75f270200006b/solutions/javascript
function onlyDuplicates(str) {
    let obj = {}
    let keys = []
  str.split('').forEach(char => {
    obj[char] = (obj[char] || 0) + 1
})
for(let key in obj){
   obj[key] > 1 && keys.push(key)
}
return str.split('').map(char => keys.includes(char) ? char:"").join('')
}
