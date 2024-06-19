function sumDigits(number) {
  const arr = number.toString().split("");
  return arr.length === 0
    ? 0
    : number > 0
    ? arr.reduce((sum, curr) => +sum + +curr)
    : arr.slice(1).reduce((sum, curr) => +sum + +curr, 0);
}
