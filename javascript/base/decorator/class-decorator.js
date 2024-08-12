function classDecorator(target) {
  // target 是类的构造函数
  target.prototype.newProperty = "value";
  target.prototype.hello = function () {
    console.log("hello");
  };
}

@classDecorator
class MyClass {}

let obj = new MyClass();
obj.hello(); // 输出: hello
