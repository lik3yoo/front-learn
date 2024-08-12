type TrimLeft<Str extends string> = Str extends `${" " | "\t"}${infer S}` ? TrimLeft<S> : Str;
type TrimRight<Str extends string> = Str extends `${infer S}${" " | "\t"}` ? TrimRight<S> : Str
type str = "  Hello   "
type strR = TrimLeft<TrimRight<str>>