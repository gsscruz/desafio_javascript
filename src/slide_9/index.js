const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const numerosDobrados = numeros.map((numero) => {
  return numero * 2;
})
const numerosMenorQue5 = numeros.filter((numero) => {
  return numero < 5;
})

console.log(numeros) // [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
console.log(numerosDobrados) // [ 2, 4, 6, 8, 10, 12, 14, 16, 18 ]
console.log(numerosMenorQue5) // [ 1, 2, 3, 4 ]
