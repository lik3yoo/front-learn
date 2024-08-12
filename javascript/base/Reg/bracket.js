// 正则-括号
const str1 = "  hello  ";
const str2 = "-moz-transform";
const str3 = '1231231233'

function trim1(str) {
  return str.replace(/^\s+|\s+$/g, "");
}
function trim2(str) {
  return str.replace(/^\s*(.*?)\s*$/g, "$1");
}
console.log(trim1(str1));
console.log(trim2(str1));

function titleize(str) {
  return str.replace(/(^|\s+)\w/g, function (c) {
    return c.toUpperCase();
  });
}
console.log(titleize("hello world"));

function camelize(str) {
  return str.replace(/[-_\s]+(.)?/g, function (match, c) {
    console.log(c);
    return c.toUpperCase();
  });
}
function hyphenToCamelCase(property) {
  return property.replace(/-([a-z])/g, function (match, letter) {
    return letter.toUpperCase();
  });
}
console.log(camelize("-moz-transform"));
console.log(hyphenToCamelCase("-moz-transform"));

function dasheirze(str) {
  return str.replace(/([A-Z])/g, "-$1").toLowerCase();
}
console.log(dasheirze("HelloWorld"));

const reg = /^((\d)(\d(\d)))\1\2\3\4$/

console.log(reg.test(str3))
console.log(RegExp.$1)
console.log(RegExp.$2)
console.log(RegExp.$3)
console.log(RegExp.$4)


