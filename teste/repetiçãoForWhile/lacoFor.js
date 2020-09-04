let opcaoUsuario = 8
for (let indice = 0; indice <= opcaoUsuario; indice++) {
     console.log(`Linha ${indice}`)
}

// pulando de 2 em dois   
for (let i = 0; i <= 10; i += 2) { //usar operador artmético +=
    console.log(`Linha ${i}`)
}

// checando par impar
for (let indice = 0; indice <= 6; indice++) {
    const par = indice % 2 === 0 ? 'par' : 'impar'
    console.log(indice, par)
}

const frutas = [ 'maçã', 'pera', 'banana', 'uva', 'laranja', 'mamão' ]
for (let i = 0; i < frutas.length; i ++) { 
    console.log(`Indice ${i}`, frutas[i])
}
