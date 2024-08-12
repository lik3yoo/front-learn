interface Echarts {
  init(s: string): string
}
declare module 'echarts' {
  export = Echarts
}
