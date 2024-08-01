class Num {
    constructor(num){
      this.num=num;
    }
    toString() {
      return "The number is " + this.num;
    }
    valueOf() {
        return {num: this.num};
    }
  }

    Num.prototype[Symbol.toPrimitive] = function(hint) {
        return this.num
    }
console.log(new Num(5) + new Num(5)) //10
  x = new Num(100);
  y = new Num(5);
  console.log(x + y)// == 105;
  console.log(x*y)// == 500;
  console.log(x-y)// == 95
  console.log(x/y)// == 20
  console.log(Math.floor(new Num(100.5)))// == 100)//