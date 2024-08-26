const removeDuplication = (arr) =>
  arr.filter((ele) => arr.indexOf(ele) === arr.lastIndexOf(ele));
