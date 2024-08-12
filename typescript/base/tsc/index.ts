import { demo1 } from './src/demo1'
import { demo2 } from './src/demo2'

const fn = (name: string, age: number) => {
  console.log(`Hello ${name}, you are ${age} years old!`)
}

fn('John', 30)
demo1('John')
demo2('John')