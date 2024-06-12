function high(str) {
  const alpha = "abcdefghijklmnopqrstuvwxyz";
  const result = [];
  let sum = 0;
  const arr = str.split(" ");
  for (let word of arr) {
    for (let char of word) {
      let index = alpha.indexOf(char) + 1;
      sum += index;
    }
    result.push(sum);
    sum = 0;
  }
  const max = result.indexOf(Math.max(...result));
  return arr[max];
}
console.log(high("what time are we climbing up the volcano"));
