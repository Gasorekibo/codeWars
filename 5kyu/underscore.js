function toUnderscore(string) {
    const regex = /_(?=\d)/g;
  const str = string
    .toString()
    .split('')
    .map((ele) =>ele === ele.toUpperCase()?'_' + ele.toLowerCase():ele).join('');
    return (str[0] === '_' ? str.slice(1) : str).replace(regex, '');
}
