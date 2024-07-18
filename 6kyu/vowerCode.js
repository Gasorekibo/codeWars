const Vowels = {
  a: 1,
  e: 2,
  i: 3,
  o: 4,
  u: 5,
};
function encode(string) {
  let result = "";
  for (let char of string) {
    if (Object.keys(Vowels).includes(char)) {
      result += Vowels[char];
    } else {
      result += char;
    }
  }
  return result;
}
const numbers = {
  1: "a",
  2: "e",
  3: "i",
  4: "o",
  5: "u",
};
function decode(string) {
  let result = "";
  for (let char of string) {
    if (Object.values(Vowels).includes(+char)) {
      result += numbers[char];
    } else {
      result += char;
    }
  }
  return result;
}
console.log(encode("hi there"));
console.log(decode("h3 th2r2"));
