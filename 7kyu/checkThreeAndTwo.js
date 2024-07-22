function checkThreeAndTwo(arr) {
    const arrOfA = arr.filter((e)=> e=== "a").length;
    const arrOfB =  arr.filter((e)=> e=== "b").length;
    const arrOfC =  arr.filter((e)=> e=== "c").length;
    const total = [arrOfA,arrOfB,arrOfC]
    return total.includes(2) && total.includes(3)?true:false
  }