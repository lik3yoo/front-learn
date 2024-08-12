interface Person {
  name: string;
}

interface PersonConstructor {
  new (name: string): Person;
}

type GetInstanceType<ConstructType extends new (...args: any[]) => unknown> =
  ConstructType extends new (...args: any[]) => infer InstanceType ? InstanceType : never;

type person = GetInstanceType<PersonConstructor>;
