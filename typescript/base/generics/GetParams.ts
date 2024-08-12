type fun = (name: string, age: number) => string;
type GetParams<Fun extends Function> = Fun extends (...ages: infer P) => unknown ? P : never;
type funP = GetParams<fun>;
type GetReturnTpe<Fun extends Function> = Fun extends (...args: unknown[]) => infer Return
  ? Return
  : never;
