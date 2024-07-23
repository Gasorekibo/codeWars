function nothingSpecial(str) {
  const regex = /[\w\s]/g;
  const toReplace = /_/g;
  const result = typeof str === 'string' ? str.match(regex) : 'Not a string!';
  return typeof result !== 'string'
    ? result
      ? result.join('').replace(toReplace, '')
      : ''
    : 'Not a string!';
}
