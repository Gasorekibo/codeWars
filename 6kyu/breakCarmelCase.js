function solution(string) {
    let resultStr = string[0];
    for(let char=1; char<string.length; char++ ) {
        if(string[char] === string[char].toUpperCase()) {
            resultStr += ' ' + string[char];
        } else {
            resultStr += string[char];
        }
    }
    return resultStr;
  }
  console.log(solution("withThisValue"))