//Math.random() - gera um numero aleatorio
//arraylet img = new Array()
const tema = document.getElementById('tema');
const botao = document.getElementById('btmudartema');
let img = new Array(16)
let temas = {
    animal: [
        img[0] = '<img src="img/animais_jogo/abelha.com.png" data-description="abelha">',
        img[1] ='<img src="img/animais_jogo/arara.com.png" data-description="arara">',
        img[2] = '<img src="img/animais_jogo/barata.com.png" data-description="barata">',
        img[3] = '<img src="img/animais_jogo/canguru.com.png" data-description="canguru">',
        img[4] = '<img src="img/animais_jogo/caracol.com.png" data-description="caracol">',
        img[5] = '<img src="img/animais_jogo/coala.com.png" data-description="coala">',
        img[6] = '<img src="img/animais_jogo/coruja.com.png" data-description="coruja">',
        img[7] = '<img src="img/animais_jogo/dinossauro.com.png" data-description="dinossauro">',
        img[8] = '<img src="img/animais_jogo/foca.com.png" data-description="foca">',
        img[9] = '<img src="img/animais_jogo/formiga.com.png" data-description="formiga">',
        img[10] = '<img src="img/animais_jogo/lobo.com.png" data-description="lobo">',
        img[11] = '<img src="img/animais_jogo/peixe.com.png" data-description="peixe">',
        img[12] = '<img src="img/animais_jogo/pinguim.com.png" data-description="pinguim">',
        img[13] = '<img src="img/animais_jogo/polvo.com.png" data-description="polvo">',
        img[14] = '<img src="img/animais_jogo/tubarao.com.png" data-description="tubarao">',
        img[15] = '<img src="img/animais_jogo/veado.com.png" data-description="veado">',
    ],
    fruta: [
        img[0] = '<img src="img/frutas_jogo/banana.jpg" data-description="banana">',
        img[1] = '<img src="img/frutas_jogo/abacate.jpg" data-description="abacate">',
        img[2] = '<img src="img/frutas_jogo/laranja.jpg" data-description="laranja">',
        img[3] = '<img src="img/frutas_jogo/limao.jpg" data-description="limao">',
        img[4] = '<img src="img/frutas_jogo/melancia.jpg" data-description="melancia">',
        img[5] = '<img src="img/frutas_jogo/mirtilo.jpg" data-description="mirtilo">',
        img[6] = '<img src="img/frutas_jogo/morango.jpg" data-description="morango">',
        img[7] = '<img src="img/frutas_jogo/pessego.jpg" data-description="pessego">',
        img[8] = '<img src="img/frutas_jogo/uva.jpg" data-description="uva">',
    ]
};

// Defina o array img


// Preencha o array img com as imagens do tema selecionado


// Inicializa as imagens quando a página carrega





let jogoMemoria = document.getElementById('jogoMemoria');

let Pontuacao = new Object()
Pontuacao.pontos = 0
Pontuacao.elemento = document.getElementById('pontuacao')
Pontuacao.acerto = 10
Pontuacao.dica = 5


Pontuacao.elemento.innerHTML = `Pontuação: ${Pontuacao.pontos}`
class carta{
    constructor(elemento, indice, Verso){
        this.elemento = elemento
        this.indice = indice
        this.virada = false
        this.elemento.onkeypress = function(evento){
            let key = evento.key
            if(key == 'Enter') {
                giraCarta(indice)
            }
        }
        this.elemento.onclick = function(){
           giraCarta(indice) 
        } 
        this.Verso = Verso
    }
}

class verso{
    constructor(elemento, indice, img){
        this.indice = indice
        this.img = img
        this.elemento = elemento
    }
}
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
    p[i] = document.createElement('p')
    texto[i] = `Carta ${i+1}`
    frente[i].appendChild(p[i])
    frente[i].setAttribute('data-description', texto)
    p[i].innerHTML = texto[i]
    
    elementoCarta.appendChild(frente[i])

    elementoVerso = document.createElement('div')
    elementoVerso.className = 'lado'
    elementoVerso.id = `verso${i}`
    elementoCarta.appendChild(elementoVerso)
    Verso[i] = new verso(elementoVerso, i, img[i])
    Carta[i] = new carta(elementoCarta, i)
    texto[i] = ""
}

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

function atualizarImagens() {
    const temaSelecionado = tema.value;
    img.length = 0; // Limpa o array img
   

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
        p[i] = document.createElement('p')
        texto[i] = `Carta ${i+1}`
        frente[i].appendChild(p[i])
        frente[i].setAttribute('data-description', texto)
        p[i].innerHTML = texto[i]
        
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
// Atualiza as imagens ao mudar de tema
tema.addEventListener('change', f = () =>{
    atualizarImagens()
    const elementosComDescricao = document.querySelectorAll('[data-description]');

    elementosComDescricao.forEach(elemento => {
        elemento.onmouseover =  function(){
            lerDescricao(elemento);
        }
    });
});

let cartaVirada
let qtdCartaVirada = 0
function giraCarta(indice){
    if(Carta[indice].virada == false){
        let audio = new Audio('audio/cartagiro2.mp3')
        audio.play()
        Carta[indice].elemento.style.transform = 'rotateY(180deg)'
        Carta[indice].virada = true
        //setTimeout(voltaCarta = () => carta.style.transform = 'rotateY(0)', 10 * 1000) // voltaCarta: arrow function corpo conciso
        setTimeout(verificaCartas = () => {
            if(qtdCartaVirada == 0){
                cartaVirada = Carta[indice]
                imgCartaVirada = Verso[indice].img
                qtdCartaVirada++
            } else if(qtdCartaVirada == 1 && cartaVirada.indice != Verso[indice].indice) {
                if(imgCartaVirada == Verso[indice].img && Carta[indice].indice != cartaVirada.indice){
                    Pontuacao.pontos += Pontuacao.acerto
                    Pontuacao.elemento.innerHTML = `Pontuação: ${Pontuacao.pontos}`
                    cartaVirada.elemento.innerHTML = ""
                    Carta[indice].elemento.innerHTML = ""
                } else if(imgCartaVirada != Verso[indice].img){
                    cartaVirada.elemento.style.transform = 'translateY(0)'
                    cartaVirada.virada = false
                    Carta[indice].elemento.style.transform = 'translateY(0)' 
                    Carta[indice].virada = false
                }
                qtdCartaVirada = 0
            }
        }, 1.5 * 1000)
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
    
function lerDescricao(elemento) {
    speechSynthesis.cancel() //Remove todos os enunciados da fila de enunciados
    const descricao = elemento.dataset.description;//
    const enunciado = new SpeechSynthesisUtterance(descricao);
    speechSynthesis.speak(enunciado);
}

const elementosComDescricao = document.querySelectorAll('[data-description]');

elementosComDescricao.forEach(elemento => {
    elemento.onmouseover =  function(){
      lerDescricao(elemento);
    }
});
document.getElementById("btregras").addEventListener("click",function(){
    Swal.fire({
        title:'Regras do Jogo',
        html:
        //A div serve para justificar o texto corretamente 
        '<div class="texto"> O objetivo do jogo é trabalhar a memória e o raciocinio de modo lúdico com adaptações para pessoas com algum grau de deficiência o visual, visando a prenção contra o capacitismo. <br>'
        +'Para iniciar o jogo deve-se clicar em duas cartas distintas para achar o par correspondente das imagens, assim sucessivamente até todos os pares de cartas serem encontrados para finalizar o jogo. <br>'
        + 'Há a opção de reiniciar o jogo ao final e durante a partida. <br> Terá um cronômetro com o tempo rolando na tela </div>',
        confirmButtonText: 'sair',
        background: '#000',
        color: '#fff',
        customClass: {
            title: 'titulo',
            content: 'texto',
            confirmButtonText: 'btsairregras',
        }
    })
    //let mensagem = document.querySelector(".msgregras");
   // mensagem.classList.toggle("mostrar")
})

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
    Pontuacao.pontos -= Pontuacao.dica
    Pontuacao.elemento.innerHTML = `Pontuação: ${Pontuacao.pontos}`
    setTimeout(function(){
        Carta[sorteio].elemento.style.transform = 'rotateY(0)'
        Carta[sorteio].virada = false
    }, 1000)
}