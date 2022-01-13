export {}
// https://github.com/type-challenges/type-challenges/blob/master/questions/1097-medium-isunion/README.md

// solutions
type IsUnion<T, T2 = T> = T extends T2
  ? [T2] extends [T]
    ? false
    : true
  : never

type case1 = IsUnion<string> // false
type case2 = IsUnion<'a' | 'b' | 'c' | 'd'> // true
type case3 = IsUnion<[string | number]> // false

// case
type cases = [
  Expect<Equal<IsUnion<string>, false>>,
  Expect<Equal<IsUnion<string | number>, true>>,
  Expect<Equal<IsUnion<'a' | 'b' | 'c' | 'd'>, true>>,
  Expect<Equal<IsUnion<undefined | null | void | ''>, true>>,
  Expect<Equal<IsUnion<{ a: string } | { a: number }>, true>>,
  Expect<Equal<IsUnion<{ a: string | number }>, false>>,
  Expect<Equal<IsUnion<[string | number]>, false>>,
  // Cases where T resolves to a non-union type.
  Expect<Equal<IsUnion<string | never>, false>>,
  Expect<Equal<IsUnion<string | unknown>, false>>,
  Expect<Equal<IsUnion<string | any>, false>>,
  Expect<Equal<IsUnion<string | 'a'>, false>>,
]
