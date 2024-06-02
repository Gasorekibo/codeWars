function findSmallestInt(arr) {
    return arr.reduce((acc, curr)=> {
      if(curr < acc) {
        acc = curr
      };
      return acc
    }, arr[0]);
  }
  console.log(findSmallestInt([78,56,232,12,8]))