function findMissingLetter(letters) {
  const charCodes = letters.map((letter) => letter.charCodeAt(0));
  const missingCharCode =
    charCodes.find((code, index) => code + 1 !== charCodes[index + 1]) + 1;
  return String.fromCharCode(missingCharCode);
}
