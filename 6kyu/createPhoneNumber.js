//Question: https://www.codewars.com/kata/525f50e3b73515a6db000b83
function createPhoneNumber(numbers){
    let result=""
    const first= numbers.slice(0,3)
    const second = numbers.slice(3,6);
    const rest = numbers.slice(6);
    result+="("+first.join("")+")" +" "+second.join("")+"-"+rest.join("");
    return result
  }