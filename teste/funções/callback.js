// Callback é útil para lidar com funções assíncronas (embora 'promises' seja uma solução melhor)


// criando timeout assíncrono para servir de exemplo...

// tempo de preparação do prato
function rand(min = 0, max = 1000) {
    const num = Math.random() * (max - min) + min
    return Math.floor(num)
}

// entrada, principal e sobremesa
function entrada(callback) {        // acrescenta o parâmetro (mandatório no callback)
    setTimeout(function () {
        console.log('Servir queijo assado')
        if (callback) callback()    // parâmetro arbitra a execução com função (mandatório no callback)
    }, rand())
}

function pratoPrincipal(callback) {
    setTimeout(function () {
        console.log('Servir Carne de Sol')
        if (callback) callback()
    }, rand())
}

function sobremesa(callback) {
    setTimeout(function () {
        console.log('Servir sorvete de Araçá')
        if (callback) callback()
    }, rand())
}


// imagine que as estações na cozinha podem terminar 
// entrada, prato principal e sobremesa em tempos randômicos,
// porém a sequência de servir e pagar PRECISA ser respeitada 


// entrada()          //>>> rand
// pratoPrincipal()   //>>> rand
// sobremesa()        //>>> rand
// console.log('Fechar a conta') //>>> vai imprimir primeiro


// Callback serve para solucionar a sequência
// entao acrescentamos 

entrada(function(){
    pratoPrincipal(function(){
        sobremesa(function(){
            console.log('Fechar Conta')
        })
    })
})

// -----Outra forma de organizar se estiver confuso o "callbackhell" acima------//

// entrada(entradaCallback);

// function entradaCallback() {
//     pratoPrincipal(pratoPrincipalCallback)
// }

// function pratoPrincipalCallback() {
//     sobremesa(sobremesaCallback)
// }

// function sobremesaCallback() {
//     console.log('Fechar a conta')
// }