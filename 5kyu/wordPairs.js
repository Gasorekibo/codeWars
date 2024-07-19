function compoundMatch(arr, word) {
    let idx1, idx2;
    const result = arr.map((each, idx) => {
      for (let val of arr) {
        if (each + val === word) {
          idx1 = idx;
          idx2 = arr.indexOf(val);
          return [each, val, idx1, idx2];
        } else if (val + each === word) {
          idx1 = idx;
          idx2 = arr.indexOf(val);
          return [each, val, idx2, idx1];
        }
      }
    });
  if(result.filter((each) => Array.isArray(each))[0]) {
    
    const [a, b, c, d] = result.filter((each) => Array.isArray(each))[0];
    return [a, b, [c, d]];
  }
    return null
  }