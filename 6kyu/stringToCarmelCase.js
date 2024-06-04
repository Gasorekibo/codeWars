function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
function toCamelCase(str) {
  const regex = /[-,_]/;

  const result = str.split(regex);
  let firtchar = result[0];
  const ans = result
    .slice(1)
    .map((x) => capitalizeFirstLetter(x))
    .join("");
  return `${firtchar}${ans}`;
}
console.log(toCamelCase("The_Stealth_Warrior"));
