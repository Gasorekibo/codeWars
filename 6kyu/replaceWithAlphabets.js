function alphabetPosition(str) {
    const arr = str.toLowerCase().split(" ")
    let res = ""
    const alpha = "abcdefghijklmnopqrstuvwxyz";
   for(let i of arr){
    for(let each of i) {
      if(alpha.includes(each)){
         res+=alpha.indexOf(each)+1+ " "
      }
       
    }
   }
  return res.trim()
}