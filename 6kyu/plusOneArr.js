function addOneToArray(arr) {
  if (arr.length === 0 || arr.some((num) => num < 0 || num > 9)) {
    return null;
  }

  let number = parseInt(arr.join(''));

  number += 1;

  return Array.from(String(number), Number);
}
