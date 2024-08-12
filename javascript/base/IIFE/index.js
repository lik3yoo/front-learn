function fn() {
  var a = 1;
  (function () {
    var b = 2;
    console.log(a)
  })()
  // 立即执行函数中的变量不会被外部获取到
  // console.log(b)  // b is not defined
}
fn()

for (let i = 1; i < 9; i++) {
  (function (num) {
    console.log(num)
  })(i)
}
