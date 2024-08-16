function isPangram(string) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  const stringLower = string.toLowerCase();
  for (let i = 0; i < alphabet.length; i++) {
    if (!stringLower.includes(alphabet[i])) {
      return false;
    }
  }
  return true;
}
