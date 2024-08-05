function countFeelings(string, array) {
    const numOfFeelings = array
      .map((ele) => ele.split('').filter((char) => string.includes(char)))
      .map((each) => each.join(''))
      .filter((ele) => array.includes(ele)).length;
    
    return numOfFeelings === 1 ? `${1} feeling.`: `${numOfFeelings} feelings.`
  }
