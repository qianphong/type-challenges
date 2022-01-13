export {}
// https://github.com/type-challenges/type-challenges/blob/master/questions/296-medium-permutation/README.md

// solutions
// const obj = {
//   a: {
//     b: { c: '' },
//     c: { b: '' },
//   },
//   b: {
//     a: { c: '' },
//     c: { a: '' },
//   },
//   c: {
//     b: { a: '' },
//     a: { b: '' },
//   },
// }
// type ToArray<T extends string, P extends any[] = []> = {
//   [K in T]: Exclude<T, K> extends never
//     ? [...P, K]
//     : ToArray<Exclude<T, K>, [...P, K]>
// }

// type T = ToArray<'A' | 'B' | 'C'>
// type Foo = {
//   A: {
//     B: { C: ['A', 'B', 'C'] }
//     C: { B: ['A', 'C', 'B'] }
//   }
//   B: {
//     A: { C: ['B', 'A', 'C'] }
//     C: { A: ['B', 'C', 'A'] }
//   }
//   C: {
//     B: { A: ['C', 'B', 'A'] }
//     A: { B: ['C', 'A', 'B'] }
//   }
// }
// type Flatten<T, K = keyof T> = K extends number
//   ? T
//   : K extends K
//   ? Flatten<T[K]>
//   : never
// type R = Flatten<Foo>

type Permutation<T, K = T> = [T] extends [never]
  ? []
  : K extends K
  ? [K, ...Permutation<Exclude<T, K>>]
  : never

// case
type cases = [
  Expect<Equal<Permutation<'A'>, ['A']>>,
  Expect<
    Equal<
      Permutation<'A' | 'B' | 'C'>,
      | ['A', 'B', 'C']
      | ['A', 'C', 'B']
      | ['B', 'A', 'C']
      | ['B', 'C', 'A']
      | ['C', 'A', 'B']
      | ['C', 'B', 'A']
    >
  >,
  Expect<
    Equal<
      Permutation<'B' | 'A' | 'C'>,
      | ['A', 'B', 'C']
      | ['A', 'C', 'B']
      | ['B', 'A', 'C']
      | ['B', 'C', 'A']
      | ['C', 'A', 'B']
      | ['C', 'B', 'A']
    >
  >,
  Expect<Equal<Permutation<never>, []>>,
]
