function findMissing(sequence) {
  const n = sequence.length;
  const d2 = sequence[2] - sequence[1];
  for (let i = 0; i < n - 1; i++) {
    if (sequence[i + 1] - sequence[i] !== d2) {
      return sequence[i] + d2;
    }
  }
}
