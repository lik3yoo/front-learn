// 字面量类型

interface Res {
  status: 0 | 20000
  message: string
  data?: [] | object
}
declare var res: Res  // 快速生成符合指定类型,但是没有实际值的变量,同时不存在变量中

// 联合类型 一组类型的可用集合
// 1. 联合类型中的函数类型,需要使用()包裹起来
// 2. 联合类型中嵌套联合类型,最终都会展平到同一级
interface Tmp {
  mixed: true | string | 123 | (() => {}) | (1 | 2)
}

