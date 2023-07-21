const pessoa = {
  nome: 'Felipe Nolleto',
  endereco: { rua: 'Rua Bonita', numero: 123, cidade: undefined, estado: null },
  habilidades: [
    { id: 1, linguagem: 'JS' },
    { id: 2, linguagem: 'Ruby on Rails' },
  ]
}

const { nome, endereco: enderecoDaPessoa } = pessoa
const { numero, rua, cidade = 'Campinas', estado = 'São Paulo' } = enderecoDaPessoa
const {
  habilidades: [
    primeiraLiguagem,
    { linguagem: nomeDaSegundaLinguagem },
    terceiraLinguagem = 'Nada?'
  ]
} = pessoa

console.log(nome) // Felipe Nolleto
console.log(numero) // 123
console.log(rua) // Rua Bonita
console.log(cidade) // Campinas
console.log(estado) // null
console.log(primeiraLiguagem) // { id: 1, linguagem: 'JS' }
console.log(nomeDaSegundaLinguagem) // Ruby on Rails
console.log(terceiraLinguagem) // Nada?
