function sumNoDuplicates(numList) {
  const arrToSum = [];
  if (numList.length === 1) return numList[0];
  if (numList.length < 1) return 0;
  const result = numList.reduce((acc, curr) => {
    if (!acc.hasOwnProperty(curr)) {
      acc[curr] = 1;
    } else {
      acc[curr]++;
    }
    return acc;
  }, {});
  for (let key in result) {
    if (result[key] === 1) {
      arrToSum.push(key);
    }
  }
  const answer = arrToSum.length >= 1?arrToSum.reduce((acc, curr) => +acc + +curr):0;
  return Number(answer)
}
console.log(sumNoDuplicates([1, 9, 2, 1, 5, 5, 1, 1, 5, 10, 5, 9, 5, 2, 1]));
