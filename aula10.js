function verificarEntrada(){
    NomeDoConvidado = document.getElementById('nome1').value;
    convidados = ['thiago', 'joão'];

    if (convidados.includes(NomeDoConvidado)){
        document.getElementById('permissaodeentrada').innerText = 'Entrada concedida!'
        alert('Entrada concedida!');
    }
    else{
        document.getElementById('permissaodeentrada').innerText = 'Entrada negada!'
        alert('Entrada negada!');

    }
}
