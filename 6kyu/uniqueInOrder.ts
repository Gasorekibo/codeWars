export function uniqueInOrder(
  iterable: string | (string | number)[]
): (string | number)[] {
  let result: (string | number)[] = [];
  for (let i = 0; i < iterable.length; i++) {
    if (iterable[i + 1] !== iterable[i]) {
      result.push(iterable[i]);
    } else {
      result;
    }
  }
  return result;
}
