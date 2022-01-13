export {}

const tesla = ['tesla', 'model 3', 'model X', 'model Y'] as const
type spaceX = [
  'FALCON 9',
  'FALCON HEAVY',
  'DRAGON',
  'STARSHIP',
  'HUMAN SPACEFLIGHT'
]

type Length<T extends any> = T extends ArrayLike<any> ? T['length'] : never 

type teslaLength = Length<typeof tesla> // expected 4
type spaceXLength = Length<spaceX> // expected 5
