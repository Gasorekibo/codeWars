function processData(data){
    const sum =[];
    for (let i of data) {
      for (let j=0; j<i.length-1; j++) {
        sum.push(i[j]-i[j+1])
      }
    }
    return sum.reduce((sum, curr)=> sum*curr)
  }