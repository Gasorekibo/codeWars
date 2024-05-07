Array.prototype.square = function () {
    return this.map(num=> Math.pow(num,2))
  }
Array.prototype.cube = function () {
    return this.map(num=> Math.pow(num,3))
  }
Array.prototype.sum = function () {
    let total=0;
    for(let v of this) {
        total+=v;
    }
    return total
  }
Array.prototype.average = function () {
   
    return (this.sum()/this.length)
  }
Array.prototype.odd = function () {
   
    return this.filter(num=> num%2 !==0 )
  }
Array.prototype.even = function () {
    return this.filter(num=> num%2===0)
  }
 const numbers = [1, 2, 3, 4, 5];
 console.log(numbers.odd())