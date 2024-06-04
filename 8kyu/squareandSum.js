const squareSum = numbers => numbers.length > 0 ? numbers.map((n)=> n*n).reduce((acc,curr)=> acc+=curr):0
