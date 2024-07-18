function isIntArray(arr) {
    return arr && arr.every(ele=> Number.isInteger(ele))?true:false
  }