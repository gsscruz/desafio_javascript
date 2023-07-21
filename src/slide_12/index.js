const lista = ['item 1', 'item 2', 'item 3']

const [item1, item2] = lista
const [, ...item2EItem3Array] = lista
const [,,item3] = lista
const novaLista = [
  'item 0',
  ...lista,
  'item 4',
]

console.log(item1) // item 1
console.log(item2) // item 2
console.log(item2EItem3Array) // [ 'item 2', 'item 3' ]
console.log(novaLista) // [ 'item 0', 'item 1', 'item 2', 'item 3', 'item 4' ]

const [letraA, letraB, letraC] = 'ABC'
console.log(letraA, letraB, letraC) // A B C
