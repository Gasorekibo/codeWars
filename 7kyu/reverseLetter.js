function reverseLetter(str) {
  const reversedStr = str.split("").reverse().join("");
  return reversedStr.match(/[a-z]/gi).join("");
}
console.log(reverseLetter("ultr53o?n"));
