function hasUniqueChars(str) {
  return str
    .split('')
    .map((ele, idx, arr) => idx === arr.lastIndexOf(ele))
    .every((el) => el === true);
}
