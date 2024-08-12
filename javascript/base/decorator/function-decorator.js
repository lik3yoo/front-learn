function methodDecorator(target, propertyKey, descriptor) {
  // target 是类的原型对象
  // propertyKey 是方法名
  // descriptor 是属性描述符
  const originalMethod = descriptor.value;
  descriptor.value = function(...args) {
      console.log("方法装饰器");
      return originalMethod.apply(this, args);
  };
}

class MyClass {
  @methodDecorator
  method() {
      console.log("方法执行");
  }
}

const obj = new MyClass();
obj.method();
// 输出: 方法装饰器
// 输出: 方法执行
