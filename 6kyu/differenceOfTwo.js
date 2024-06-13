//https://www.codewars.com/kata/5340298112fa30e786000688/train/javascript
function twosDifference(input) {
    const result = [];
    for (let num of input) {
        const pairs = diff(num, input);
        for (let pair of pairs) {
            if (!containsPair(result, pair)) {
                result.push(pair);
            }
        }
    }
    return(result.sort((a, b)=> a[0]-b[0]));
}
function diff(num, input) {
let result = []
    for(let i of input) {
        if(num !== i) {
          if(num - i === 2) {
            result.push([i,num])
        } else if(i - num === 2) {
            result.push([num,i])
        }
        }
    }
    return result.sort()
}

function containsPair(result, pair) {
    for (let res of result) {
        if (res[0] === pair[0] && res[1] === pair[1]) {
            return true;
        }
    }
    return false;
}