function mergeArrays(arr1, arr2) {
    const ans =[];
    const result = [...arr1, ...arr2].sort((a,b)=>a-b);
    for(let each of result) {
        if(!ans.includes(each)) {
            ans.push(each)
        }
    }
    return ans
  }
console.log(mergeArrays([1,3,5,7,9,11,12], [1,2,3,4,5,10,12]))