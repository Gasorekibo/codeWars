function countSmileys(arr) {
  const pairOfEyes = [';', ':'];
  const pairOfNose = ['-', '~'];
  const pairOfMouth = [')', 'D'];
  const result = arr.filter((ele) => {
    if (ele.length === 2) {
      return pairOfEyes.includes(ele[0]) && pairOfMouth.includes(ele[1]);
    } else if (ele.length === 3) {
      return (
        pairOfEyes.includes(ele[0]) &&
        pairOfNose.includes(ele[1]) &&
        pairOfMouth.includes(ele[2])
      );
    }
  });
  return result.length;
}
console.log(countSmileys([':)', ';(', ';}', ':-D']))
