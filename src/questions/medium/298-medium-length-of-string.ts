export {}
// https://github.com/type-challenges/type-challenges/blob/master/questions/298-medium-length-of-string/README.md

// solutions

// type LengthOfString<
//   S extends string,
//   V extends readonly string[] = [],
// > = S extends `${infer P}${infer K}`
//   ? LengthOfString<K, [...V, P]>
//   : V['length']

type LengthOfString<
  S extends string,
  T extends readonly string[] = [],
> = S extends `${string}${infer R}`
  ? LengthOfString<R, [...T, string]>
  : T['length']

type T = LengthOfString<'3234'>
// case
type cases = [
  Expect<Equal<LengthOfString<''>, 0>>,
  Expect<Equal<LengthOfString<'kumiko'>, 6>>,
  Expect<Equal<LengthOfString<'reina'>, 5>>,
  Expect<Equal<LengthOfString<'Sound! Euphonium'>, 16>>,
]
