class GoodGretter {
  name!: string;
}

// index signature 索引签名
class MyClass {
  [s: string]: boolean | ((s: string) => boolean);

  check(s: string) {
    return this[s] as boolean;
  }
}
//

// this
class Class1 {
  name = "class1";
  getName(this: Class1) {
    return this.name;
  }
}
const c = new Class1();
console.log(c.getName());
console.log(c.getName.call({ name: 1 }));
