function Person(name) {
  this.name = name
}

Person.prototype.say = function () {
  console.log(this.name)
}

console.log(typeof Person)

let person = new Person("helo")
console.log(person)
person.say()