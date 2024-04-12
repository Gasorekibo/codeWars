//Question: https://www.codewars.com/kata/57cfdf34902f6ba3d300001e
function twoSort(s) {
    const sortedS = s.sort();
    const result = sortedS[0].split("").join("***")
    return result
  }