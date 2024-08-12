class Class1 {
  name = "class1";
  getName(this: Class1) {
    return this.name;
  }
}

const c = new Class1();

type GetThisType<T> = T extends (this: infer ThisType, ...args: any[]) => unknown
  ? ThisType
  : unknown;
type TT = GetThisType<typeof c.getName>;
