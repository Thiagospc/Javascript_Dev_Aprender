// (Mini-Projeto 11) - Montador de Endereço:
/*
const endereco = {
    rua: 'padre eutíquio',
    cidade: 'Belém',
    cep: '66033-728'
}

function exbirEnder (endereco){
    for (let chave in endereco){
        console.log(chave, ':', endereco[chave]);
    }
}

exbirEnder(endereco);
*/

// (Mini-Projeto 12) - Encontre a igualdade:
/*
function local (rua, cidade, cep){
    this.rua = rua,
    this.cidade = cidade,
    this.cep = cep
}

const local1 = new local('padre eutiquio', 'belem', 66033728);
const local2 = new local('padre', 'nazare', 66033728);

function verificaIgualdade (local1, local2){
    if (local1['rua'] === local2['rua']){
        console.log('Rua é igual!');
    }
    else if (local1['cidade'] === local2['cidade']){
        console.log('cidade é igual!');
    }
    else if (local1['cep'] === local2['cep']){
        console.log('cep é igual!');
    }
    else{
        console.log('Tudo é diferente');
        console.log(local1);
        console.log(local2);
    }
}

verificaIgualdade(local1, local2);
*/

// (Mini-Projeto 13) - Montador de Postagem de blog:

let Postagem = {
    titulo: 'a',
    mensagem: 'b',
    autor : 'c',
    vizualizacoes: '10',
    cometarios : [
        {autor: 'a', mensagem: 'b'},
        {autor: 'a', mensagem: 'b'}
    ],
    estaAoVivo : true
}

console.log(Postagem);