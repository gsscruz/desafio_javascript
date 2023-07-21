const soma = (a) => (b) => a + b;

// Mesma coisa que:
// const soma = (a) => {
//   return (b) => {
//     return a + b;
//   }
// }

const somar10 = soma(10)

console.log(typeof somar10) // function
console.log(somar10(2)) // 12
console.log(
  soma(21)(21) // 42
)
