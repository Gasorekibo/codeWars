String.prototype.isUpperCase = function () {
  const regex = /\s/g
  const word = /\w/g
  const result = []
  const str = this.match(word).join("").replace(regex, "")
  for(let i=0; i<str.length; i++) {
    result.push(str.charCodeAt(i))
  }
  return result.every((char)=> char >=65 && char <=90)
  
};
console.log('BOB WALKS HIS DOG EVERY DAY.'.isUpperCase())