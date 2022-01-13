export {}
type MyExclude<T, U> = T extends U ? never : T
type MyPick<T, K extends keyof T> = { [P in K]: T[P] }
type MyOmit<T, K extends keyof any> = MyPick<T, MyExclude<keyof T, K>>

interface Todo {
  title: string
  description: string
  completed: boolean
}

type TodoPreview = MyOmit<Todo, 'description' | 'title'>

const todo: TodoPreview = {
  completed: false,
}

type cases = [
  Expect<Equal<Expected1, MyOmit<Todo, 'description'>>>,
  Expect<Equal<Expected2, MyOmit<Todo, 'description' | 'completed'>>>
]

interface Todo {
  title: string
  description: string
  completed: boolean
}

interface Expected1 {
  title: string
  completed: boolean
}

interface Expected2 {
  title: string
}
