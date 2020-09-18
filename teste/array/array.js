// Array

const nomes = ['thiago', 'joão', 'pedro', ]
nomes [1] = 'joao novo'

console.log(nomes)
// [ 'thiago', 'joao novo', 'pedro' ]

delete nomes[1]
console.log(nomes)
// [ 'thiago', <1 empty item>, 'pedro' ]

const removidoFinal = nomes.pop()
console.log(nomes, removidoFinal)
// [ 'thiago', <1 empty item> ] pedro

const removidoInicio = nomes.shift()
console.log(nomes, removidoInicio)
//[ <1 empty item> ] thiago

nomes.push('volta thiago', 'volta pedro')
console.log(nomes)
// [ <1 empty item>, 'volta thiago', 'volta pedro' ]

nomes.shift() // repare que preenche 'empty item'
console.log(nomes) 
// [ 'thiago', 'pedro', 'volta thiago', 'volta pedro' ]

nomes.unshift(removidoInicio, removidoFinal)
console.log(nomes)
// [ 'thiago', 'pedro', 'volta thiago', 'volta pedro' ]

const fatiado = nomes.slice(1, 3)
console.log(fatiado)
// [ 'pedro', 'volta thiago' ]


