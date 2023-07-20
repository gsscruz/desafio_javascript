const mutarObjeto = (objeto) => {
  objeto.novaPropriedade = 'teste'
  return objeto
}

const mutarLista = (lista) => {
  lista[1] = 'valor novo'
  return lista
}

const minhaLista = [1, 'dois', false];
const meuObjeto = { nome: 'Lucas', idade: 25 };

console.log(mutarLista(minhaLista)) // [ 1, 'valor novo', false ]
console.log(minhaLista) // [ 1, 'valor novo', false ]
console.log(mutarObjeto(meuObjeto)) // { nome: 'Lucas', idade: 25, novaPropriedade: 'teste' }
console.log(meuObjeto) // { nome: 'Lucas', idade: 25, novaPropriedade: 'teste' }
