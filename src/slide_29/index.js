let nome = 'Maria'

function cumprimentar() {
  console.log(`Olá ${nome}!`)
}

cumprimentar() // Olá Marina!
nome = 'João'
cumprimentar() // Olá João!

function obterTempo(local) {
  servicoDeTempo.obter(local, {
    aoConcluir: (temperatura) => {
      console.log(`${local}: ${temperatura}`)
    }
  })
}
