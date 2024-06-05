function S(n) {
    num = 1;
    sum = 0;
    while (num <= n) {
     sum+=num;
     num++
    }
    return sum
 }
 function sumOfSums(x) {
     let num =1;
     sum = 0;
     while(num <=x) {
         sum+=(S(num))
         num++
     }
     return BigInt(S(sum))
 }