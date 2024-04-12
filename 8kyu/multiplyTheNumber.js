// Jack really likes his number five: the trick here is that you have to multiply each number by 5 raised to the number of digits of each numbers
//200 --> 25000  (200 * 5³)
function multiply(number){
    if(number <0) {
        const longer = number.toString().split("").length -1
        return number*5**longer
    }
    else {
        const longer = number.toString().split("").length;
        return number*5**longer
    }
    
  }

  