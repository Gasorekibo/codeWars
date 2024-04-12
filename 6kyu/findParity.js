//Question: https://www.codewars.com/kata/5526fc09a1bbd946250002dc
function findOutlier(integers){
    const even = integers.filter((num)=> num % 2===0);
    const odd = integers.filter((num)=> num % 2!==0);
    if(even.length > odd.length) {
      return odd[0]
    }
    else {
      return even[0]
    }
  }