function greatestProduct(str) {
  let arr = [];
  for (let i = 0; i < str.length; i++) {
    if (str.length - i <5) {
      break
    } else {
      let num = str.substring(i, i + 5);
      arr.push(num);
    }
  }
  console.log(arr);
  const result = arr.map((each) => {
    return each.split("").reduce(
      (sum, curr) => Number(sum) * Number(curr),

      1
    );
  });
  return Math.max(...result);
}

console.log(greatestProduct("621037001986"));
