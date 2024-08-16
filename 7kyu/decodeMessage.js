function decode(str) {
  let result = "";
  let index;
  const alphabets = "abcdefghijklmnopqrstuvwxyz";
  for (let char of str.split(" ")) {
    if (char.length <= 1) {
      index = alphabets.indexOf(char);
      result += " "+alphabets.charAt(alphabets.length - (index + 1)).replace("  ", " ");
    } else {
      result += " ";
      for (i of char) {
        index = alphabets.indexOf(i);
        result += alphabets.charAt(alphabets.length - (index + 1));
      }
    }
  }
  return result.trim().replace( /\s\s+/g, ' ' )
}
console.log(decode("r slkv mlylwb wvxlwvh gsrh nvhhztv"))