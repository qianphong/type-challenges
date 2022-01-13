export {}

type Concat<T extends any[], P extends any[]> = [...T, ...P]

type Result = Concat<[1, 2, 3], [2]> // expected to be [1, 2]

// test case

type cases = [
  Expect<Equal<Concat<[], []>, []>>,
  Expect<Equal<Concat<[], [1]>, [1]>>,
  Expect<Equal<Concat<[1, 2], [3, 4]>, [1, 2, 3, 4]>>,
  Expect<Equal<Concat<['1', 2, '3'], [false, boolean, '4']>, ['1', 2, '3', false, boolean, '4']>>,
]