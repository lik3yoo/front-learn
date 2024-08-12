// 测试for和forEach性能
// for 性能好与forEach
// 数量越大，差距越大
const time1 = new Date()
const len_1000 = new Array(1000)
for(let i = 0; i < 1000; i++) {
  let str = i
}
const time2 = new Date()
const diff1 = time2 - time1
console.log(diff1, 'for运行1000')
len_1000.forEach((item, index) => {
  let str = index
})
const time3 = new Date()
const diff2 = time3 - time2
console.log(diff2, 'forEach 运行1000')
for(let i = 0; i < 1000000; i++) {
  let str = i
}
const time4 = new Date()
const diff3 = time4 - time3
console.log(diff3, 'for运行1000000')
const len_1000000 = new Array(1000000)
len_1000000.forEach((item, index) => {
  let str = index
})
const time5 = new Date()
const diff4 = time5 - time4
console.log(diff4, 'forEach 运行1000000')

for(let i = 0; i < 1000000000; i++) {
  let str = i
}
const time6 = new Date()
const diff5 = time6 - time5
console.log(diff5, 'for运行1000000000')
const len_1000000000 = new Array(1000000000)
len_1000000000.forEach((item, index) => {
  let str = index
})
const time7 = new Date()
const diff6 = time7 - time6
console.log(diff6, 'forEach 运行1000000000')

