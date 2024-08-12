interface Add1 {
  (x: number, y: number): number
}

type Add2 = (x: number, y: number) => number

let add1: Add1 = (a, b) => a + b

let add2: Add2 = (a, b) => a + b

interface Lib {
  (): void
  str: string,
  doSomething (): void
}
let lib: Lib = (() => { }) as Lib
lib.str = "lib"
lib.doSomething = () => { }