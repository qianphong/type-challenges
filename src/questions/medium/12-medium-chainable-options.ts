export {}

type Chainable<T = {}> = {
  option<K extends string, V>(key: K, val: V): Chainable<T & Record<K, V>>
  get(): T
}

declare const a: Chainable

const result = a
  .option('foo', 123)
  .option('bar', { value: 'Hello World' })
  .option('name', 'type-challenges')
  .get()

type cases = [Expect<Alike<typeof result, Expected>>]

type Expected = {
  foo: number
  bar: {
    value: string
  }
  name: string
}
