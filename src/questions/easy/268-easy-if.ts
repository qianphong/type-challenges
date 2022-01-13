export {}

type If<C, T, F> = C extends null | undefined ? never : C extends true ? T : F

type A = If<true, 'a', 'b'> // expected to be 'a'
type B = If<false, 'a', 'b'> // expected to be 'b'

// test cases

type cases = [
  Expect<Equal<If<true, 'a', 'b'>, 'a'>>,
  Expect<Equal<If<false, 'a', 2>, 2>>
]

type error = If<null, 'a', 'b'>
