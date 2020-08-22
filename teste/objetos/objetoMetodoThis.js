// Criando um Método dentro do objeto e usando 'this' dentro do escopo.
const pessoa = {
    nome: 'Thiago',
    sobrenome: 'Milhomens',
    idade: 36,
    diaDeNascimento: 11,
    mesDeNacimento: 'Setembro',
   
    frase () {
        return `Dia ${this.diaDeNascimento + 1} de ${this.mesDeNacimento} ${this.nome} terá ${this.idade + 1} anos de idade.`
    },
}

//console.log(pessoa)
/*
{
  nome: 'Thiago',
  sobrenome: 'Milhomens',
  idade: 36,
  diaDeNascimento: 11,
  mesDeNacimento: 'Setembro',
  frase: [Function: frase]
}
*/

console.log(pessoa.frase())
// Dia 12 de Setembro Thiago terá 37 anos de idade.
