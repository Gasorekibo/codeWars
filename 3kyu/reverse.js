function reverse(a) {
    return a.myReverse()
};

Array.prototype.myReverse = function() {
    let result = []
    const arr = [...this].join("").match(/[a-z0-9]/gi)
    for(let i = this.length-1;i>=0; i--) {
        result.push(this[i])
    }
    return result
}
console.log(reverse([...'01234567890123456789'])) // [5,4,3,2,1]