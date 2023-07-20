const objetoInvalido = {
  nome completo: 'Felipe Nascimento',
}

const objetoValido = {
  'nome completo': 'Felipe Nascimento',
  42: 'A resposta de tudo'
}

// não é possível acessar assim:
console.log(objetoValido.nome completo)
console.log(objetoValido.'nome completo')
console.log(objetoValido.42)

// Somente
console.log(objetoValido["nome completo"]) // Felipe Nascimento
console.log(objetoValido[42]) // A resposta de tudo
