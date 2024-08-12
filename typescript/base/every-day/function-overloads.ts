// 函数重载
function makeDate(timestamp: number): Date;
function makeDate(m: number, d: number, y: number): Date;

function makeDate(mOrTimestamp: number, d?: number, y?: number): Date {
  if (d != undefined && y != undefined) {
    return new Date(y, mOrTimestamp, d);
  } else {
    return new Date(mOrTimestamp);
  }
}
const d1 = makeDate(12345678);
const d2 = makeDate(5, 5, 5);
const d3 = makeDate(5, 5);

// 实现的方式要兼容之前所有的函数重载
function fn(x: boolean): boolean;
function fn(x: string): string;
function fn(x: boolean | string) {
  if (typeof x === "boolean") {
    return x;
  } else {
    return x;
  }
}
