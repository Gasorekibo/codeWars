function duplicateEncode(Str) {
    let string = ""
    let str = Str.toLowerCase().split("")
    const res =  str.reduce((acc, curr)=> {
        if(!acc.hasOwnProperty(curr)) {
            acc[curr] = 1
        } else {
            acc[curr] += 1
        }
       return acc
    },{})
  for(let char of str) {
    if(res[char] >1) {
        string += ')'
    } else {
        string += '('
    }
  }
  return string
}
console.log(duplicateEncode("Success"))