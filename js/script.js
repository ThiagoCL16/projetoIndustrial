//Math.random() - gera um numero aleatorio
//array
let img = new Array(36)
img[0] = '<img src="img/gato.png">';
img[1] = '<img src="img/cachorro.png">';

let jogoMemoria = document.getElementById('jogoMemoria');

let container = new Array(36)
let carta = new Array(36)
let frente = new Array(36)
let verso = new Array(36)
for(i=0; i<36; i++) {
    
    /*jogoMemoria.innerHTML += `<div class="container"><div class="carta"><div class="lado" id="frente${i}" tabindex="${i}"><p>carta ${i}</p></div><div class="lado" id="verso${i}"><img src="img/gato.png" title="gato" alt="gato"></div></div></div>`*/
    
    container[i] = document.createElement('div')  // "criar elemento"...
    container[i].className = 'container' // "Nome classe" - acessa o atributo class do elemento e modifica-o
    
    jogoMemoria.appendChild(container[i]) // "Acrescentar filho" - este método adiciona o elemento entre parênteses dentro do elemento pai 

    carta[i] = document.createElement('div')
    carta[i].className = 'carta'
    carta[i].setAttribute('tabindex', i+1)
    container[i].appendChild(carta[i])

    frente[i] = document.createElement('div')
    frente[i].className = 'lado'
    frente[i].id = `frente${i}`
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
    function giraCarta() {
        carta.style.transform = 'rotateY(180deg)'
    }
    carta.onclick = giraCarta
    //carta.addEventListener('keydown', giraCarta, true)
}
    

for(let i=0; i<18; i++){
    nImg = Math.floor(Math.random() * 18);
    while(img[nImg] === ""){
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