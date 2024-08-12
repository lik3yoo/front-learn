const str: string = "test";
const age: number = 24;
const blen: boolean = true;
const undef: undefined = undefined;
const nul: null = null;
const obj: object = {
  str,
  age,
  blen,
};
const bigintVal1: bigint = 10n;
const bigintVal2: bigint = BigInt(10);
const sysmbolVar: symbol = Symbol("test");

// null undefined
// 当没有开启strictNullChecks 时,null 和undefined 会被视作string的子类型
// const nullStr: string = null
// const undefStr: string = undefined

// void 表示没有返回一个有意义的值
function fn1(): void {
  return;
}
function fn2(): void {}
function fn3(): void {
  return undefined;
}

// 数组
const arr1: string[] = ["1", "2"];
const arr2: Array<string> = ["1"];

// 元组
const arr3: [string, number] = ["1", 2];
// console.log(arr3[3])

// 具名元组
const arr4: [name: string, age: number] = ["张书", 13];

// 对象
interface UserInfo {
  readonly id: string; // 只读
  name: string;
  age: number;
  mail?: string; // 可选属性
  func?: Function;
}
const user1: UserInfo = {
  id: "0",
  name: "张三",
  age: 20,
  mail: "",
};
user1.func = () => {};
// user1.id = ''

interface Map1<T> {
  [key: string]: T;
}

let keys: keyof Map1<number>; //string | number
let value: Map1<number>["antzone"]; //number

const isString = (value: unknown): value is string => typeof value === "string";
const r = isString("number");
