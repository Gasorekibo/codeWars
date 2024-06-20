function to12Hours(time_string){
 const hr = parseInt(time_string.slice(0,2))
 const min = parseInt(time_string.slice(2))
 let to12
 if (hr > 12){
    to12 = `${hr - 12}:${min} PM`
 }
 else if (hr === 12){
    to12 = `${hr}:${min} PM`
 }
 else{
    to12 = `${hr}:${min} AM`
 }
 return to12

}
console.log(to12Hours("1830"))