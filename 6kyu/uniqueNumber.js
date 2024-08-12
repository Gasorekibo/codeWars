function findUniq(arr) {
  return arr.filter((el, idx, a) => a.indexOf(el) === a.lastIndexOf(el))[0];
}
