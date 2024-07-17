function alphanumeric(string) {
    const regex =  /^[a-z0-9]+$/i
   const alphanum = string.match(regex)
    return alphanum ? true:false
}
console.log(alphanumeric('helloworld'))