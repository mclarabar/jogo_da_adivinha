let sorteio, contador, resposta2;

function sortear(){
    sorteio = Math.floor(Math.random() * 100) + 1;
    return sorteio;
}

alert('Seja bem-vindo ao Jodo da Adivinhação!');
alert('Você tem 5 chances para adivinhar o número correto.')
do{
    const resposta = prompt('Digite um número de 1 a 100! (Obs.: Caso deseje sair, digite parar)');

    if(resposta == 'parar'){
        alert('Obrigada por participar, volte sempre!');
        break;
    }
        
        
    let numero = sortear();
    contador = 0;

    while(contador < 5){
        let tentativa = parseInt(resposta);
        
        if(isNaN(tentativa) || tentativa < 1 || tentativa > 100){
            alert('Digite um número válido!');
            break;
        }
            
        contador ++;

        if(tentativa == numero){
            alert('Seu palpite ('+ resposta +') está certo, parabéns!');
            break;
        }else if(resposta < numero){
            alert('Seu palpite ('+ resposta +') está errado, o número certo é maior!');
        }else{
            alert('Seu palpite ('+ resposta +') está errado, o número certo é menor!');
        } 

        if(contador < 5){
            resposta2 = prompt('Essa foi a '+contador+'º de 5. Digite o próximo palpite: ').toLowerCase();
            if (resposta2 == 'parar'){
                alert('Jogo encerrado, obrigada por participar!');
                break;
            }
            resposta = resposta2;
        }else{
            alert('Suas tentativas acabaram! O número era '+numero+'. Até uma próxima!');
        }

    }
    

} while (true);

