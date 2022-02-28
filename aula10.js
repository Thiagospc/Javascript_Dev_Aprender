function verificarEntrada(){
    NomeDoConvidado = document.getElementById('nome1').value;
    convidados = ['thiago', 'joão'];

    if (convidados.includes(NomeDoConvidado)){
        document.getElementById('permissaodeentrada').innerText = 'Entrada concedida!'
        alert('Entrada concedida!');
    }
    else{
        document.getElementById('Entrada negada!').innerText = 'Entrada concedida!'
        alert('Entrada negada!');

    }
}