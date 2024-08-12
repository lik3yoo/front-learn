type arr = [1, 2, 3, 4];

type Pop<T extends unknown[]> = T extends [...infer P, unknown] ? P : never;
type test1 = Pop<arr>;

type Shift<T extends unknown[]> = T extends [unknown, ...infer S] ? S : never;
