function range(a, b, c) {
  const result = [];
  switch (arguments.length) {
    case 1:
      for (let i = 1; i <= a; i++) {
        result.push(i);
      }
    case 2:
      for (let i = a; i <= b; i++) {
        result.push(i);
      }

    default:
      for (let i = a; i <= c; i += b) {
        result.push(i);
      }
  }
  return result
}
