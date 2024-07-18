function numbersOfLetters(num) {
    const answer = [];
    const numbers = {
      0: "zero",
      1: "one",
      2: "two",
      3: "three",
      4: "four",
      5: "five",
      6: "six",
      7: "seven",
      8: "eight",
      9: "nine",
    };
    let result = "";
    let test =""
    let numStr = num.toString();
    for (let i = 0; i < numStr.length; i++) {
      result += numbers[numStr[i]];
    }
    
    if(result.length > 9) {
      const nu = result.length.toString().split("")
      for(let i=0; i<nu.length;i++) {
          test+=numbers[nu[i]]
      
      }
      answer.push(result, test);
    }
    else {
      answer.push(result, numbers[result.length]);
    }
    if(answer[0] === answer[1]) {
      answer.pop()
      return answer
    }
    let i = 0;
    while (answer[i]?.length !== answer[i + 1]?.length) {
      answer.push(numbers[answer[i+1]?.length])
      i++;
    }
    return answer;
  }
console.log(numbersOfLetters(60)) //[ 'eightseven', 'onezero', 'seven', 'five', 'four' ]
//https://www.codewars.com/kata/599febdc3f64cd21d8000117
