function largest(num, arr) {
    return arr.sort((a,b)=> b-a).slice(0, num).sort((a,b)=> a-b)
}