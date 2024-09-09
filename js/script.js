//Math.random() - gera um numero aleatorio

let img = new Array(36)
img[0] = '<img src="img/gato.png">'


let carta = document.getElementById('carta')

carta.onclick = function() {
    carta.style.transform = 'rotateY(180deg)'
}