const minhaFuncao = (parametro) => {
  parametro = parametro + parametro
  return parametro
}

const string = 'Olá mundo'
const numero = 123
const booleano = true
const nulo = null
const naoDefinido = undefined

console.log(minhaFuncao(string)) // Olá mundoOlá mundo
console.log(string) // Olá mundo
console.log(minhaFuncao(numero)) // 246
console.log(numero) // 123
console.log(minhaFuncao(booleano)) // 2
console.log(booleano) // true
console.log(minhaFuncao(nulo)) // 0
console.log(nulo) // null
console.log(minhaFuncao(naoDefinido)) // NaN
console.log(naoDefinido) // undefined
