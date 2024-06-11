function divCon(x) {
  const numbers = x.filter((num) => typeof num === "number");
  const str = x.filter((num) => typeof num !== "number");
  return calculateSum(numbers) - calculateSum(str);
}

function calculateSum(arr) { 
    return (arr.length > 0 ? arr.reduce((sum, curr) => Number(sum) + Number(curr)) : 0);
}
