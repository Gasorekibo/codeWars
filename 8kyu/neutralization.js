//Question: https://www.codewars.com/kata/65128732b5aff40032a3d8f0
function neutralise(s1, s2) {
  let result = "";
  for (let i = 0; i < s2.length; i++) {
    s1[i] === "+" && s2[i] === "+"
      ? (result += "+")
      : s1[i] === "-" && s2[i] === "-"
      ? (result += "-")
      : (result += 0);
  }
  return result;
}
