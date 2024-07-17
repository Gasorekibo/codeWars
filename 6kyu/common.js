function common(arr1, arr2, arr3) {
  let intersectionSet = [];
    const setArg1 = new Set(arr1)
    const setArg2 = new Set(arr2)
    const setArg3 = new Set(arr3)
  for (let i of arr2) {
    if (setArg1.has(i) && setArg3.has(i)) {
      intersectionSet.push(i);
    }
  }
  return intersectionSet.length >0?intersectionSet?.reduce((sum, curr)=> sum+curr):0;
}
console.log(common([ 1 ], [ 1 ], [ 2 ]));
