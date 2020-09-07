const relogio = document.querySelector('.relogio');

let segundos = 0
let timer;     // sem atribuição para permitir mudança dentro de escopo de função.

function criaHoraDosSegundos(segundos) {
    const data = new Date(segundos * 1000)
    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'GMT' // ou 'UTC'
    })
}

function iniciaRelogio() {
    timer = setInterval(function () {
        segundos++;
        relogio.innerHTML = criaHoraDosSegundos(segundos);
    }, 1000);
}

document.addEventListener('click', function (e) {
    const elemento = e.target

    if (elemento.classList.contains('iniciar')) {
        clearInterval(timer);
        iniciaRelogio();
        relogio.classList.remove('pausado');
    }

    if (elemento.classList.contains('pausar')) {
        clearInterval(timer);
        relogio.classList.add('pausado')
    }

    if (elemento.classList.contains('zerar')) {
        clearInterval(timer);
        relogio.innerHTML = '00:00:00';
        segundos = 0;
        relogio.classList.remove('pausado');
    }

})

