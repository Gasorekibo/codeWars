function isSubsetOf(set1,set2) {
    return [...set1].every(ele=> set2.has(ele))?true:false
  }
  function isSupersetOf(set1,set2) {
    return [...set2].every(ele=> set1.has(ele))?true:false
  }