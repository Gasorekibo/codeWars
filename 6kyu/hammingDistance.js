function hamming(a,b) {
    return a.split('').filter(function(v,i) {return a[i]!=b[i]}).length;
  }

console.log(hamming('a man a plan a canal', 'a man a plan sobanal'));
