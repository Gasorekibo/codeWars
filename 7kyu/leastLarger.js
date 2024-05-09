function leastLarger(a, i) {
  const value = a[i]
  const largerVals = a.filter(num => num > value)
  const leastLargeVal = Math.min(...largerVals)
  
  return a.findIndex(num => num === leastLargeVal)
}