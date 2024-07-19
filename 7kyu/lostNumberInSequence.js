function findDeletedNumber(arr, mixArr) {
  return arr.filter((each) => (mixArr.indexOf(each) === -1 ? each : 0))[0] || 0;
}
