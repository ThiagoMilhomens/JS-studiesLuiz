// Existem funções que retornam ou não retornam valor


// Retornando objeto

function criaPessoa (nome, sobrenome) {
    return { nome, sobrenome }
}

const p1 = criaPessoa('Thiago', 'Milhomens')
const p2 = { 
    nome: 'José', 
    sobrenome: 'Mané' 
}

console.log(p1, p2)
// { nome: 'Thiago', sobrenome: 'Milhomens' } { nome: 'José', sobrenome: 'Mané' }


// Retornando outra função (ex de closure)

function criaMultiplicador(multiplicador) {
    return function(numero) {
        return numero * multiplicador
    }
} 

const duplica = criaMultiplicador(2)
const triplica = criaMultiplicador(3) 
const quadruplica = criaMultiplicador(4)

console.log(duplica(2)) // <<< (2) é o 'número' que será multiplicado
// 4
console.log(triplica(2))
// 6
console.log(quadruplica(2))
// 8