function alphabetized(s) {
  return s
    .replace(/[^a-zA-Z]/g, '')
    .replaceAll(' ', '')
    .split('')
    .sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()))
    .join('');
}
