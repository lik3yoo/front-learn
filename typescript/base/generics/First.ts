type First<T extends unknown[]> = T extends [infer F, ...unknown[]] ? F : never;
type arr = [1, 2, 3];
type F = First<arr>;
