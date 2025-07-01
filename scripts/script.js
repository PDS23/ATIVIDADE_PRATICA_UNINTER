const botao = document.querySelector('.botao');
const espaco_mensagem = document.querySelector('#mensagem_motivacional');

const mensagem = "A pior maneira de fracassar, é nunca tentar.";

botao.addEventListener("click", function(){
    espaco_mensagem.innerHTML = mensagem;
        setTimeout(function(){
            espaco_mensagem.innerHTML = "";
        },5000);
});

