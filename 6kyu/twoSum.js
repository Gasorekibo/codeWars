Array.prototype.loopInto = function(n,result) {
    let ans = []
    for (let i = 0; i < this.length; i++) {
        if(n + this[i] === result){
            ans.push(this[i],n)
        };
    }
    return ans
};
function twoSum(arr, target) {
    for(let i of arr){
        
       const res = arr.loopInto(i, target)
       console.log(res,i)
       const sum = res.length >1&&res.reduce((a,b)=> a+b)
       if(sum === target){
        return res
       }
       else {
        console.log(i)
       }
    }
    
}

console.log(twoSum([2, 2, 3],3)) //1,2
//console.log([1,2,4,5].loopInto(4,9))