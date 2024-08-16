function mergeStrings(first, second){
    let result = first;
    for(let char of second) {
        if(!result.includes(char)) {
            result += char;
        }
    }
  }
  