class Greeter {
  #log() {
    console.log('log')
  }
  test() {
    this.#log()
    console.log('test')
  }
}

const g1 = new Greeter()

g1.test()