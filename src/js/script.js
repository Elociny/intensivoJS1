const numeroCapitulos = 30
const audioCapitulo = document.getElementById("audio-capitulo")

let nomeCapitulo = document.getElementById("capitulo")

let botaoVoltar = document.getElementById("anterior")
let botaoPlayPause = document.getElementById("play-pause")
let botaoAvancar = document.getElementById("proximo")

let taTocando = 0
let capituloAtual = 1

function tocarFaixa() {
    audioCapitulo.play()
    botaoPlayPause.classList.remove("bi-play-circle")
    botaoPlayPause.classList.add("bi-pause-circle-fill")
}

function pausarFaixa() {
    audioCapitulo.pause()
    botaoPlayPause.classList.remove("bi-pause-circle-fill")
    botaoPlayPause.classList.add("bi-play-circle")
}

function tocarOuPausar() {
    if (taTocando === 0) {
        tocarFaixa()
        taTocando = 1
    } else {
        pausarFaixa()
        taTocando = 0
    }
}

function trocarNomeFaixa() {
    nomeCapitulo.innerText = `Capítulo ${capituloAtual}`
}

function proximaFaixa() {
    if (capituloAtual === numeroCapitulos) {
        capituloAtual = 1   
    } else {
        capituloAtual++
    }

    audioCapitulo.src = "./books/dom-casmurro/" + capituloAtual + ".mp3"
    // audioCapitulo.src = "./books/dom-casmurro/${capituloAtual}.mp3"
    tocarFaixa()
    taTocando = 1
    trocarNomeFaixa()
}

function voltarFaixa() {
    if (capituloAtual === 1) {
        capituloAtual = numeroCapitulos   
    } else {
        capituloAtual--
    }

    // audioCapitulo.src = "./books/dom-casmurro/" + capituloAtual + ".mp3"
    audioCapitulo.src = `./books/dom-casmurro/${capituloAtual}.mp3`
    tocarFaixa()
    taTocando = 1
    trocarNomeFaixa()
}

botaoVoltar.addEventListener("click", voltarFaixa)
botaoPlayPause.addEventListener("click", tocarOuPausar)
botaoAvancar.addEventListener("click", proximaFaixa)