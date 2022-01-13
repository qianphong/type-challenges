export {}
// https://github.com/type-challenges/type-challenges/blob/master/questions/62-medium-type-lookup/README.zh-CN.md

type IsEqual<T, V> = (<P>() => T extends P ? 1 : 2) extends <P>() => V extends P
  ? 1
  : 2
  ? true
  : false

type LookUp<T extends { type: string }, V> = T extends { type: V } ? T : never

interface Cat {
  type: 'cat'
  breeds: 'Abyssinian' | 'Shorthair' | 'Curl' | 'Bengal'
}

interface Dog {
  type: 'dog'
  breeds: 'Hound' | 'Brittany' | 'Bulldog' | 'Boxer'
  color: 'brown' | 'white' | 'black'
}
type Test = LookUp<Animal, 'dog' | 'cat'>

type Animal = Cat | Dog

type cases = [
  Expect<Equal<LookUp<Animal, 'dog'>, Dog>>,
  Expect<Equal<LookUp<Animal, 'cat'>, Cat>>,
]
