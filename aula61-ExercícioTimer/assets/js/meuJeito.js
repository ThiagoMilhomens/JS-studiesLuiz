const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar')
const zerar = document.querySelector('.zerar')

let seg = 0
let mit = 0
let hora = 0

let contador;

function formatoContador() {
    return (hora < 10 ? '0'+ hora : hora) + ':' + (mit < 10 ? '0'+ mit : mit) + ':' + (seg < 10 ? '0'+ seg : seg);
}

function correr () {
    relogio.textContent = formatoContador()
    seg++;
    if (seg == 60) {
        seg = 0
        mit++
    }
    if (mit == 60) {
        mit = 0
        hora++
    }
}

function pararRelogio() {
    clearInterval(contador);
    contador = false
}


function clickIniciar() { 
    if (!contador) {
   contador = setInterval(correr, 1000);
    }
}

function clickPausar() { 
    pararRelogio()

}

function clickParar() {
    pararRelogio ()
    seg = 0
    mit = 0
    hora = 0
    relogio.textContent = formatoContador()

}


iniciar.addEventListener('click', function (e) {
    clickIniciar()
})

pausar.addEventListener('click', function (e) {
    clickPausar()
})

zerar.addEventListener('click', function (e) {
    clickParar()
})