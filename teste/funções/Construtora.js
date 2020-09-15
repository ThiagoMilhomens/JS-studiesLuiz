// Função Construtora por conveção sempre começa com letra Maiúscula
// usamos a plavra 'new'

// function Pessoa(nome, sobrenome) {
//     // atributos ou métodos privados usam variáveis
    
//     const ID = 1234

//      const metodoInterno = function() {
//          return ID 
//      }


//     // atributos ou métodos publicos usam 'this'
//     this.nome = nome
//     this.sobrenome = sobrenome
//     // repare que não nescessita 'return'
    
//     this.metodo = () => {
//         console.log( this.nome + ': sou metodo')
//     }
// }   

// const p1 = new Pessoa('Thiago', 'Milhomens')
// const p2 = new Pessoa('Maria', 'Antunes')

// // função construtora cria novo objeto vazio, faz 'this' apontar para esse objeto novo e retorna em numa nova variável.

// console.log(p1.nome)
// // Thiago
// console.log(p2.sobrenome)
// // Antunes

// p2.metodo()

function Pessoa (nome, sobrenome, altura, peso) {
    this.nome = nome
    this.sobrenome = sobrenome
    this.altura = altura
    this.peso = peso
    
    
    this.nomeCompleto = () => {
        return `${this.nome} ${this.sobrenome}`
    };

    this.imc = () => {
        const indice = this.peso / (this.altura ** 2);
        return indice.toFixed(2)
    };
}

const p1 = new Pessoa('Thiago', 'Milhomens', 1.81, 125)
const p2 = new Pessoa('Maria', 'Antunes', 1.65, 50)

//p2.nomeCompleto = 'Fulano deTal'

console.log(p2.nomeCompleto(), p2.imc())