function rot13(str) {
  const alpha = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
  ];
  const rot13 = [
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
  ];
  let result = '';
  for (let i = 0; i < str.length; i++) {
    let index = alpha.indexOf(str[i].toUpperCase());
    if (index === -1) {
      result += str[i];
    } else {
      result +=
        str[i] === str[i].toUpperCase()
          ? rot13[index]
          : rot13[index].toLowerCase();
    }
  }
  return result;
}
console.log(
  rot13(
    'Guvf vf npghnyyl gur svefg xngn V rire znqr. Gunaxf sbe svavfuvat vg! :)'
  )
); //  Guvf vf zl svefg EBG13 rkprepvfr!
