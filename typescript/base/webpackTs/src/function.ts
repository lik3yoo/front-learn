// 函数定义
function fn1 (x: number, y: number) {
  return x + y
}


let fn2: (x: number, y: number) => number

// 类型别名
type fn3 = (x: number, y: number) => number

// 接口
interface fn4 {
  (x: number, y: number): number
}

// 可选参数
// 可选参数要在必选参数后
function fn5 (x: number, y?: number) {
  return y ? x + y : x
}

// 默认参数
// 必选参数调用时不可省略
function fn6 (x: number, y = 1, z: number) {
  return x + y + z
}
// fn6(1, 2)

// 剩余参数
function fn7 (x: number, ...rest: number[]) {
  return rest.reduce((pre, next) => pre + next, x)
}
let result = fn7(1, 2, 3, 4)
console.log(result) // 10

// 函数重载
function fn8 (...rest: number[]): number

function fn8 (...rest: string[]): string

function fn8 (...rest: any[]): any {
  return rest.reduce((x, y) => x + y,)
}
console.log(fn8(1, 2, 3))
console.log(fn8('a', 'b', 'c'))