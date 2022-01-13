export {}
// https://github.com/type-challenges/type-challenges/blob/master/questions/531-medium-string-to-union/README.md

// solutions

type StringToUnion<T extends string> = T extends `${infer F}${infer O}`
  ? F | StringToUnion<O>
  : never
type Test = '123'
type Result = StringToUnion<Test> // expected to be "1" | "2" | "3"

// case
type cases = [
  Expect<Equal<StringToUnion<''>, never>>,
  Expect<Equal<StringToUnion<'t'>, 't'>>,
  Expect<Equal<StringToUnion<'hello'>, 'h' | 'e' | 'l' | 'l' | 'o'>>,
  Expect<
    Equal<
      StringToUnion<'coronavirus'>,
      'c' | 'o' | 'r' | 'o' | 'n' | 'a' | 'v' | 'i' | 'r' | 'u' | 's'
    >
  >,
]
