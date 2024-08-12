type str = "hello";
type Replace<
  Str extends string,
  FROM extends string,
  TO extends string
> = Str extends `${infer Start}${FROM}${infer End}` ? `${Start}${TO}${End}` : Str;

type strR1 = Replace<str,'ll','oo'>
type strR2 = Replace<str,'11','oo'>
