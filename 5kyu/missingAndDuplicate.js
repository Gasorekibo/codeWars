function solution(arr) {
  let duplicate, missing;
  for (let i = 0; i < arr.length; i++) {
    let absValue = Math.abs(arr[i]);
    if (arr[absValue - 1] < 0) {
      duplicate = absValue;
    } else {
      arr[absValue - 1] = -arr[absValue - 1];
    }
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      missing = i + 1;
      break;
    }
  }

  return [missing, duplicate];
}
