export {}
// https://github.com/type-challenges/type-challenges/blob/master/questions/529-medium-absolute/README.md

// solutions
type RmUnderline<T extends string> = T extends `${infer Left}_${infer Right}`
  ? `${Left}${Right}`
  : T
type Absolute<T extends number | string | bigint> = `${T}` extends `-${infer P}`
  ? RmUnderline<P>
  : RmUnderline<`${T}`>

type Test = -100
type Result = Absolute<Test> // expected to be "100"

// case
type cases = [
  Expect<Equal<Absolute<0>, '0'>>,
  Expect<Equal<Absolute<-0>, '0'>>,
  Expect<Equal<Absolute<10>, '10'>>,
  Expect<Equal<Absolute<-5>, '5'>>,
  Expect<Equal<Absolute<'0'>, '0'>>,
  Expect<Equal<Absolute<'-0'>, '0'>>,
  Expect<Equal<Absolute<'10'>, '10'>>,
  Expect<Equal<Absolute<'-5'>, '5'>>,
  Expect<Equal<Absolute<-1_000_000n>, '1000000'>>,
  Expect<Equal<Absolute<9_999n>, '9999'>>,
]
