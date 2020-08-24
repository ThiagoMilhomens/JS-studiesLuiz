let maiorDeIdade = true
let possuiCarteiraDeTrabalho = true

const candidatoAprovado = maiorDeIdade && possuiCarteiraDeTrabalho

const candidatoRecusado = !candidatoAprovado

console.log(candidatoRecusado)
// false

console.log(candidatoAprovado)
// true 