
exports.min = function min (array) {
  if(Array.isArray(array)) {
    let result = array[0];
    array.forEach((item) => {
       result = item < result ? item : result;});
  return result;
  }
  return 0;
}

exports.max = function max (array) {
  if(array.length !==0) {
    let result = array[0];
    array.forEach((item) => {
       result = item > result ? item : result;});
  return result;
  }
  return 0;
}

exports.avg = function avg (array) {
  let result = 0;
  if(array.length != 0) {
    let sum = 0;
    array.forEach((item) => {
       sum += item});
   result = sum / array.length;}
  return result;
}
