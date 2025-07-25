let sorteio, contador;

function sortear(){
    sorteio = Math.floor(Math.random() * 100) + 1;
    return sorteio;
}

alert('Seja bem-vindo ao Jodo da Adivinhação!');
alert('Você tem 5 chances para adivinhar o número correto.');

do{         
    let numero = sortear();
    let acertou = false;
    let resposta;
    contador = 0;

    while(contador < 5){
        if(contador == 0){
            resposta = prompt('Digite um número de 1 a 100! (Obs.: Caso deseje sair, digite parar)');
        }else{
            resposta = prompt('Essa foi a '+contador+'º de 5. Digite o próximo palpite: ');
        }
        

        if(resposta == 'parar'){
          alert('Obrigada por participar, volte sempre!');
          break;
        }

        let tentativa = parseInt(resposta);
        
        if(isNaN(tentativa) || tentativa < 1 || tentativa > 100){
            alert('Digite um número válido!');
            continue;
        }
            
        contador ++;

        if(tentativa == numero){
            alert('Seu palpite ('+ resposta +') está certo, parabéns!');
            acertou = true;
            break;
        }else if(tentativa < numero){
            alert('Seu palpite ('+ resposta +') está errado, o número certo é maior!');
        }else if(tentativa > numero){
            alert('Seu palpite ('+ resposta +') está errado, o número certo é menor!');
        } 
        

    }

    if(acertou == false && resposta != 'parar') {
        alert('Suas tentativas acabaram! O número era '+numero+'. Até uma próxima!');
    } 

} while (resposta != 'parar');
