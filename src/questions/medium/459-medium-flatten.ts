export {}
// https://github.com/type-challenges/type-challenges/blob/master/questions/459-medium-flatten/README.zh-CN.md

// solutions

// other solution
// type Shift<T extends readonly any[]> = T extends [any, ...infer V] ? V : []
// type Flatten<
//   T extends readonly any[],
//   V extends any[] = [],
//   F extends any[] = T[0] extends any[] ? Flatten<T[0]> : [T[0]],
// > = [T['length']] extends [0] ? V : Flatten<Shift<T>, [...V, ...F]>

type Flatten<T extends any[]> = T['length'] extends 0
  ? []
  : T extends [infer F, ...infer O]
  ? F extends any[]
    ? [...Flatten<F>, ...Flatten<O>]
    : [F, ...Flatten<O>]
  : never

// // case
type cases = [
  Expect<Equal<Flatten<[]>, []>>,
  Expect<Equal<Flatten<[1, 2, 3, 4]>, [1, 2, 3, 4]>>,
  Expect<Equal<Flatten<[1, [2]]>, [1, 2]>>,
  Expect<Equal<Flatten<[1, 2, [3, 4], [[[5]]]]>, [1, 2, 3, 4, 5]>>,
  Expect<
    Equal<
      Flatten<[{ foo: 'bar'; 2: 10 }, 'foobar']>,
      [{ foo: 'bar'; 2: 10 }, 'foobar']
    >
  >,
]
