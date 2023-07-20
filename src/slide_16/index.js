function Pessoa(nome) {
  this.nome = nome
}

Pessoa.prototype.teste1 = function () {
  console.log(this.nome) // Marina

  const arrowFunction = () => {
    console.log(this.nome) // Marina
  }

  function func() {
    console.log(this.nome) // undefined
  }

  arrowFunction()
  func()
}


const marina = new Pessoa('Marina')
marina.teste1()
