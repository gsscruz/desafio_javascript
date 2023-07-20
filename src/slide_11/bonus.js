const numeros = [1, 2, 3, 4, 5]

const soma = numeros.reduce(
  (acumulador, numero) => acumulador + numero,
  0
)

const listaComDuplicados = ['banana', 'banana', 'abacaxi', 'banana', 'abacaxi']

const objetoComDuplicados = listaComDuplicados.reduce(
  (acumulador, numero) => {
    const numeroDeDuplicados = acumulador[numero]

    if (numeroDeDuplicados) {
      acumulador[numero] = numeroDeDuplicados + 1
    } else {
      acumulador[numero] = 1
    }

    return acumulador
  },
  {}
)

const objetoComDuplicados2 = listaComDuplicados.reduce(
  (acumulador, numero) => {
    const numeroDeDuplicados = acumulador[numero] || 1

    return {
      ...acumulador,
      [numero]: numeroDeDuplicados + 1,
    }
  },
  {}
)

const pessoas = [
  { id: 1, nome: 'Julia', idade: 22 },
  { id: 2, nome: 'Henrique', idade: 18 },
  { id: 3, nome: 'Felipe', idade: 22 },
  { id: 4, nome: 'Marcelo', idade: 22 },
  { id: 5, nome: 'Carla', idade: 18 },
]

const objetoDePessoasComId = pessoas.reduce(
  (acumulador, pessoa) => {
    const { id } = pessoa

    return {
      ...acumulador,
      [id]: pessoa,
    }
  },
  {}
)

const pessoasAgrupadasPorIdade = pessoas.reduce(
  (grupos, pessoa) => {
    const { idade } = pessoa
    const grupoAtual = grupos[idade] || []

    return {
      ...grupos,
      [idade]: [...grupoAtual, pessoa]
    }
  },
  {}
)

console.log(objetoDePessoasComId)
