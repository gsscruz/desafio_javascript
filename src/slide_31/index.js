const criarContador = () => {
  let valor = 0;

  const incrementar = () => { valor++; };
  const getValor = () => valor;

  return {
    valor,
    incrementar,
    getValor,
  };
};

const obj = criarContador();

obj.incrementar();

console.log(obj.valor); // 0
console.log(obj.getValor()); // 1

obj.incrementar();

console.log(obj.valor); // 0
console.log(obj.getValor()); // 2
