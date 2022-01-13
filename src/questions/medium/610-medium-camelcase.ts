export {}
// https://github.com/type-challenges/type-challenges/blob/master/questions/610-medium-camelcase/README.md

// solutions
type Words = {
  a: 'A'
  b: 'B'
  c: 'C'
}
type CamelCase<T extends string> =
  T extends `${infer Left}-${infer W}${infer Right}`
    ? `${Left}${W extends '-'
        ? '-'
        : W extends keyof Words
        ? Words[W]
        : `-${W}`}${CamelCase<`${W extends '-' ? '-' : ''}${Right}`>}`
    : T
type T = CamelCase<'foo--bar----baz'>
// case

type cases = [
  Expect<Equal<CamelCase<'foo-bar-baz'>, 'fooBarBaz'>>,
  Expect<Equal<CamelCase<'foo-Bar-Baz'>, 'foo-Bar-Baz'>>,
  Expect<Equal<CamelCase<'foo-Bar-baz'>, 'foo-BarBaz'>>,
  Expect<Equal<CamelCase<'foo-bar'>, 'fooBar'>>,
  Expect<Equal<CamelCase<'foo_bar'>, 'foo_bar'>>,
  Expect<Equal<CamelCase<'foo--bar----baz'>, 'foo-Bar---Baz'>>,
  Expect<Equal<CamelCase<'a-b-c'>, 'aBC'>>,
  Expect<Equal<CamelCase<'a-b-c-'>, 'aBC-'>>,
  Expect<Equal<CamelCase<'ABC'>, 'ABC'>>,
  Expect<Equal<CamelCase<'-'>, '-'>>,
  Expect<Equal<CamelCase<''>, ''>>,
  Expect<Equal<CamelCase<'😎'>, '😎'>>,
]
