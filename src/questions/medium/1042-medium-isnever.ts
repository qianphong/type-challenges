export {}
// https://github.com/type-challenges/type-challenges/blob/master/questions/1042-medium-isnever/README.md

// solutions
// type MyEqual<X, Y> = (<T>() => T extends X ? 1 : 2) extends <T>() => T extends Y
//   ? 1
//   : 2
//   ? true
//   : false
type IsNever<T> = [T] extends [never] ? true : false
type A = IsNever<never> // expected to be true
type B = IsNever<undefined> // expected to be false
type C = IsNever<null> // expected to be false
type D = IsNever<[]> // expected to be false
type E = IsNever<number> // expected to be false

// case
type cases = [
  Expect<Equal<IsNever<never>, true>>,
  Expect<Equal<IsNever<never | string>, false>>,
  Expect<Equal<IsNever<''>, false>>,
  Expect<Equal<IsNever<undefined>, false>>,
  Expect<Equal<IsNever<null>, false>>,
  Expect<Equal<IsNever<[]>, false>>,
  Expect<Equal<IsNever<{}>, false>>,
]
