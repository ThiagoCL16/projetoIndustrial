//Math.random() - gera um numero aleatorio
//array
let img = new Array(36)
img[0] = '<img src="img/gato.png">';
img[1] = '<img src="img/cachorro.png">';

let jogoMemoria = document.getElementById('jogoMemoria');

for(i=0; i<36; i++) {
    jogoMemoria.innerHTML += `<div class="container"><div class="carta"><div class="lado" id="frente${i}" tabindex="1"><p>carta ${i+1}</p></div><div class="lado" id="verso${i}"><img src="img/gato.png" title="gato" alt="gato"></div></div></div>`
}







let cartas = document.getElementsByClassName('carta');


for(let carta of cartas) {
    carta.onclick = function() {
        carta.style.transform = 'rotateY(180deg)'
    }
}




for(i=0; i<18; i++){
    let nImg = Math.floor(Math.random() * 18);
    while(img[nImg] === ""){
        nImg = Math.floor(Math.random() * 18);
    }
    for(j=0; j<2; j++){
        let verso = document.getElementById(`verso${i+j}`);
        
    }
    img[nImg] = ""
}