function spot(s1,s2){
    const result = []
    for(let i=0; i<s1.length;i++) {
      if(s1[i] !== s2[i]) {
        result.push(i)
      }
      
    }
    return result
  }