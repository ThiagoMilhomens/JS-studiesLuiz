// Escopo léxico

var nome = 'Thiago'

function falaNome() {
    nome = 'Otávio'
    console.log(nome)
}

function usaFalaNome() {
    nome = 'Pedro'
    falaNome()
}

usaFalaNome()
// Otávio 


// Closure

var nome = 'Rodrigo'                                                 // Escopo global

function retornaFunção(nome) { // <<< função mãe                      |
    return function () {       // <<< funçao filha (anônima)          | 
        return nome            //                                     | Escopo léxico
    }                          // Closure "trava" a funcao (filha) no |        
}                              // acesso apenas do escopo léxico      |                          

const funcao1 = retornaFunção('Luiz')  // para 'funcao1' nome será SEMPRE 'Luiz'
const funcao2 = retornaFunção('João')  // para 'funcao2' nome será SEMPRE 'João'


console.log(funcao1())
// Luiz
console.log(funcao2())
    // João
