function pigIt(str) {
    const reg = /\w+/
  return str
    .split(" ")
    .map((each) => reg.test(each[0])?`${each.slice(1)}${each[0]}ay`:`${each.slice(1)}${each[0]}`)
    .join(" ");
}
console.log(pigIt("O tempora o mores !"))