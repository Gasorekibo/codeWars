function createTwoSetsOfEqualSum(n) {
  
    const totalSum = (n * (n + 1)) / 2;
    if (totalSum % 2 !== 0) {
      return [];
    }
    const targetSum = totalSum / 2;
    const setOne = [];
    const setTwo = [];
    let currentSum = 0;
    
    for (let i = n; i >= 1; i--) {
      if (currentSum + i <= targetSum) {
        setOne.push(i);
        currentSum += i;
      } else {
        setTwo.push(i);
      }
    }
  
    return [setOne, setTwo];
  }