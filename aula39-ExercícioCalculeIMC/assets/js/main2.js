// Capturar evento de submit do formulário

const form = document.querySelector('.form') // 'form' é class no index.html então a ligação é feita com .(ponto na frente) 

form.addEventListener('submit', function (evento) {
    evento.preventDefault()
    //console.log('Evento previnido')   // Este console é apenas para verificar no browser...
    //setResultado(msg)              // hosting da função de menssagem de resultado
    
    const inputPeso = evento.target.querySelector('#peso')
    const inputAltura = evento.target.querySelector('#altura')
    //console.log(inputPeso) // Este console é apenas para verificar no browser...
    
    const peso = Number(inputPeso.value)
    const altura = Number(inputAltura.value)
    //console.log(peso,altura)
 
    // Subfunção separa os parâmetros inválidos para peso e altura (verificando se são números)
    if(!peso) {
        setResultado('Peso inválido!', false)
        return                                 // 'return' apenas para parar a leitura do código...
    }
    //Caso o valor inputado seja 'NaN' interrompe a leitura do código aqui e passará 2 parâmetros para funcçao 'setResultado()'
    //A mensagem  'Altura/Peso inválido!', e o bollean 'false' (q ajudará na escolha da cor de background através de 'class' no HTML) 
    if(!altura) {
        setResultado('Altura inválida!', false) 
        return
    }
    //console.log('check com numeros válidos')

    const imc = getImc(peso, altura)
    const nivelImc = getNivelImc(imc)

    const mensagem = `Seu IMC é ${imc} (${nivelImc}) `

    setResultado(mensagem, true)
})

// Função nível (para imprimir a mensagem de acordo com o grau do imc)

function getNivelImc (imc) {
    const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3']
    
    if (imc >= 39.9) return nivel[5]
    if (imc >= 34.9) return nivel[4]
    if (imc >= 29.9) return nivel[3]
    if (imc >= 24.9) return nivel[2]
    if (imc >= 18.5) return nivel[1]
    if (imc < 18.5) return nivel[0]

}

// Função cálculo

function getImc (peso, altura) {
    const imc = peso / altura ** 2
    return imc.toFixed(2)
}

//função que cria parágrafo HTML com class

function criarParagrafo () {
    const paragrafo = document.createElement('paragrafo')
    return paragrafo
}

//Função que adiciona o resultado na pagina como um HTML( dentro da tag <div class="resultado> </div>")  

function setResultado(mensagem, isValid) {
    const resultado = document.querySelector('.resultado') //nomeando constante
    resultado.innerHTML = ''                             // usando a const para defininir 'msg' como parâmetro   
    
    const paragrafo = criarParagrafo()

    if (isValid) {
        paragrafo.classList.add('paragrafoDeuBom')
    } else {
        paragrafo.classList.add('paragrafoDeuRuim')
    }


    paragrafo.innerHTML = mensagem
    resultado.appendChild(paragrafo)                    
}