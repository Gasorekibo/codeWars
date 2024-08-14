function count(string) {
  return string.split('').reduce((acc, curr) => {
    if (acc.hasOwnProperty(curr)) {
      acc[curr] += 1;
    } else {
      acc[curr] = 1;
    }
    return acc
  }, {});
}
