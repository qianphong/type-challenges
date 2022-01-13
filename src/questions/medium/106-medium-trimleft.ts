export {}
// https://github.com/type-challenges/type-challenges/blob/master/questions/106-medium-trimleft/README.zh-CN.md

type TrimLeft<T extends string> = T extends `${' ' | '\n' | '\t'}${infer P}`
  ? TrimLeft<P>
  : T
type trimed = TrimLeft<'  Hello World  '> // 应推导出 'Hello World  '
