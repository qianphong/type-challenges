export {}

type MyReadonly2<T, K extends keyof T = keyof T> = Omit<T, K> & {
  readonly [S in K]: T[S]
}

interface Todo {
  title: string
  description: string
  completed: boolean
}
// type R = {
//   readonly title: string
//   readonly description: string
//   readonly completed:boolean
// } &  { title: string; description: string }
// const res: R = {
//   description: '2',
//   title: '3',
//   completed:false
// }
// res.completed = true
const todo: MyReadonly2<Todo, 'title' | 'description'> = {
  title: 'Hey',
  description: 'foobar',
  completed: false,
}

todo.title = 'Hello' // Error: cannot reassign a readonly property
todo.description = 'barFoo' // Error: cannot reassign a readonly property
todo.completed = true // OK

type cases = [
  Expect<Alike<MyReadonly2<Todo1>, Readonly<Todo1>>>,
  Expect<Alike<MyReadonly2<Todo1, 'title' | 'description'>, Expected>>,
  Expect<Alike<MyReadonly2<Todo2, 'title' | 'description'>, Expected>>
]

interface Todo1 {
  title: string
  description?: string
  completed: boolean
}

interface Todo2 {
  readonly title: string
  description?: string
  completed: boolean
}

interface Expected {
  readonly title: string
  readonly description?: string
  completed: boolean
}
