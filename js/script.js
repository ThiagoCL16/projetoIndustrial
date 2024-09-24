//Math.random() - gera um numero aleatorio
//array
let img = new Array(16)
img[0] = '<img src="img/animais_jogo/abelha.com.png" data-description="abelha">';
img[1] = '<img src="img/animais_jogo/arara.com.png" data-description="arara">';
img[2] = '<img src="img/animais_jogo/barata.com.png" data-description="barata">';
img[3] = '<img src="img/animais_jogo/canguru.com.png" data-description="canguru">';
img[4] = '<img src="img/animais_jogo/caracol.com.png" data-description="caracol">';
img[5] = '<img src="img/animais_jogo/coala.com.png" data-description="coala">';
img[6] = '<img src="img/animais_jogo/coruja.com.png" data-description="coruja">';
img[7] = '<img src="img/animais_jogo/dinossauro.com.png" data-description="dinossauro">';
img[8] = '<img src="img/animais_jogo/foca.com.png" data-description="foca">';
img[9] = '<img src="img/animais_jogo/formiga.com.png" data-description="formiga">';
img[10] = '<img src="img/animais_jogo/lobo.com.png" data-description="lobo">';
img[11] = '<img src="img/animais_jogo/peixe.com.png" data-description="peixe">';
img[12] = '<img src="img/animais_jogo/pinguim.com.png" data-description="pinguim">';
img[13] = '<img src="img/animais_jogo/polvo.com.png" data-description="polvo">';
img[14] = '<img src="img/animais_jogo/tubarao.com.png" data-description="tubarao">';
img[15] = '<img src="img/animais_jogo/veado.com.png" data-description="veado">';

let jogoMemoria = document.getElementById('jogoMemoria');

// Criando as cartas
let container = new Array(18)
let carta = new Array(18)
let frente = new Array(18)
let verso = new Array(18)
let p = new Array(18)
let texto = new Array(18)
for(i=0; i<18; i++) { //laco da base das cartas
    
    container[i] = document.createElement('div')  // "criar elemento"...
    container[i].className = 'container' // "Nome classe" - acessa o atributo class do elemento e modifica-o
    
    jogoMemoria.appendChild(container[i]) // "Acrescentar filho" - este método adiciona o elemento entre parênteses dentro do elemento pai 

    carta[i] = document.createElement('div')
    carta[i].className = 'carta' //nomeda classe no elemento
    carta[i].setAttribute('tabindex', i+1) //cria atributo 
    carta[i].setAttribute('onkeypress', 'giraCarta()')// com o atributo criado, a outra virgula e um valor dele
    container[i].appendChild(carta[i])

    frente[i] = document.createElement('div')
    frente[i].className = 'lado'
    frente[i].id = `frente${i}`
    p[i] = document.createElement('p')
    texto[i] = `Carta ${i+1}`
    frente[i].appendChild(p[i])
    frente[i].setAttribute('data-description', texto)
    p[i].innerHTML = texto[i]
    
    carta[i].appendChild(frente[i])

    verso[i] = document.createElement('div')
    verso[i].className = 'lado'
    verso[i].id = `verso${i}`
    carta[i].appendChild(verso[i])
    texto[i] = ""
    }

let cartas = document.getElementsByClassName('carta');

/*let verso = new Array(36)
for(let i=0; i<4; i++) {git 
    verso[i] = document.getElementById('verso' + i.toString);
}*/

let qtdCartaVirada = 0
let cartaVirada = ''
let imgCartaVirada = ''
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
    function giraCarta(){
        let audio = new Audio('audio/cartagiro2.mp3')
        audio.play()
        carta.style.transform = 'rotateY(180deg)'
        setTimeout(voltaCarta = () => carta.style.transform = 'rotateY(0)', 17 * 1000) // voltaCarta: arrow function corpo conciso
    }
    carta.onkeypress = function(event) {
        let key = event.key
        if(key == 'Enter'){ // Código da tecla enter
            giraCarta()
        }
    }
    
    carta.onclick = giraCarta
}
    

for(let i=0; i<9; i++){
    nImg = Math.floor(Math.random() * 16);
    while(img[nImg] == ""){
        nImg = Math.floor(Math.random() * 16);
    }
    for(let j=0; j<2; j++){
        nVerso = Math.floor(Math.random() * 18)
        while(verso[nVerso].innerHTML !== ""){
            nVerso = Math.floor(Math.random() * 18)
        }
        verso[nVerso].innerHTML = img[nImg]
    }
    img[nImg] = ""
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
    Swal.fire('O objetivo do jogo é trabalhar a memória e o raciocinio de modo lúdico com adaptações para pessoas com algum grau de deficiência o visual, visando a prenção contra o capacitismo. Para iniciar o jogo deve-se clicar em duas cartas distintas para achar o par correspondente das imagens, assim sucessivamente até todos os pares de cartas serem encontrados para finalizar o jogo. Há a opção de reiniciar o jogo ao final e durante a partida. Terá um cronômetro com o tempo rolando na tela')
    //let mensagem = document.querySelector(".msgregras");
   // mensagem.classList.toggle("mostrar")
})
