function digitize(n) {
    const toStr =  n.toString()
    return [...toStr].reverse().map(each => +each)
  }