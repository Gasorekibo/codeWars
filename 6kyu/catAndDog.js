function solve(arr,n){
    let dogs = [];
     let cats = [];
     
     for (let i = 0; i < arr.length; i++) {
         if (arr[i] === 'D') {
             dogs.push(i);
         } else if (arr[i] === 'C') {
             cats.push(i);
         }
     }
     
     let dogIndex = 0;
     let catIndex = 0;
     let caughtCats = 0;
     
 
     while (dogIndex < dogs.length && catIndex < cats.length) {
         if (Math.abs(dogs[dogIndex] - cats[catIndex]) <= n) {
             
             caughtCats++;
             dogIndex++;
             catIndex++;
         } else if (dogs[dogIndex] < cats[catIndex]) {
         
             dogIndex++;
         } else {
             
             catIndex++;
         }
     }
     
     return caughtCats;
 
 }