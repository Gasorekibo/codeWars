function sumOfIntegersInString(s) {
  const re = /\d+/g;
  const matches = s.match(re)
  return (matches?.length >  0 ? matches.map(each => Number(each)).reduce((acc, curr) => +acc + +curr):0);
}