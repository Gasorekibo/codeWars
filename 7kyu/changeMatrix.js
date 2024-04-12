// Question:https://www.codewars.com/kata/581214d54624a8232100005f
function matrix(array) {
    const newArr = array.flat();
    const numberPerRow = newArr.length / array.length;
    let result = [];
    const firstRowLen = array[0].length
    let counter = 0;
    while (counter < newArr.length) {
      if (newArr[counter] < 0) {
        newArr[counter] = 0;
      } else {
        newArr[counter] = 1;
      }
      counter +=firstRowLen+1;
    }
    for (let i = 0; i < newArr.length; i += numberPerRow) {
      result.push(newArr.slice(i, i + numberPerRow));
    }
    return result; 
}