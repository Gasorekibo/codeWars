
  
  function hungrySeven(arr) {
    return arr.reduce((acc, num, i) => {
      acc.push(num);
      return sevenEightNine(acc, i);
    }, []);
  }
  function sevenEightNine(arr, i) {
    let acc = [...arr];
    
    if (arr[i] === 9 && arr[i-1] === 8 && arr[i-2] === 7) {
      acc.splice(i - 2, 1);
      acc.push(7);
      return sevenEightNine(acc, i - 1);
    }
    
    return acc;
  }
const res = hungrySeven([8,7,8,7,9,8]);
console.log(res) // [ 8, 7, 8, 7, 9, 8 ]