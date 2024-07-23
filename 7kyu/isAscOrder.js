function inAscOrder(arr) {
    const result = arr.map((ele, idx)=> ele < arr[idx+1] ? true:false)
    return result.slice(0,result.length-1).some(ele=> ele === false) ? false:true
  }