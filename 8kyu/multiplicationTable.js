function multiTable(number) {
    let count = 1;
    let res= []
    while(count <=10) {
      res.push(`${count} * ${number} = ${count * number}`)
      count++
    }
   return(res.join("\n"))
  }