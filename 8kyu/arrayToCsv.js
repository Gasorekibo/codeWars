//https://www.codewars.com/kata/5a34af40e1ce0eb1f5000036

function toCsvText(arr) {
  let result = "";
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      result = result + arr[i][j] + ",";
    }
    result = result.slice(0, -1);
    result = result + "\n";
  }
  return result.slice(0, -1);
}