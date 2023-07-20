const numeros = [1, 2, 3, 4, 5]

for (let index = 0; index < numeros.length; index++) {
  var numero = numeros[index];

  setTimeout(() => {
    console.log(numero)
  }, 1)
}
