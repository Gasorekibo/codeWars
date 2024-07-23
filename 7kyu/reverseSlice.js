function reverseSlice(str) {
  let result = [];
  const string = str.split('').reverse().join("");
   for(let i=0; i<string.length; i++) {
    result.push(string.slice(i));
   }
  return result;
}

console.log(reverseSlice('abcde')); // ==>  ['edcba', 'dcba', 'cba', 'ba', 'a']
