export {}
// https://github.com/type-challenges/type-challenges/blob/master/questions/645-medium-diff/README.md

// solutions
type ToObject<T> = {
  [K in keyof T]: T[K]
}
type Diff<O, O1> = ToObject<
  { [P in Exclude<keyof O, keyof O1>]: O[P] } & {
    [P in Exclude<keyof O1, keyof O>]: O1[P]
  }
>
type D = Diff<{ n: 1; a: 2 }, { n: 2; c: 1 }>
// case
type Foo = {
  name: string
  age: string
}
type Bar = {
  name: string
  age: string
  gender: number
}

type cases = [
  Expect<Equal<Diff<Foo, Bar>, { gender: number }>>,
  Expect<Equal<Diff<Bar, Foo>, { gender: number }>>,
]
