// Introdução a Arrays

// Add Elementos a um Array
/*
const numeros = [1, 2, 3];
numeros.unshift(0);
console.log(numeros);

numeros.splice(1, 0, 'A');
console.log(numeros);

numeros.push(5);
console.log(numeros);
*/

// Encontrando Elementos do Tipo Primitivos
/*
const numeros = [1, 2, 3, 1];
console.log(numeros.indexOf(2));
console.log(numeros.lastIndexOf(1));
*/

// Encontrando Elementos do Tipo Referência
/*
const marcas = [
    {id: 1, nome: 't'},
    {id: 2, nome: 'h'},
    {id: 3, nome: 'i'},
];

const marca = marcas.find(function(marca){
    return marca.nome === 'i';
});

console.log(marca);
*/

// Arrow Functions
/*
const marcas = [
    {id: 1, nome: 't'},
    {id: 2, nome: 'h'},
    {id: 3, nome: 'i'},
];

console.log(marcas.find((marca) => marca.nome === 'i'));
*/

// Removendo elementos de um Array
/*
const numeros = [1, 2, 3, 4, 5, 6];

numeros.pop();
numeros.shift();
numeros.splice(2, 1);

console.log(numeros);
*/

// Esvaziando um Array
/*
let numeros = [1, 2, 3];
numeros = [];
console.log(numeros);

let numeros1 = [1, 2, 3];
console.log(numeros1);
numeros1.length = 0;
console.log(numeros1);
*/

// Combinando um Array

const primeiro = [1, 2, 3];
const segundo = [4, 5, 6];

const combination = primeiro.concat(segundo);
console.log(combination);

const cortado = combination.slice(1, 3);
console.log(cortado);