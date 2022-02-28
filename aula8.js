// operador spread:
/*
const primeiro = [1, 2, 3];
const segundo = [4, 5, 6];

const combinado = [...primeiro, 'a', ...segundo];
console.log(combinado);
*/

// foreach:
/*
const numeros = [1, 2, 3, 4, 5, 6];

for (let n in numeros){
    console.log(n)
}

console.log('_____________');

numeros.forEach((indice, numero) => console.log(`${indice} - ${numero}`));
*/

// Combinando Arrays:
/*
const numeros = [1, 2, 3, 4, 5, 6];

const combiando = numeros.join(' - ')
console.log(combiando);

const frase = 'oi tudo bem?';
const result = frase.split(' ');

result.forEach((palavra) => console.log(palavra));
*/

// Input - Como receber dados do usuário:

let nome = prompt('qual seu nome?');
let idade = prompt('qual sua idade?');

console.log(`Seu nome é ${nome} 
e sua idade é ${idade} e você nasceu
em ${2022-idade-1}`);

alert(`Seu nome é ${nome} 
e sua idade é ${idade} e você nasceu
em ${2022-idade-1}`);

