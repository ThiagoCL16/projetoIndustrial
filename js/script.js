const tema = document.getElementById('tema');
const botao = document.getElementById('btmudartema');
let img = new Array(16)


//Índice (REMOVER NA VERSÃO FINAL)

let definindo_objetos_pontuacao_timer
let definindo_objetos_carta_verso
let criando_as_cartas
let funcao_coloca_imgs_cartas
let funcao_atualiza_imagens
let adicionando_event_listener_botao_tema
let funcao_gira_cartas
let funcao_ler_desc_elementos
let funcao_botao_regras
let funcao_botao_dica
let funcao_reiniciar_jogo
let funcao_fim_jogo

// Definição das imagens dos temas
let temas = {
    animal: [
        img[0] = '<img src="img/animais_jogo/abelha.com.png" class="user-select-none" data-description="abelha" title="abelha" alt="abelha" unselectable="on">',
        img[1] ='<img src="img/animais_jogo/arara.com.png" class="user-select-none" data-description="arara" title="arara" alt="arara" unselectable="on">',
        img[2] = '<img src="img/animais_jogo/barata.com.png" class="user-select-none" data-description="barata" title="barata" alt="barata" unselectable="on">',
        img[3] = '<img src="img/animais_jogo/canguru.com.png" class="user-select-none" data-description="canguru" title="canguru" alt="canguru" unselectable="on">',
        img[4] = '<img src="img/animais_jogo/caracol.com.png" class="user-select-none" data-description="caracol" title="caracol" alt="caracol" unselectable="on">',
        img[5] = '<img src="img/animais_jogo/coala.com.png" class="user-select-none" data-description="coala" title="coala" alt="coala" unselectable="on">',
        img[6] = '<img src="img/animais_jogo/coruja.com.png" class="user-select-none" data-description="coruja" title="coruja" alt="coruja" unselectable="on">',
        img[7] = '<img src="img/animais_jogo/dinossauro.com.png" class="user-select-none" data-description="dinossauro" title="dinossauro" alt="dinossauro" unselectable="on">',
        img[8] = '<img src="img/animais_jogo/foca.com.png" class="user-select-none" data-description="foca" title="foca" alt="foca" unselectable="on">',
        img[9] = '<img src="img/animais_jogo/formiga.com.png" class="user-select-none" data-description="formiga" title="formiga" alt="formiga" unselectable="on">',
        img[10] = '<img src="img/animais_jogo/lobo.com.png" class="user-select-none" data-description="lobo" title="lobo" alt="lobo" unselectable="on">',
        img[11] = '<img src="img/animais_jogo/peixe.com.png" class="user-select-none" data-description="peixe" title="peixe" alt="peixe" unselectable="on">',
        img[12] = '<img src="img/animais_jogo/pinguim.com.png" class="user-select-none" data-description="pinguim" title="pinguim" alt="pinguim" unselectable="on">',
        img[13] = '<img src="img/animais_jogo/polvo.com.png" class="user-select-none" data-description="polvo" title="polvo" alt="polvo" unselectable="on">',
        img[14] = '<img src="img/animais_jogo/tubarao.com.png" class="user-select-none" data-description="tubarao" title="tubarao" alt="tubarao" unselectable="on">',
        img[15] = '<img src="img/animais_jogo/veado.com.png" class="user-select-none" data-description="veado" title="veado" alt="veado" unselectable="on">',
    ],
    fruta: [
        img[0] = '<img src="img/frutas_jogo/banana.jpg" data-description="banana" title="banana" alt="banana" unselectable="on">',
        img[1] = '<img src="img/frutas_jogo/abacate.jpg" data-description="abacate" title="abacate" alt="abacate" unselectable="on">',
        img[2] = '<img src="img/frutas_jogo/laranja.jpg" data-description="laranja" title="laranja" alt="laranja" unselectable="on">',
        img[3] = '<img src="img/frutas_jogo/limao.jpg" data-description="limao" title="limao" alt="limao">',
        img[4] = '<img src="img/frutas_jogo/melancia.jpg" data-description="melancia" title="melancia" alt="melancia" unselectable="on">',
        img[5] = '<img src="img/frutas_jogo/mirtilo.jpg" data-description="mirtilo" title="mirtilo" alt="mirtilo" unselectable="on">',
        img[6] = '<img src="img/frutas_jogo/morango.jpg" data-description="morango" title="morango" alt="morango" unselectable="on">',
        img[7] = '<img src="img/frutas_jogo/pessego.jpg" data-description="pessego" title="pessego" alt="pessego" unselectable="on">',
        img[8] = '<img src="img/frutas_jogo/uva.jpg" data-description="uva" title="uva" alt="uva" unselectable="on">',
    ]
};

let jogoMemoria = document.getElementById('jogoMemoria');

definindo_objetos_pontuacao_timer
// Criando os objetos de pontuação e timer
let Pontuacao = new Object()
Pontuacao.pontos = 0
Pontuacao.elemento = document.getElementById('pontuacao')
Pontuacao.acerto = 10 
Pontuacao.dica = 5 

let Timer = new Object()
Timer.elemento = document.getElementById('timer')
Timer.minutos = 0
Timer.segundos = 0
Timer.ativo = false

Timer.atualizaTimer = function(){
    if(Timer.ativo){
        Timer.segundos++
        if(Timer.segundos % 60 == 0){
            Timer.segundos = 0
            Timer.minutos++
        }
        if(Timer.segundos < 10){
            Timer.segundos = '0' + parseInt(Timer.segundos)
        }
        if(Timer.minutos < 10){
            Timer.minutos = '0' + parseInt(Timer.minutos)
        }
        Timer.elemento.innerHTML = Timer.minutos + ':' + Timer.segundos
        Timer.elemento.setAttribute('data-description', `${parseInt(Timer.minutos)} minutos e ${parseInt(Timer.segundos)} segundos`)
        if(Timer.ativo){
            setTimeout(Timer.atualizaTimer, 1000)
        }
    }
}

// Inicializando o elemento da pontuação
Pontuacao.elemento.innerHTML = `PONTUAÇÃO: ${Pontuacao.pontos}`

definindo_objetos_carta_verso
// Definido os objetos carta e verso
class carta{
    constructor(elemento, indice, Verso){
        this.elemento = elemento
        this.indice = indice
        this.virada = false
        this.elemento.onkeydown = function(evento){
            let tecla = evento.key
            if(tecla == 'Enter') {
                giraCarta(indice)
            }
        }
        this.elemento.onclick = function(){
           giraCarta(indice) 
        } 
        this.Verso = Verso
    }
}
document.body.onkeyup = function(evento){
    let tecla = evento.key
    if(tecla == 'Tab'){
        let elemento = document.activeElement.className == 'container'? document.activeElement.firstChild:document.activeElement
        elemento = document.activeElement.className == 'carta'? document.activeElement.firstChild:elemento
        //alert(document.activeElement.firstChild)
        lerDescricaoElemento(elemento)
    }
}

class verso{
    constructor(elemento, indice, img){
        this.indice = indice
        this.img = img
        this.elemento = elemento
    }
}
criando_as_cartas
// Criando as cartas
let container = new Array(18)
let Carta = new Array(18)
let frente = new Array(18)
let Verso = new Array(18)
let p = new Array(18)
let texto = new Array(18)
for(i=0; i<18; i++) { //laco da base das cartas
    
    container[i] = document.createElement('div')  // "criar elemento"...
    container[i].className = 'container' // "Nome classe" - acessa o atributo class do elemento e modifica-o
    
    jogoMemoria.appendChild(container[i]) // "Acrescentar filho" - este método adiciona o elemento entre parênteses dentro do elemento pai 

    elementoCarta = document.createElement('div')
    elementoCarta.className = 'carta' //nome da classe no elemento
    elementoCarta.setAttribute('tabindex', i+1) //cria atributo 
    container[i].appendChild(elementoCarta)
    frente[i] = document.createElement('div')
    frente[i].className = 'lado'
    frente[i].id = `frente${i}`
    texto[i] = `Carta ${i+1}`
    frente[i].setAttribute('data-description', texto)
    
    elementoCarta.appendChild(frente[i])

    elementoVerso = document.createElement('div')
    elementoVerso.className = 'lado'
    elementoVerso.id = `verso${i}`
    elementoCarta.appendChild(elementoVerso)
    Verso[i] = new verso(elementoVerso, i, img[i])
    Carta[i] = new carta(elementoCarta, i)
    texto[i] = ""
}

funcao_coloca_imgs_cartas
// Função de colocar as imagens nas cartas
function colocaImgsCartas(){
    for(let i=0; i<9; i++){
        if(img.length>9){
            nImg = Math.floor(Math.random() * 16);
            while(img[nImg] == ""){
                nImg = Math.floor(Math.random() * 16);
            }
        } else {
            nImg = Math.floor(Math.random() * 9);
            while(img[nImg] == ""){
                nImg = Math.floor(Math.random() * 9);
            }
        }
        
        for(let j=0; j<2; j++){
            nVerso = Math.floor(Math.random() * 18)
            while(Verso[nVerso].elemento.innerHTML !== ""){
                nVerso = Math.floor(Math.random() * 18)
            }
            Verso[nVerso].elemento.innerHTML = img[nImg]
            Verso[nVerso].img = img[nImg]
        }
        img[nImg] = ""
    }
}

// Função atualiza imagens
funcao_atualiza_imagens
function atualizarImagens() {
    const temaSelecionado = tema.value;
    img.length = 0; // Limpa o array img
    Pontuacao.pontos = 0
    Pontuacao.elemento.innerHTML = 'PONTUAÇÃO: ' + Pontuacao.pontos
    Pontuacao.elemento.setAttribute('data-description', Pontuacao.elemento.innerHTML)
   

    img.push(...temas[temaSelecionado]); // Adiciona as imagens do tema selecionado
    for(i=0; i<18; i++){
        container[i].innerHTML = ""
        elementoCarta = document.createElement('div')
        elementoCarta.className = 'carta' //nome da classe no elemento
        elementoCarta.setAttribute('tabindex', i+1) //cria atributo 
        container[i].appendChild(elementoCarta)

        frente[i] = document.createElement('div')
        frente[i].className = 'lado'
        frente[i].id = `frente${i}`
        texto[i] = `Carta ${i+1}`
        frente[i].setAttribute('data-description', texto)
        
        elementoCarta.appendChild(frente[i])

        elementoVerso = document.createElement('div')
        elementoVerso.className = 'lado'
        elementoVerso.id = `verso${i}`
        elementoCarta.appendChild(elementoVerso)
        Verso[i] = ''
        Carta[i] = ''
        Verso[i] = new verso(elementoVerso, i, img[i])
        Carta[i] = new carta(elementoCarta, i)
        texto[i] = ""
        Carta[i].virada = false
    }
    
    colocaImgsCartas()
}
atualizarImagens()

adicionando_event_listener_botao_tema
// Atualiza as imagens ao mudar de tema
tema.addEventListener('change', f = () =>{
    Pontuacao.pontos = 0
    Pontuacao.elemento.innerHTML = 'PONTUAÇÃO: ' + Pontuacao.pontos
    Pontuacao.elemento.setAttribute('data-description', Pontuacao.elemento.innerHTML)

    Timer.ativo = false
    Timer.segundos = Timer.minutos = 0
    Timer.elemento.innerHTML = 'TEMPO'
    atualizarImagens()
    const elementosComDescricao = document.querySelectorAll('[data-description]');

    elementosComDescricao.forEach(elemento => {
        elemento.onmouseover =  function(){
            lerDescricaoElemento(elemento);
        }
    });
});

// Função de girar as cartas
funcao_gira_cartas

let totalCartas = 18
let cartaVirada
let qtdCartaVirada = 0
let emVerificacao = false; // Controle de verificação

function giraCarta(indice) {
    // Bloqueia novas viradas se já em verificação de um par
    if (Carta[indice].virada === false && !emVerificacao) { 
        if (Timer.ativo === false) {
            Timer.ativo = true;
            Timer.atualizaTimer();
        }
        
        lerDescricaoElemento(Carta[indice].elemento.children[0]);
        setTimeout(() => {
            lerDescricaoElemento(Verso[indice].elemento.children[0]);
        }, 1500);

        let audio = new Audio('audio/cartagiro2.mp3');
        audio.play();
        Carta[indice].elemento.style.transform = 'rotateY(180deg)';
        Carta[indice].virada = true;

        if (qtdCartaVirada == 0) {
            // Primeira carta virada
            cartaVirada = Carta[indice];
            imgCartaVirada = Verso[indice].img;
            qtdCartaVirada++;
        } else if (qtdCartaVirada == 1 && cartaVirada.indice != Verso[indice].indice) {
            // Segunda carta virada, inicia verificação de par
            emVerificacao = true; // Ativa o bloqueio para verificação do par

            setTimeout(() => {
                if (imgCartaVirada == Verso[indice].img && Carta[indice].indice != cartaVirada.indice) {
                    // Par correto
                    let audioAcerto = new Audio('audio/acerto.mp3');
                    audioAcerto.play();
                    Pontuacao.pontos += Pontuacao.acerto;
                    Pontuacao.elemento.innerHTML = `PONTUAÇÃO: ${Pontuacao.pontos}`;
                    Pontuacao.elemento.setAttribute('data-description', Pontuacao.elemento.innerHTML)
                    cartaVirada.elemento.parentNode.innerHTML = "";
                    Carta[indice].elemento.parentNode.innerHTML = "";
                    totalCartas -= 2;
                    if (totalCartas == 0) {
                        fimJogo();
                    }
                } else {
                    // Par incorreto, vira as cartas de volta
                    let audioErro = new Audio('audio/erro.mp3');
                    audioErro.play();
                    cartaVirada.elemento.style.transform = 'translateY(0)';
                    cartaVirada.virada = false;
                    Carta[indice].elemento.style.transform = 'translateY(0)';
                    Carta[indice].virada = false;
                }
                qtdCartaVirada = 0;
                emVerificacao = false; // Libera para novas viradas após a verificação
            }, 1.5 * 1000);
        }
    }
}


let cartas = document.getElementsByClassName('carta');


for(let carta of cartas) {
    // Função apenas para testes
    function giraCartas(){
        for(let carta of cartas){
            carta.style.transform = 'rotateY(180deg)'
            setTimeout(voltaCartas, 5 * 1000)
        }
    }
    function voltaCartas(){
        for(let carta of cartas){
            carta.style.transform = 'rotateY(0)'  
        }
         
    }
}

// Função de ler descrição dos elementos
funcao_ler_desc_elementos
function lerDescricaoElemento(elemento) {
    speechSynthesis.cancel()
    const enunciado = new SpeechSynthesisUtterance(elemento.dataset.description);
    speechSynthesis.speak(enunciado);
}

const elementosComDescricao = document.querySelectorAll('[data-description]');

elementosComDescricao.forEach(elemento => {
    elemento.onmouseover =  function(){
      lerDescricaoElemento(elemento);
    }
});

// Função do botão de regras
funcao_botao_regras
document.getElementById("btregras").addEventListener("click", function() {
    const regrasDescricao = "O objetivo do jogo é trabalhar a memória e o raciocinio de modo lúdico com adaptações para pessoas com algum grau de deficiência visual. Para iniciar o jogo deve-se clicar em duas cartas distintas para achar o par correspondente das imagens, assim sucessivamente até todos os pares de cartas serem encontrados para finalizar o jogo. Há a opção de reiniciar o jogo ao final e durante a partida. Terá um cronômetro com o tempo rolando na tela";

    Swal.fire({
        title: 'Regras do Jogo',
        html:
        '<div id="textoRegras" data-description="' + regrasDescricao + '">O objetivo do jogo é trabalhar a memória e o raciocinio de modo lúdico com adaptações para pessoas com algum grau de deficiência visual. Para iniciar o jogo deve-se clicar em duas cartas distintas para achar o par correspondente das imagens, assim sucessivamente até todos os pares de cartas serem encontrados para finalizar o jogo. <br>Há a opção de reiniciar o jogo ao final e durante a partida. Terá um cronômetro com o tempo rolando na tela </div>',
        confirmButtonText: 'sair', 
        background: '#000',
        color: '#fff',
        customClass: {
            title: 'titulo',
            content: 'texto',
            confirmButtonText: 'btsairregras',
            popup: 'modal-custom'
        }
    });

    // Lê a descrição das regras
    lerDescricaoElemento({dataset: { description: regrasDescricao}});

    let btsairregras = document.getElementsByClassName('swal2-styled')

    btsairregras[0].setAttribute('data-description', 'sair')
    console.log(btsairregras[0].dataset.description)
    btsairregras[0].onmouseover = () => lerDescricaoElemento(btsairregras[0])
});

// Função botão de dica
funcao_botao_dica
dica = document.getElementById("dica")
dica.onclick = function(){
    let audio = new Audio('audio/cartagiro2.mp3')
    audio.play()
    let sorteio = Math.floor(Math.random()*18)
    while(Carta[sorteio].virada == true){
        sorteio = Math.floor(Math.random()*18)
    }
    Carta[sorteio].elemento.style.transform = 'rotateY(180deg)'
    Carta[sorteio].virada = true
    if (Verso[sorteio] && Verso[sorteio].elemento) {
        const verso = Verso[sorteio].elemento.firstChild.dataset.description; // Verifica se existe
        const numeroCarta = sorteio + 1; // Para exibir a carta começando de 1
        const descricaoCompleta = `Carta ${numeroCarta}: ${verso}`; // Descrição completa
    
        // Adiciona log para verificar a descrição
        console.log(descricaoCompleta);
    
        // Chama a função para falar a descrição
        lerDescricao({ dataset: { description: descricaoCompleta } });
    } else {
        console.error("Verso ou elemento não encontrado para a carta sorteada.");
    }
    
    function lerDescricao(descricao) {
        const utterance = new SpeechSynthesisUtterance(descricao.dataset.description);
        console.log("Fazendo a leitura: ", descricao.dataset.description); // Log de teste
        speechSynthesis.speak(utterance);
    }
    Pontuacao.pontos -= Pontuacao.dica
    Pontuacao.elemento.innerHTML = `PONTUAÇÃO: ${Pontuacao.pontos}`
    Pontuacao.elemento.setAttribute('data-description', Pontuacao.elemento.innerHTML)
    setTimeout(function(){
        Carta[sorteio].elemento.style.transform = 'rotateY(0)'
        Carta[sorteio].virada = false
    }, 2 * 1000)
}

// Função de reiniciar o jogo
funcao_reiniciar_jogo
let btReiniciaJogo = document.getElementById('btReiniciaJogo')
btReiniciaJogo.onclick = function ReiniciaJogo(){
    Pontuacao.pontos = 0
    Pontuacao.elemento.innerHTML = 'PONTUAÇÃO: ' + Pontuacao.pontos
    Pontuacao.elemento.setAttribute('data-description', Pontuacao.elemento.innerHTML)

    Timer.ativo = false
    Timer.segundos = Timer.minutos = 0
    Timer.elemento.innerHTML = 'TEMPO'
    Timer.elemento.setAttribute('data-description', 'Tempo')

    atualizarImagens()
    const elementosComDescricao = document.querySelectorAll('[data-description]');

    elementosComDescricao.forEach(elemento => {
        elemento.onmouseover =  function(){
            lerDescricaoElemento(elemento);
        }
    });
}



// Função de fim do jogo
funcao_fim_jogo
function fimJogo(){
    Timer.ativo = false
}