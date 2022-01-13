export {}

type MyExclude<T, V> = T extends V ? never : T

type Test = MyExclude<'a' | 'b' | 'c', 'b' | 'a'>
