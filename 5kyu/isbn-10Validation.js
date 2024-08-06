function validISBN10(isbn) {
  console.log(isbn);
  if (
    isbn.length !== 10 ||
    (isbn.includes('X') && isbn.indexOf('X') !== isbn.length - 1)
  )
    return false;
  let position = [];
  let count = 1;
  while (count <= isbn.length) {
    position.push(count);
    count++;
  }
  let sum = 0;
  for (let i = 0; i < isbn.length; i++) {
    if (isbn[i] === 'X') {
      sum += 10 * position[i];
    } else {
      sum += +isbn[i] * position[i];
    }
  }
  return sum % 11 === 0 ? true : false;
}
