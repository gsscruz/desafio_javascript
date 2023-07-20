function Pessoa(nome) {
  this.nome = nome
}

Pessoa.prototype.cumprimentar = function () {
  return `Olá, meu nome é ${this.nome}!`
}

const julia = new Pessoa('Julia')
console.log(julia.nome) // Julia
console.log(julia.cumprimentar()) // Olá, meu nome é Julia!
