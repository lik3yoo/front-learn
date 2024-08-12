// 暂时性死区
function foo() {
  console.log(typeof a)
  let a = 123
}
foo()