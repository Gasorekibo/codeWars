var countBits = (n) =>
  n
    .toString(2)
    .split('')
    .reduce((sum, curr) => +sum + +curr, 0);
