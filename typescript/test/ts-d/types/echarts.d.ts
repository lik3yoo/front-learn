// declare namespace echarts {
//   function init(s: string): string
// }

declare namespace echarts {
  // 在这里添加 ECharts 类型声明
  function init(s: string): number
  function test(params: type): 'string' | null
}

export = echarts
