const reg = /(?=(\d{3})+$)/g;
const num = 1234546789;

console.log(num.toString().replace(reg, ","));
  