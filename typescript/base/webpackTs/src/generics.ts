/**
 * 泛型
 */

function log<T> (arg: T): T {
  console.log(arg)
  return arg
}

function logArr<T> (arg: T[]): T[] {

  return arg
}

type LogType = <T>(arg: T) => T
let log1: LogType = log


// 泛型class
class GC<T>{
  name?: T
}

let gcc = new GC<string>()


type LenType = {
  length: string
}

function lenLog<T extends LenType> (arg: T): T {
  console.log(arg.length)
  return arg
}