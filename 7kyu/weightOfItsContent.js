//Question: https://www.codewars.com/kata/53921994d8f00b93df000bea
function contentWeight(bottleWeight, scale) {
    scale = scale.split(' times ');
    var magnitude = +scale[0];
    var comparison = scale[1];
    if (comparison == 'larger')
      return bottleWeight * magnitude / (magnitude + 1);
    else
      return bottleWeight / (magnitude + 1);
  }