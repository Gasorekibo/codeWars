function christmas(cb) {
    const data =  cb.toString().split(" ")
    return (data[1]=== "Dec"&& data[2]==="24")?true:false
}