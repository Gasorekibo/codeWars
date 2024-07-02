function disemvowel(str) {
  const reg = /[aeiou]/gi
  return str.replace(reg, "")

}
console.log(disemvowel("This website is for losers LOL!"));
