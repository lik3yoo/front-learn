class Person {
  constructor(name) {
    this.name = name
  }

  say() {
    console.log(this.name)
  }
}

console.log(typeof Person)

let person = new Person("he")
console.log(person)
person.say()
