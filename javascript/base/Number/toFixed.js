function toPercentage(num) {
  if (typeof num !== 'number') {
    return 'Invalid input';
  }
  if (num < 0 || num > 1) {
    return 'Input out of range';
  }
  var percentage = (num * 100).toFixed(2);
  return percentage.replace(/\.?0+$/, '') + '%';
}
console.log(toPercentage(0.1234))
console.log(toPercentage(1))
