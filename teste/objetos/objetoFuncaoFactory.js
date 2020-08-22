// Função factory, é qualquer função que cria um objeto.

function criarObjetoPessoa (nome, sobrenome, idade) {
    return { nome, sobrenome, idade }
}

const pessoa1 = criarObjetoPessoa('Thiago','Milhomens',36)
const pessoa2 = criarObjetoPessoa('Cristina','Camazzola',29)
console.log(pessoa1)
// { nome: 'Thiago', sobrenome: 'Milhomens', idade: 36 }

console.log(`${pessoa1.nome}, ${pessoa2.nome}`)
// Thiago, Cristina

pessoa2.sobrenome = pessoa1.sobrenome
console.log(pessoa2)
// { nome: 'Cristina', sobrenome: 'Milhomens', idade: 29 }

