const nome = 'Tiago';
const habilidadesDoTiagos = [
  {
    nome: 'javascript',
    experienciaEmAnos: 5,
  },
]
const pessoa = {
  nome,
  idade: 40,
  habilidades: habilidadesDoTiagos,
  cumprimentar: () => {
    return 'Bom dia, tudo certo?';
  }
}
