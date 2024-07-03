function splitString(str) {
  let result = [];
  if (str.length % 2 === 0) {
    for (let i = 0; i < str.length; i += 2) {
      result.push(str[i] + str[i + 1]);
    }
  } else {
    for (let i = 0; i < str.length-1; i += 2) {
      result.push(str[i] + str[i + 1]);
    }
    result.push(str[str.length-1]+"_")
  }
  return result;
}
console.log(splitString("abcdefg")); // [ 'ab', 'cd', 'ef', 'g_' ]
