function lengthOfSequence(arr, n) {
  const firstIndex = arr.indexOf(n);
  const lastIndex = arr.lastIndexOf(n);
const numbers = arr.filter((x)=> x===n)
  if(lastIndex === firstIndex || numbers.length >2){
    return 0
  }
  const result = arr.slice(firstIndex, lastIndex + 1);
  return result.length;
}
