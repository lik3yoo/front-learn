class Animal {
  name: string = ""
  protected color: number = 1
  private len: number = 20
}

class Dog extends Animal {
  readonly age: number = 13   // 只读

  color = 2 // 在子类中才可修改受保护属性

  constructor(name: string) {
    super()
    this.name = name
  }
  // 默认为public 
  run () {
  }
  public say () {
  }

  private getName () {
    return this.name
  }
  getLen () {
    return this.getName() // 私有属性只能在类中访问
  }
  getColor (): number {
    return this.color
  }
  static getTest () {
    return 'test'
  }
}

console.log(Dog.prototype)
let dog = new Dog('mi dog')
console.log(dog)


// readonly protected  static  
// dog.age = 14  // 只读属性 readonly

// dog.color = 2  // 受保护属性 protected 只能再类或者其子类中访问,不能在实例中访问
console.log(dog.getColor())  // 受保护属性只能再子类实现中调用


// console.log(dog.len)

// console.log(dog.getTest())
console.log(Dog.getTest())  // 静态成员只能通过类访问,不能通过实例 访问

/**
 * 抽象类
 * 可以不指定方法的实现,在子类中进行实现
 */

abstract class Base {
  abstract getName (): string
  printName () {
    console.log(this.getName())
  }
}

class Top extends Base {
  getName (): string {
    return '123'
  }
}


/**
 * 接口与类
 */

interface Person {
  name: string
  age: number
}

class Person implements Person {
  name: string = 'person'
  age: number = 12
  getName (): string {
    return this.name
  }
}

