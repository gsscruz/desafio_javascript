const cumprimentar = (cumprimento) => (nome) => (trabalho) => {
  return `${cumprimento}, meu nome é ${nome} e trabalho com ${trabalho}!`
}
// Mesma coisa que:
// const cumprimentar = (cumprimento) => {
//   return (nome) => {
//     return (trabalho) => {
//       return `${cumprimento}, meu nome é ${nome} e trabalho com ${trabalho}!`
//     }
//   }
// }

const cumprimentarComBoaTarde = cumprimentar('Boa tarde')
const cumprimentarComBoaNoite = cumprimentar('Boa noite')

const boaTardeDoFernando = cumprimentarComBoaTarde('Fernando')
const boaTardeDaJulia = cumprimentarComBoaTarde('Julia')

console.log(
  boaTardeDoFernando('veterinária') // Boa tarde, meu nome é Fernando e trabalho com veterinária!
)
console.log(
  boaTardeDajulia('programacão') // Boa tarde, meu nome é Julia e trabalho com programação!
)
