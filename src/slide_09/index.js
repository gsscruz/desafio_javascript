const frutas = ['Abacaxi', 'Morango', 'Banana']

console.log(frutas.length) // Tamanho do array 3

frutas.forEach((fruta, index) => {
  console.log(`${index}: ${fruta}`) // 0: Abacaxi, 1: Morango, 2: Banana
})

frutas.push('Maça') // Adiciona no final do array
console.log(frutas) // [ 'Abacaxi', 'Morango', 'Banana', 'Maça' ]

frutas.unshift('Mamão') // Adiciona no começo do array
console.log(frutas) // [ 'Mamão', 'Abacaxi', 'Morango', 'Banana', 'Maça' ]

frutas.pop() // Remove o ultimo item do array
console.log(frutas) // [ 'Mamão', 'Abacaxi', 'Morango', 'Banana' ]

frutas.shift() // Remove o primeiro item do array
console.log(frutas) // [ 'Abacaxi', 'Morango', 'Banana' ]
