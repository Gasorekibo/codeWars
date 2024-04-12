//Question: https://www.codewars.com/kata/546e2562b03326a88e000020
function squareDigits(num){
    const numTostr = num.toString();
    let result = "";
    for(let i=0; i< numTostr.length; i++) {
      result+=(numTostr[i] *numTostr[i])
    }
    return parseInt(result)
  }