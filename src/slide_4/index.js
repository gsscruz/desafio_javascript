const naoDefinida1 = undefined;
let naoDefinida2; // usar `const` irá gerar um erro, já q nenhum valor foi atribuido
const nula = null;
const booleana1 = true;
const booleana2 = false;
const numero = 123;
const string = 'Hello world!';
const lista = [1, 'dois', false];
const objeto = { nome: 'Lucas', idade: 25 };
const funcao = (parametro1) => {
  return parametro1;
}

console.assert(nula); // null
console.assert(naoDefinida1); // undefined
console.assert(naoDefinida2); // undefined
console.assert(booleana1); // true
console.assert(booleana1); // false
console.assert(numero); // 123
console.assert(string); // Hello world!
console.assert(lista); // [ 1, 'dois', false ]
console.assert(objeto); // { nome: 'Lucas', idade: 25 }
console.assert(funcao('valor do parametro')); // valor do parametro
