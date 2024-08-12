function propertyDecorator(target, propertyKey) {
  let value = target[propertyKey];

  const getter = () => value;
  const setter = (newValue) => {
      console.log(`设置属性 ${propertyKey}`);
      value = newValue;
  };

  Object.defineProperty(target, propertyKey, {
      get: getter,
      set: setter,
      enumerable: true,
      configurable: true
  });
}

class MyClass {
  @propertyDecorator
  property = "property";
}

const obj = new MyClass();
obj.property = 'new value';  // 输出: 设置属性 property
