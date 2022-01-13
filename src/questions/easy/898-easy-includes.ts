export {}

// type Includes<T extends readonly any[], V, P = T[number]> =V extends P ? true : false

// type IsEqual<X, Y> = [X] extends [Y] ? ([Y] extends [X] ? true : false) : false

type IsEqual<X, Y> = (<T>() => T extends X ? 'a' : 'b') extends <T>() => T extends Y
  ? 'a'
  : 'b'
  ? true
  : false

type T11 = IsEqual<1, any> // any
type T12 = IsEqual<(x: 1) => void, (y: 1) => unknown> // void 协变
type T13 = IsEqual<(x: void) => 1, () => 1> // void 逆变

type T21 = IsEqual<{ a?: 1 }, {}> // 对象有且仅有一个未知 key 的情况
type T22 = IsEqual<{ a: 1 } | {}, {}> // 这个是上面的本质

type T31 = IsEqual<[1?], [] | [1]> // 问号的类型语意是什么？
type T32 = IsEqual<[1?], []>
type T33 = IsEqual<(x?: 1) => 1, () => 1> // 问号逆变是什么？

type Includes<T extends readonly any[], U> = true extends {
  [I in keyof T]: IsEqual<T[I], U>
}[number]
  ? true
  : false

type isPillarMen = Includes<[true, 2, 3, 5, 6, 7], boolean> // expected to be `false`

type is = boolean extends [true, 2, 3, 5, 6, 7][number] ? true : false

type cases = [
  Expect<
    Equal<Includes<['Kars', 'Esidisi', 'Wamuu', 'Santana'], 'Kars'>, true>
  >,
  Expect<
    Equal<Includes<['Kars', 'Esidisi', 'Wamuu', 'Santana'], 'Dio'>, false>
  >,
  Expect<Equal<Includes<[1, 2, 3, 5, 6, 7], 7>, true>>,
  Expect<Equal<Includes<[1, 2, 3, 5, 6, 7], 4>, false>>,
  Expect<Equal<Includes<[1, 2, 3], 2>, true>>,
  Expect<Equal<Includes<[1, 2, 3], 1>, true>>,

  Expect<Equal<Includes<[{}], { a: 'A' }>, false>>,

  Expect<Equal<Includes<[boolean, 2, 3, 5, 6, 7], false>, false>>,
  Expect<Equal<Includes<[true, 2, 3, 5, 6, 7], boolean>, false>>,

  Expect<Equal<Includes<[false, 2, 3, 5, 6, 7], false>, true>>,

  Expect<Equal<Includes<[{ a: 'A' }], { readonly a: 'A' }>, false>>,
  Expect<Equal<Includes<[{ readonly a: 'A' }], { a: 'A' }>, false>>
]
