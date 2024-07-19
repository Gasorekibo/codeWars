function getLargerNumbers(a, b) {
    return a.map((each, idx) => each > b[idx] ? each : b[idx]);
  }

  let arr1 = [13, 64, 15, 17, 88];
let arr2 = [23, 14, 53, 17, 80];
console.log(getLargerNumbers(arr1, arr2)); //[ 23, 64, 53, 17, 88 ]