function arr2bin(arr){
    let sum = 0;
     for(let i of arr) {
       if(typeof i === "number") {
         sum+=i
       } else {
         sum+=0
       }
     }
     return sum.toString(2)
   }