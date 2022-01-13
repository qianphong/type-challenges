export {}

interface Todo {
  title: string
  description: string
  completed: boolean
}

type MyPick<T, K extends keyof T> = {
  [P in K]: T[P]
}

type TodoPreview = MyPick<Todo, 'title' | 'completed'>

const todo: TodoPreview = {
  title: 'Clean room',
  completed: false,
}

//test cases
interface Expected1 {
  title: string
}
interface Expected2 {
  title: string
  completed: boolean
}
type cases = [
  Expect<Equal<Expected1, MyPick<Todo, 'title'>>>,
  Expect<Equal<Expected2, MyPick<Todo, 'title' | 'completed'>>>,
  // @ts-expect-error
  MyPick<Todo, 'title' | 'completed' | 'invalid'>,
]



