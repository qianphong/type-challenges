export {}
type Push<T extends any[], V> = [...T, V]

type Result = Push<[], 1> // [1, 2, '3']

// test cases
type cases = [
  Expect<Equal<Push<[], 1>, [1]>>,
  Expect<Equal<Push<[1, 2], '3'>, [1, 2, '3']>>,
  Expect<Equal<Push<['1', 2, '3'], boolean>, ['1', 2, '3', boolean]>>
]
