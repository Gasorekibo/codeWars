export function spinWords(words: string): string {
  return words
    .split(' ')
    .map((ele) => (ele.length >= 5 ? ele.split('').reverse().join('') : ele))
    .join(' ');
}
