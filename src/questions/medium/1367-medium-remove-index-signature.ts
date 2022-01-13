export {}
// https://github.com/type-challenges/type-challenges/blob/master/questions/1367-medium-remove-index-signature/README.md

// solutions
type RemoveIndexSignature<T, K extends keyof T> = T[K]

type A = RemoveIndexSignature<Bar, 'bar'> // expected { foo(): void }

// case
type Foo = {
  [key: string]: any
  foo(): void
}

type Bar = {
  [key: number]: any
  bar(): void
}

type Baz = {
  bar(): void
  baz: string
}

type cases = [
  Expect<Equal<RemoveIndexSignature<Foo>, { foo(): void }>>,
  Expect<Equal<RemoveIndexSignature<Bar>, { bar(): void }>>,
  Expect<Equal<RemoveIndexSignature<Baz>, { bar(): void; baz: string }>>,
]
