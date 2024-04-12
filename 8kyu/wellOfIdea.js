// Question: https://www.codewars.com/kata/57f222ce69e09c3630000212
function well(x) {
  let good = 0;
  let bad = 0;
  for (let i = 0; i < x.length; i++) {
    if (x[i] === "good") {
      good++;
    } else {
      bad++;
    }
  }
  if (good === 1 || good === 2) {
    return "Publish!";
  } else if (good > 2) {
    return "I smell a series!";
  } else {
    return "Fail!";
  }
}
