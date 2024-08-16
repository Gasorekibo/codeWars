function remember(str) {
    const result = [];
    let test = []
   const obj = str.split(" ").reduce((acc, curr)=> {
    for(let char of curr) {
         if(!acc.hasOwnProperty(char)) {
            acc[char]= 1;
        }
        else {
            acc[char]++
        }
    }
    return acc
   },{})
   for (let char in obj) {
    if(obj[char]>1) {
        result.push(char)
    }
   }
   return result
}
console.log(remember("limbojackassin the garden"))