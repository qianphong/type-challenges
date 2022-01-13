export {}
// https://github.com/type-challenges/type-challenges/blob/master/questions/191-medium-append-argument/README.zh-CN.md

type AppendArgument<Fn, A> = Fn extends (...args: infer T) => infer R
  ? (...args: [...rest: T, x: A]) => R
  : Fn

type Case1 = AppendArgument<(a: number, b: string) => number, boolean>
type Result1 = (a: number, b: string, x: boolean) => number

type Case2 = AppendArgument<() => void, undefined>
type Result2 = (x: undefined) => void

type cases = [Expect<Equal<Case1, Result1>>, Expect<Equal<Case2, Result2>>]
