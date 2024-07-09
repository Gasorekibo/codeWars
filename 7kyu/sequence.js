function sequenceSum(begin, end, step) {
  if (begin > end) {
    return 0;
  }
  let num = begin;
  const result = [];
  while (num <= end) {
    result.push(num);
    num += step;
  }
  
  return result.reduce((acc, curr) => acc + curr);
}
console.log(sequenceSum(198, 290, 62));
