export {}

type MyAwaited<T> = T extends null | undefined
  ? T
  : T extends object & { then(onfulfilled: infer F): any }
  ? F extends (value: infer V) => any
    ? MyAwaited<V>
    : never
  : T

// test cases
type X = Promise<string>
type Y = Promise<{ field: number }>
type Z = Promise<Promise<string | number>>

type cases = [
  Expect<Equal<MyAwaited<X>, string>>,
  Expect<Equal<MyAwaited<Y>, { field: number }>>,
  Expect<Equal<MyAwaited<Z>, string | number>>
]
