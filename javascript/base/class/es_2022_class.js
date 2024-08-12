// 私有属性, class中以#开投的即为私有属性或方法
class Foo {
  name = 'foo1'
  #age = 18
  say() {
    console.log(this.#age)
  }
  // hasAge(foo) {
  //   return #age in foo
  // }
}


let foo = new Foo()

foo.say()
// foo.hasAge()
