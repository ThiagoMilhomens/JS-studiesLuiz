const displayData = document.querySelector('.outputdata')
const displayHora = document.querySelector('.outputhora')

const data = new Date() // (ano, índice mês, dia, hora, minutos, segundos, milésimos)

let indiceDia = data.getDay()
let diaSemana = getDiaSemana()

function getDiaSemana() {
    let diaSemana

    switch (indiceDia) {
        case 0:
            diaSemana = 'Domingo'
            return diaSemana
        case 1:
            diaSemana = 'Segunda-feira'
            return diaSemana
        case 2:
            diaSemana = 'Terça-feira'
            return diaSemana
        case 3:
            diaSemana = 'Quarta-feira'
            return diaSemana
        case 4:
            diaSemana = 'Quinta-feira'
            return diaSemana
        case 5:
            diaSemana = 'Sexta-feira'
            return diaSemana
        case 6:
            diaSemana = 'Sábado'
            return diaSemana
        default:
            diaSemana = ''
            return diaSemana
    }
}

let indiceMes = data.getMonth()
let nomeMes = getNomeMes()

function getNomeMes() {
    let nomeMes

    switch (indiceMes) {
        case 0:
            nomeMes = 'Janeiro'
            return nomeMes
        case 1:
            nomeMes = 'Fevereiro'
            return nomeMes
        case 2:
            nomeMes = 'Março'
            return nomeMes
        case 3:
            nomeMes = 'Abril'
            return nomeMes
        case 4:
            nomeMes = 'Maio'
            return nomeMes
        case 5:
            nomeMes = 'Junho'
            return nomeMes
        case 6:
            nomeMes = 'Julho'
            return nomeMes
        case 7:
            nomeMes = 'Agosto'
            return nomeMes
        case 8:
            nomeMes = 'Setembro'
            return nomeMes
        case 9:
            nomeMes = 'Outubro'
            return nomeMes
        case 10:
            nomeMes = 'Novembro'
            return nomeMes
        case 11:
            nomeMes = 'Dezembro'
            return nomeMes
        default:
            nomeMes = ''
            return nomeMes
    }
}


let dia = data.getDate()
let ano = data.getFullYear()
    
let dataNaTela = `<h3>${diaSemana}, ${dia} de ${nomeMes} de ${ano}</h3>`

function zeroAEsquerda (num) { 
    return num < 10 ? `0${num}` : num
}

let hora = zeroAEsquerda(data.getHours())
let min = zeroAEsquerda(data.getMinutes())
 
let horaNaTela = `<h3>${hora}:${min}</h3>`

displayData.innerHTML = dataNaTela
displayHora.innerHTML = horaNaTela
