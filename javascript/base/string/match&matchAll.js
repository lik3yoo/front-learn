const str = "hello world 123 456";
const reg = /\d+/g;

console.log(str.match(reg));
console.log(...str.matchAll(reg));
