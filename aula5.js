// Factory Functions:
/*
function criaCell(marca, tamanho, bateria){
    return{
        marca,
        tamanho,
        bateria
    }
}

const celular1 = criaCell("android", 5.5, 50);
for (let i = 0; i < 11; i++){
    console.log(celular1);
}
*/

// Constructor Functions:
/*
function Celular(marca, tamanho, bateria){
    this.marca = marca,
    this.tamanho = tamanho,
    this.bateria = bateria
}

const celular = new Celular('android', 5.5, 5000);
console.log(celular);
*/

// Natureza Dinâmica de Objetos:
/*
const mouse = {
    cor: 'vermelho',
    marca: 'dazz'
}

mouse.velocidade = 5000;
mouse.trocarDPI = function (){
    console.log("Mudando dpi");
}

console.log(mouse);
*/

// clonando objetos:
/*
const celular = {
    marca: 'android',
    numero: 980659587,
    localidade: {
        pais: 'brasil',
        estado: 'para',
        cidade: 'belem'

    }
}

const novoObj = Object.assign({
    bateria: '50%'
}, celular);

console.log(novoObj);
*/

// Math:
/*
Math.max()
Math.min()
Math.random()
*/

//  String:
// apenas tratamentos de strings.

// Template Literal:
/*
const texto = `esse é 
um texto de esstilo template, 
é como as 3 aspas que o python
usa.`;

console.log(texto);

const nome = 'thiago';
const text = 'meu nome é ${nome}'
const text2 = `meu nome é ${nome}`
console.log(text);
console.log(text2);
*/

// date:
/*
const data = new Date();
console.log(data);

const hora = data.getDate();
console.log(hora);
*/






















