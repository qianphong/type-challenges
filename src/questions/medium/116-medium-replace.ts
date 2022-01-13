export {}
// https://github.com/type-challenges/type-challenges/blob/master/questions/116-medium-replace/README.md

type Replace<
  T extends string,
  R extends string,
  V extends string,
> = R extends ''
  ? T
  : T extends `${infer Left}${R}${infer Right}`
  ? `${Left}${V}${Right}`
  : T

type cases = [
  Expect<Equal<Replace<'foobar', 'bar', 'foo'>, 'foofoo'>>,
  Expect<Equal<Replace<'foobarbar', 'bar', 'foo'>, 'foofoobar'>>,
  Expect<Equal<Replace<'foobarbar', '', 'foo'>, 'foobarbar'>>,
  Expect<Equal<Replace<'foobarbar', 'bra', 'foo'>, 'foobarbar'>>,
  Expect<Equal<Replace<'', '', ''>, ''>>,
]
