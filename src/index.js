
exports.min = function min (array = []) {
  if (array[0] === undefined) {
    return 0;
  }
  else {
    return array.reduce((min, cur) => (cur < min) ? cur : min, array[0]);
  }
}

exports.max = function max (array = []) {
  if (array[0] === undefined) {
    return 0;
  }
  else {
    return array.reduce((max, cur) => (cur > max) ? cur : max, array[0]);
  }
}

exports.avg = function avg (array = []) {
  if (array[0] === undefined) {
    return 0;
  }
  else {
    return array.reduce((sum, cur) => cur + sum, 0) / array.length;
  }
}
