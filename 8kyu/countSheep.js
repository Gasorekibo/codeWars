var countSheep = function (num){
    let count = 1;
    let str=""
    while(count <=num) {
      str+=`${count} sheep...`
      count++
    }
    return str
  }