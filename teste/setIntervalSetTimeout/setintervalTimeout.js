function mostrarHora() {
    let data = new Date()

    return data.toLocaleTimeString('pt-BR', {
        hour12: false
    });
}


const timer = setInterval ( function() {   // função anônima
    console.log(mostrarHora()) 
}, 1000 ) 


setTimeout( function() {
    clearInterval(timer)
}, 5000)

setTimeout( function() {
    console.log('Tempo expirado')
}, 7000)  