function flatten() {
  const flattenedArgs = []
  const args = Object.values(arguments);
  for (let i = 0; i < args.length; i++) {
    if (Array.isArray(args[i])) {
      flattenedArgs.push(...flatten(...args[i]));
    } else {
      flattenedArgs.push(args[i]);
    }
  }
  return flattenedArgs
}
console.log(flatten('a', ['b', 2], 3, null, [[4], ['c']]));
