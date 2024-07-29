function calcSum(str) {
  return str.split('').reduce((sum, curr) => +sum + +curr, 0);
}

function digitalRoot(n) {
  const nToStr = '' + n;
  let result = calcSum(nToStr);

  while (result.toString().length !== 1) {
    result = calcSum(result.toString());
  }

  return result;
}

//493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2