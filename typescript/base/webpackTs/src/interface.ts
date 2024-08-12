// 类型断言
interface I1 {
  name: string
}

interface I2 {
  age: number
}

const fn = (tem: I1) => { console.log(tem) }
let a: I1 = {
  name: 'a'
}
let b: I2 = {
  age: 1
}
fn(a)
fn(b as unknown as I1)
fn(<I1><unknown>b)

// 字符串类型接口
interface StringArray {
  [name: string]: string
}

// 数字类型接口
interface numberArray {
  [name: number]: number
}
