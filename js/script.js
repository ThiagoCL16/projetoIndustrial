//Math.random() - gera um numero aleatorio
//array
let img = new Array(36)
img[0] = '<img src="img/gato.png">';
img[1] = '<img src="img/cachorro.png">';

let jogoMemoria = document.getElementById('jogoMemoria');

// Criando as cartas
let container = new Array(36)
let carta = new Array(36)
let frente = new Array(36)
let verso = new Array(36)
for(i=0; i<36; i++) { //laco da base das cartas
    
    /*jogoMemoria.innerHTML += `<div class="container"><div class="carta"><div class="lado" id="frente${i}" tabindex="${i}"><p>carta ${i}</p></div><div class="lado" id="verso${i}"><img src="img/gato.png" title="gato" alt="gato"></div></div></div>`*/
    
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
    frente[i].innerHTML = `<p>Carta ${i+1}</p>`
    carta[i].appendChild(frente[i])

    verso[i] = document.createElement('div')
    verso[i].className = 'lado'
    verso[i].id = `verso${i}`
    carta[i].appendChild(verso[i])
}

let cartas = document.getElementsByClassName('carta');

/*let verso = new Array(36)
for(let i=0; i<4; i++) {
    verso[i] = document.getElementById('verso' + i.toString);
}*/


for(let carta of cartas) {
    function giraCarta(){
        carta.style.transform = 'rotateY(180deg)'
        setTimeout(voltaCarta = () => carta.style.transform = 'rotateY(0)', 10 * 1000) // voltaCarta: arrow function corpo conciso
    }
    carta.onkeypress = function(event) {
        let key = event.key
        if(key == 'Enter'){ // Código da tecla enter
            giraCarta()
        }
    }
    
    carta.onclick = giraCarta

    // Função apenas para testes
    function giraCartas(){
        for(let carta of cartas){
            carta.style.transform = 'rotateY(180deg)'
            setTimeout(voltaCartas = () => carta.style.transform = 'rotateY(0)', 5000) 
        }
    }
}
    

for(let i=0; i<18; i++){
    nImg = Math.floor(Math.random() * 18);
    while(img[nImg] == ""){
        nImg = Math.floor(Math.random() * 18);
    }
    for(let j=0; j<2; j++){
        nVerso = Math.floor(Math.random() * 36)
        while(verso[nVerso].innerHTML !== ""){
            nVerso = Math.floor(Math.random() * 36)
        }
        verso[nVerso].innerHTML = img[nImg]
    }
    img[nImg] = ""
}