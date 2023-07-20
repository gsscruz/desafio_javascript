class Pessoa {
  constructor(nome) {
    this.nome = nome
  }

  cumprimentar() {
    return `Olá, meu nome é ${this.nome}!`
  }
}

const klaus = new Pessoa('Klaus')
console.log(klaus.nome) // Klaus
console.log(klaus.cumprimentar()) // Olá, meu nome é Klaus!

const joao = new Pessoa('João')
console.log(joao.nome) // João
console.log(joao.cumprimentar()) // Olá, meu nome é João!
