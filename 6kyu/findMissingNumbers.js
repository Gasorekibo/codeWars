function findNumber(start, stop, string) {
  let result = [];
  const args = [start, stop, string];

for(let i=args[0]; i<= args[1];i++) {
    if(args[2].indexOf(i) === -1) {
      result.push(i);
    }
    
}

  return result;
}

console.log(findNumber(1, 21, '1116122137143151617181920849510'));
