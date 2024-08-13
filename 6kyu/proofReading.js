function proofread(str) {
return str.replace(/ie/gi, 'ei')
      .split('.')
      .filter((ele) => ele)
      .map(
        (each) =>
          each.trim()[0].toUpperCase() + each.trim().slice(1).toLowerCase()
      ).join('. ')+(str.slice(-1) === "." ? "." :"")
  }

console.log(
  proofread('ThiEr DEcIEt wAs INconcIEVablE. sHe SIeZeD thE moMENT.')
);
