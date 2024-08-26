const sumOfMinimums = (arr) =>
  arr.map((each) => Math.min(...each)).reduce((sum, curr) => sum + curr);
