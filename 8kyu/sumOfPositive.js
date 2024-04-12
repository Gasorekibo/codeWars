//Question: https://www.codewars.com/kata/5715eaedb436cf5606000381
function positiveSum(arr) {
  const result = arr
    .filter((num) => num > 0)
    .reduce(function (sum, curr) {
      return (sum += curr);
    }, 0);
  return result;
}
