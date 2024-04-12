//Question: https://www.codewars.com/kata/57d532d2164a67cded0001c7
function makeString(num) {
    let answer = "";
    if (num > 100) {
      return;
    } else if (num === 0) {
      return answer+"\n";
    } else {
      for (let i = 0; i < num; i++) {
        answer += "#";
      }
      return answer + " " + num + "\n";
    }
  }
  function histogram(results) {
    let final = "";
    let counter = 6;
  
    for (let i = results.length-1; i >=0; i--) {
      final += counter + "|" + makeString(results[i]);
      counter--
    }
    return final;
  }