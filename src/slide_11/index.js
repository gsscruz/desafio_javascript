const numeros = [1, 2, 3, 4, 5]
const listaComDuplicados = ['banana', 'banana', 'abacaxi', 'banana', 'abacaxi']

const soma = numeros.reduce(
  (acumulador, numero) => acumulador + numero,
  0
)

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

console.log(soma) // 15
console.log(objetoComDuplicados) // { banana: 3, abacaxi: 2 }
