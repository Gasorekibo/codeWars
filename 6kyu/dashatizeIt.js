function dashatizeIt(n){
 let result = ``   
 const arr = Math.abs(n).toString().split("")
 for(let num of arr) {
    if(num%2 !==0){
        result+= `-${num}-`
    } else {
        result+=num
    }
 }
 for(let i=0; i<result.length; i++){
    if(result[i]=== result[i+1]){
        result = result.replace(`--`, `-`)
    }
    else{
        result = result.replace(/^-|-$/g, ``)
    }
 }
 return result.trim()
}
console.log(dashatizeIt(-314))// 3-1-4