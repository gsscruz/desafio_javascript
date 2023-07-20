const obterExtratoBancario = (servicoDoBanco, usuario) => {
  return servicoDoBanco.obterExtrato(usuario)
}
const usuario = { /* informações do usuario */ }

// obtem extrato do Banco do Brasil
obterExtratoBancario(abstracaoDoBancoDoBrasil, usuario)
// obtem extrato da Caixa
obterExtratoBancario(abstracaoDaCaixa, usuario)
// obtem extrato do Bradesco
obterExtratoBancario(abstracaoDaBradesco, usuario)
