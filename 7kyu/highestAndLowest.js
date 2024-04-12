//Question https://www.codewars.com/kata/554b4ac871d6813a03000035
function highAndLow(numbers){
    let number = numbers.split(" ");
   const result = number.map((num)=> parseInt(num))
    const max = Math.max(...result)
    const min = Math.min(...result)
    return `${max} ${min}`
   
  }