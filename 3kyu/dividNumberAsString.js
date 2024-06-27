function divideStrings(a, b) {
  function compare(a, b) {
    if (a.length > b.length) return 1;
    if (a.length < b.length) return -1;
    return a.localeCompare(b);
  }
  function divide(a, b) {
    let quotient = "";
    let currentDividend = "";

    for (let i = 0; i < a.length; i++) {
      currentDividend += a[i];
      currentDividend = currentDividend.replace(/^0+/, "");

      if (compare(currentDividend, b) >= 0) {
        let count = 0;
        let tempDividend = currentDividend;

        while (compare(tempDividend, b) >= 0) {
          tempDividend = subtract(tempDividend, b);
          count++;
        }

        quotient += count.toString();
        currentDividend = tempDividend;
      } else {
        quotient += "0";
      }
    }

    quotient = quotient.replace(/^0+/, "");
    currentDividend = currentDividend.replace(/^0+/, "");

    return [
      quotient === "" ? "0" : quotient,
      currentDividend === "" ? "0" : currentDividend,
    ];
  }
  function subtract(a, b) {
    let result = [];
    let borrow = 0;

    for (let i = a.length - 1, j = b.length - 1; i >= 0; i--, j--) {
      let digitA = parseInt(a[i]);
      let digitB = j >= 0 ? parseInt(b[j]) : 0;

      let diff = digitA - digitB - borrow;

      if (diff < 0) {
        diff += 10;
        borrow = 1;
      } else {
        borrow = 0;
      }

      result.push(diff);
    }

    result = result.reverse().join("").replace(/^0+/, "");

    return result === "" ? "0" : result;
  }
  let [quotient, remainder] = divide(a, b);
  return [quotient, remainder];
}
