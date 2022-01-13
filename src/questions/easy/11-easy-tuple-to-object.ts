export {}

const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const

type TupleToObject<T extends Readonly<string[]>> = {
  [V in T[number]]: V
}

// expected { tesla: 'tesla', 'model 3': 'model 3', 'model X': 'model X', 'model Y': 'model Y'}
type result = TupleToObject<typeof tuple> 


//test cases 
type cases = [
  Expect<Equal<TupleToObject<typeof tuple>, { tesla: 'tesla'; 'model 3': 'model 3'; 'model X': 'model X'; 'model Y': 'model Y'}>>,
]

// @ts-expect-error
type error = TupleToObject<[[1, 2], {}]>