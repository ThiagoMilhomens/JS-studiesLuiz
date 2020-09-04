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

const nome = 'Thiago'  // pode ser array, objeto não dá

for (let valor of nome) { 
    console.log(valor)
}
//T
//h
//i
//a
//g
//o