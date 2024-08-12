type str = "startWith";
type startWith<T extends string, S extends string> = S extends `${S}${string}` ? true : false;
type strR = startWith<str, "start">;
