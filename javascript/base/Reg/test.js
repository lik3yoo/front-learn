const reg = /^\d*\w*$/;

const str1 = "1hello";
const str2 = "hello";

console.log(reg.test(str1));
console.log(reg.test(str2));
