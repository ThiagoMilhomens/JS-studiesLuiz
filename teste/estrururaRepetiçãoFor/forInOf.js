const pessoa = {
    nome: 'thiago',
    sobrenome: 'milhomens',
    idade: 36
}

for (let chaves in pessoa) {
    console.log(chaves)
}
//nome
//sobrenome
//idade
for (let chaves in pessoa) {
    console.log(chaves, pessoa[chaves])
}
//nome thiago
//sobrenome milhomens
//idade 36