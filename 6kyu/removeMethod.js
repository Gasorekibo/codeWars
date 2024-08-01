Array.prototype.remove = function (pred) {
  let removedElements = [];
  let keptIndex = 0;
  for (let i = 0; i < this.length; i++) {
    if (pred(this[i])) {
      removedElements.push(this[i]);
    } else {
      this[keptIndex++] = this[i];
    }
  }
  this.length = keptIndex;
  return removedElements;
};
