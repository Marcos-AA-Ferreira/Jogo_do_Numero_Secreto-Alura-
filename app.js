//Variáveis
/* IMPORTANTE: A ORDEM DAS VARIÁVEIS SÃO IMPORTANTE */

let listaDeNumeros = []; /* Podemos remover o ultimo item da lista com o '.pop' */
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatario();
let tentantivas = 1;

//Funções 

function textoDoHTML(tag, texto) /* 'textoDoHTML()' é o nome da função; o 'tag' é um parametro que ao chamar essa fução será subtituido pelo valor adicionado*/ {
    let titulo = document.querySelector(tag); // O 'document' diz que estamos buscado dentro do html; Já 'querySelector()' selecionar um elemento do html
    titulo.innerHTML = texto;//O 'innerHTML' permite alterara dentro do HTML
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate: 1.2});
};

function gerarNumeroAleatario() {
    //return parseInt((Math.random() * 10) + 1); 'return' serve para atribuir o valor para a variável
    let numeroSelecionado = parseInt((Math.random() * numeroLimite) + 1);
    let quantDeElementoDaLista = listaDeNumeros.length; //Verificar a quantidade de elementos numa lista determinada
    if (quantDeElementoDaLista == (parseInt(numeroLimite/2))){
        listaDeNumeros = []
    } else {
        
    }

    if (listaDeNumeros.includes(numeroSelecionado)/* '.includes' verifica se o elemento está numa lista determinada */){
        return gerarNumeroAleatario();
    } else {
        listaDeNumeros.push(numeroSelecionado); //'.push' adiciona um item a uma lista determinada
        return numeroSelecionado;
    };
    
};

function exibirMensagemInicial(){
    textoDoHTML('h1', 'Jogo do Número Secreto');
    textoDoHTML('p', 'Escolha um número entre 1 e 10');
};

function verificarChute()/* Cria uma função */ {
    let chute = document.querySelector('input').value; // '.value' pega o valor do input

    if (chute == numeroSecreto){

            textoDoHTML('h1', 'Parabéns, você acertou');

            let palavraTentativa = tentantivas > 1 ? 'tentantivas' : 'tentativa';
            let mensagemTentativas = `O número era ${numeroSecreto}, 
            Você conseguiu em ${tentantivas} ${palavraTentativa}!`;

            textoDoHTML('p', mensagemTentativas);

            document.getElementById('reiniciar').removeAttribute('disabled')

    } else { 
        if (chute > numeroSecreto){

            textoDoHTML('h1' ,'Tente novamente');
            textoDoHTML('p', `O número é menor que ${chute}`);

        } else{
            textoDoHTML('h1' ,'Tente novamente');
            textoDoHTML('p', `O número é maior que ${chute}`);
        }
    limparCampo();
    tentantivas ++;
    }
};

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatario();
    limparCampo();
    tentantivas =1;

    textoDoHTML('h1', 'Jogo do Número Secreto');
    textoDoHTML('p', 'Escolha um número entre 1 e 10');

    document.getElementById('reiniciar').setAttribute('disabled', true)
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = ' ';
};

//final das funções

exibirMensagemInicial();