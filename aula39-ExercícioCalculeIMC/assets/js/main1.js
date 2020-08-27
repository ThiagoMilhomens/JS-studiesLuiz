
const form = document.querySelector('.form')
const resultado = document.querySelector('.resultado')



function recebeEventoForm(evento) {

    evento.preventDefault(1)

    const inputAltura = form.querySelector('#altura')
    const inputPeso = form.querySelector('#peso')

    const altura = Number(inputAltura.value.replace(',', '.'))
    const peso = Number(inputPeso.value.replace(',', '.'))


    function resultadoImc() {
        return peso / altura ** 2
    }

    let calcFinal = resultadoImc()
    let imc = calcFinal.toFixed(2)

    function resposta() {
        if (imc < 5) {
            return `Preencha corretamente os campos acima!`
        } else if (imc < 18.5) {
            return `Seu IMC é ${imc} (Abaixo do peso)`
        } else if (imc >= 18.5 && imc <= 24.9) {
            return `Seu IMC é ${imc} (Peso normal)`
        } else if (imc >= 25 && imc <= 29.9) {
            return `Seu IMC é ${imc} (Sobrepeso)`
        } else if (imc >= 30 && imc <= 34.9) {
            return `Seu IMC é ${imc} (Obesidade grau 1)`
        } else if (imc >= 35 && imc <= 39.9) {
            return `Seu IMC é ${imc} (Obesidade grau 2)`
        } else if (imc >= 40) {
            return `Seu IMC é ${imc} (Obesidade grau 3)`
        } else {
            return `Preencha corretamente os campos acima!`
        }
    }


    resultado.innerHTML = resposta()
}

form.addEventListener('submit', recebeEventoForm)

