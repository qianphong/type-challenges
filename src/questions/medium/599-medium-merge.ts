export {}
// https://github.com/type-challenges/type-challenges/blob/master/questions/599-medium-merge/README.md

// solutions

type Merge<A, B> = {
  [K in keyof A | keyof B]: K extends keyof B
    ? B[K]
    : K extends keyof A
    ? A[K]
    : never
}
type T = Merge<Foo, Bar>
// case
type Foo = {
  a: number
  b: string
}
type Bar = {
  b: number
  c: boolean
}

type cases = [
  Expect<
    Equal<
      Merge<Foo, Bar>,
      {
        a: number
        b: number
        c: boolean
      }
    >
  >,
]
