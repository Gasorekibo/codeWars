//Question: https://www.codewars.com/kata/57eae65a4321032ce000002d
function fakeBin(x){
    let result =""
  const xToStr = x.toString();
    for(let i=0; i<xToStr.length; i++) {
      if(xToStr[i]< 5) {
        result+=0
      }
      else {
        result+=1
      }
    }
    return result
  }