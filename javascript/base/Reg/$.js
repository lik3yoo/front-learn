const reg1 = /\d{4}-\d{2}-\d{2}/;
const reg2 = /(\d{4})-(\d{2})-(\d{2})/;
const date = "2023-12-19";

console.log(reg2.test(date));
console.log(RegExp.$1);
console.log(date.replace(reg2, "$3/$2/$1"))
