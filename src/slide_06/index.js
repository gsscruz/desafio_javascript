const nome = 'Tiago';
const habilidadesDoTiagos = [
  {
    nome: 'javascript',
    experienciaEmAnos: 5,
  },
]
const pessoa = {
  nome,
  idade: 40,
  habilidades: habilidadesDoTiagos,
  cumprimentar: () => {
    return 'Bom dia, tudo certo?';
  }
}

console.log(pessoa.nome) // Tiago
console.log(pessoa['idade']) // 40

const propriedade = 'habilidades'

console.log(pessoa[propriedade]) // [ { nome: 'javascript', experienciaEmAnos: 5 } ]
console.log(pessoa.propriedade) // undefined
