function Pessoa(nome) {
  this.nome = nome
}

Pessoa.prototype.teste1 = function () {
  console.log(this.nome) // Marina
}

Pessoa.prototype.teste1 = () => {
  console.log(this.nome) // undefined
}

const marina = new Pessoa('Marina')
marina.teste1()
marina.teste2()
