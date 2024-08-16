function reverse(n){
  const nToStr = Array.from(String(n), Number);
    return nToStr.reverse().join("")
  }
  console.log(reverse(3442))