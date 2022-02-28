// mini projeto 2
/*
function max(num1, num2){
    let i = Math.max(num1, num2);
    let n = Math.min(num1, num2);

    console.log("O máximo é", i);
    console.log("O mínimo é", n);
}

max(2, 3);
*/

// mini projeto 3
/*
function fizzBuzz(entrada){
    if (typeof entrada !== 'number'){
        console.log("Não é um número")
    }
    else if (entrada % 3 === 0 && entrada % 5 === 0){
        console.log("FizzBuzz");
    }
    else if (entrada % 3 === 0 && entrada % 5 !== 0){
        console.log("Fizz")
    }
    else if (entrada % 3 !== 0 && entrada % 5 === 0){
        console.log("Buzz")
    }
    else {
        console.log(entrada);
    }
}

fizzBuzz(15);
*/

// mini-projeto 4:
/*
function verificaVelocidade (velocidade){
    if (velocidade <= 70){
        console.log("Velocidade permitida");
    }
    else{
        let pontos = Math.floor((velocidade - 70) / 5);
        if (pontos >= 12){
            console.log("Carteira suspensa!");
        }
        else{
            console.log(pontos, "Ponto(s)")
        }

    }

}


verificaVelocidade(84);
*/

// mini-projeto 5:
/*
function verificaParImpar (num){
    if (num % 2 === 0){
        console.log(num, "é par.");
    }
    else{
        console.log(num, "é ímpar.");
    }
}

verificaParImpar(81);
*/

// mini-projeto 6:
/*
const filme = {
    titulo: "vingadores",
    diretor: "Thiago",
    personagem: "homem de ferro",
    ingressos: 11
}

function exibir (obj){
    for (let i in obj){
        if (typeof(obj[i]) === 'string'){
            console.log(i, obj[i])
        }
    }
}

exibir(filme);
*/

// mini-projeto 7:
/*
var tres = [];
var cinco = [];
var somatoria = [];

function somar (valor){
    for (let i = 1; i < (valor + 1); i++){
        if (i % 3 === 0){
            tres.push(i);
        }
        if (i % 5 === 0){
            cinco.push(i)
        }
    }

    function somaLista(){
        for (let n in tres){
            somatoria.push(tres[n]);
        }
        for (let z in cinco){
            somatoria.push(cinco[z]);
        }

        let somado = 0;

        for (let x in somatoria){
            somado += somatoria[x];
        }

        console.log(somado);

    }

    somaLista();
}

somar(10);
*/

// mini-projeto 8:
// 0-59 - f, 60-69 - d, 70-79 - c, 80-89 - b, 90-100 - a 
/*
const notas = [70, 70, 80];

function media(lista){
    let somaaa = 0;
    for (let i in notas){
        somaaa += notas[i];
    }
    let media = somaaa / notas.length;

    if (media <= 59){
        console.log("F");
    }
    else if (media >= 60 && media <= 69){
        console.log("D");
    }
    else if (media >= 70 && media <= 79){
        console.log("C");
    }
    else if (media >= 80 && media <= 89){
        console.log("B");
    }
    else if (media >= 90 && media <= 100){
        console.log("A");
    }
    else {
        console.log(media, ", Média inválida!")
    }
}

media(notas);
*/

// mini-projeto 9:
/*
function mostrar (num){
    let simb = '';
    for (let i = 1; i < num + 1; i++){
        simb += '*';
        console.log(simb);
    }
    
}

mostrar(10);
*/

// mini-projeto 10:

function exibePrimo (number){
    let numeros = [];

    number = number + 1;

    for (let i = 1; i < number; i++){
        let soma = 0;
        for (let n = 1; n < number; n++){
            if (i % n === 0){
                soma += 1;
            }
        }
        if (soma === 2){
            numeros.push(i);
        }

        soma = 0;
    }

    for (let z in numeros){
        console.log(numeros[z]);
    }

}

exibePrimo(25);