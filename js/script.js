//Math.random() - gera um numero aleatorio
//array
let img = new Array(36)
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
let container = new Array(36)
let Carta = new Array(36)
let frente = new Array(36)
let Verso = new Array(36)
for(i=0; i<36; i++) { //laco da base das cartas
    
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
    frente[i].innerHTML = `<p>Carta ${i+1}</p>`
    elementoCarta.appendChild(frente[i])

    elementoVerso = document.createElement('div')
    elementoVerso.className = 'lado'
    elementoVerso.id = `verso${i}`
    elementoCarta.appendChild(elementoVerso)
    Verso[i] = new verso(elementoVerso, i, img[i])
    Carta[i] = new carta(elementoCarta, i)
}

function giraCarta(indice){
    Carta[indice].elemento.style.transform = 'rotateY(180deg)'
    //setTimeout(voltaCarta = () => carta.style.transform = 'rotateY(0)', 10 * 1000) // voltaCarta: arrow function corpo conciso
}
let cartas = document.getElementsByClassName('carta');

/*let verso = new Array(36)
for(let i=0; i<4; i++) {
    verso[i] = document.getElementById('verso' + i.toString);
}*/

function giraCartas(){
    for(let carta of cartas){
        carta.style.transform = 'rotateY(180deg)'
        setTimeout(voltaCartas = () => carta.style.transform = 'rotateY(0)', 5000) 
    }
}
    

for(let i=0; i<18; i++){
    nImg = Math.floor(Math.random() * 18);
    while(img[nImg] == ""){
        nImg = Math.floor(Math.random() * 18);
    }
    for(let j=0; j<2; j++){
        nVerso = Math.floor(Math.random() * 36)
        while(Verso[nVerso].elemento.innerHTML !== ""){
            nVerso = Math.floor(Math.random() * 36)
        }
        Verso[nVerso].elemento.innerHTML = img[nImg]
    }
    img[nImg] = ""
}