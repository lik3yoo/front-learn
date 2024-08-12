enum Role {
  Reporter,
  Developer = 2,
  Reader
}

console.log(Role.Reporter)
console.log(Role[2])
console.log(Role)

// 字符串枚举
enum Message {
  SUCCESS = '成功',
  ERROR = "失败"
}
// Message.SUCCESS = '1'   // 枚举类型是只读类型

// 常量枚举
// 编译时会被移除
const enum Month {
  Jan,
  Feb,
  Mar
}
let month = [Month.Jan, Month.Feb, Month.Mar]
console.log(month)