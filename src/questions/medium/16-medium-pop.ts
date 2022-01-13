export {}
// https://github.com/type-challenges/type-challenges/blob/master/questions/16-medium-pop/README.zh-CN.md

type Pop<T extends readonly any[]> = T extends [...infer V, any] ? V : never

type cases = [
  Expect<Equal<Pop<[3, 2, 1]>, [3, 2]>>,
  Expect<Equal<Pop<['a', 'b', 'c', 'd']>, ['a', 'b', 'c']>>,
]
