// 函数定义
function add1(x: number, y: number) {
  return x + y;
}

let add2: (x: number, y: number) => number;
type add3 = (x: number, y: number) => number;

interface add4 {
  (x: number, y: number): number;
}

// 泛型
function firstElement<Type>(arr: Type[]): Type | undefined {
  return arr[0];
}

const s = firstElement(["a", "b", "c"]);
const n = firstElement([1, 2, 3]);

function map<Input, Output>(arr: Input[], fn: (arg: Input) => Output): Output[] {
  return arr.map(fn);
}
const parsedArr = map(["1", "2"], (s) => parseInt(s));
