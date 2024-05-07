
// https://www.codewars.com/kata/554e4a2f232cdd87d9000038/train/javascript

// 1 Way 
function dnaStrand(dna) {
  const arr = dna.split("");
  let result = [];
  for (let char of arr) {
    if (char === "A") {
      result.push("T")
    } else if (char === "T") {
      result.push("A");
    } else if (char === "C") {
      result.push("G");
    } else {
      result.push("C");
    }
  }
  return result.join("");
}

// 2 way

function dnaStrand(dna) {
    return dna.split("").map(char=> {
        switch(char){
            case 'A': return 'T';
            case 'T': return 'A';
            case 'C':return "G";
            case 'G':return "C"
        }
    }).join("")
}

// 3 way Favorite
var pairs = {'A':'T','T':'A','C':'G','G':'C'};

function DNAStrand(dna){
  return dna.split('').map(function(v){ return pairs[v] }).join('');
}

console.log(dnaStrand("GTAT"));