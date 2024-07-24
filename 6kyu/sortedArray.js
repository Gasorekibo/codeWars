const nthSmallest = (...args) => {
  const arr = args.slice(0, -1)
  const n = args.slice(-1)

  return arr.reduce((acc, item) => acc.concat(item), []).sort((a, b) => a - b)[
    n - 1
  ]
}