// function validWord(dictionary, word) {
//   const str = dictionary.join("");
//   // const regex = new RegExp(`[${str}]`, "g");
//   // const result = regex.test(word)
//   // console.log(result)
//   return str.includes(word)
//   //return result === null ? false : true;
// }

function validWord(dictionary, word) {
  const str = dictionary.join('');
  const result = word.split(str);
  return result.length > 0 ? true : false;
  // return (
  //   str.includes(word) ||
  //   dictionary.reverse().join('').includes(word) ||
  //   word.includes(str) ||
  //   word.includes(dictionary.reverse().join(''))
  // );
}
console.log(validWord(['code', 'wars'], 'codecodewars'));
console.log('codecodewars'.includes('codewar'));
