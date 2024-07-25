function stringExpansion(s) {
  let result = "";
  let currentMultiplier = 1;

  for (let i = 0; i < s.length; i++) {
    if (!isNaN(s[i])) {
      currentMultiplier = parseInt(s[i]);
    } else {
      result += s[i].repeat(currentMultiplier);
    }
  }

  return result;
}
