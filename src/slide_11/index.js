class Animal {
  constructor(nome) {
    this.nome = nome
  }

  cumprimentar() {
    return 'Sou um animal, portanto, não sei falar'
  }
}

class Pessoa extends Animal {
  cumprimentar() {
    return `Olá, meu nome é ${this.nome}!`
  }
}

const boris = new Animal('Boris')
console.log(boris.nome) // Boris
console.log(boris.cumprimentar()) // Sou um animal, portanto, não sei falar

const klaus = new Pessoa('Klaus')
console.log(klaus.nome) // Klaus
console.log(klaus.cumprimentar()) // Olá, meu nome é Klaus!
