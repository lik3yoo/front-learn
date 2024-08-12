interface Person {
  name: string;
}

interface PersonConstructor {
  new (name: string): Person;
}

type GetConstructParams<CS extends new (...args: any[]) => unknown> = CS extends new (
  ...args: infer Args
) => unknown
  ? Args
  : never;

type PCP = GetConstructParams<PersonConstructor>;
