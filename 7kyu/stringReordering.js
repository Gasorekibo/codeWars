function sentence(List) {
  let arr = List.map((el) => `${Object.entries(el)}`)
    .map((el) => el.split(","))
    .sort((a, b) => a[0] - b[0])
    .map((el) => `${el[1]}`)
    .join(" ");
  return arr;
}

list = [
  { 4: "dog" },
  { 2: "took" },
  { 3: "his" },
  { "-2": "Vatsan" },
  { 5: "for" },
  { 6: "a" },
  { 12: "spin" },
];
console.log(sentence(list));// Vatsan took his dog for a spin
