//Question: https://www.codewars.com/kata/578aa45ee9fd15ff4600090d
function sortArray(array) {
    const result = array.filter((num)=> num %2 !==0).sort((a,b)=> a-b)
    let loop = 0;
    for(let i=0; i<array.length;i++) {
      if(array[i] % 2 !== 0) {
        array[i] = result[loop]
        loop++
      }
    }
    return array
  }