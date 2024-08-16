function betterThanAverage(classPoints, yourPoints) {
    const marksArr = [...classPoints,yourPoints]
    const average = marksArr.reduce((a, b) => (a + b), 0)
    return (yourPoints >= average/classPoints.length?true:false)
  }