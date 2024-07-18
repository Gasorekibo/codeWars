function evenChars(string) {
  let result = [];
  let index = 1;
  if (string.length < 2 || string.length > 100) return "invalid string";
  while (index < string.length) {
    result.push(string[index]);
    index += 2;
  }
  return result;
}
