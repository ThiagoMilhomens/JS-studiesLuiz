// Geradoras tem capacidade de "pausar" o código

function* geradora1() {
    yield 'bom dia'
    yield 'boa tarde'
    yield 'boi noite'
}

const g1 = geradora1()

console.log(g1.next()) // precisa usar o '.next()'
//{ value: 'bom dia', done: false } <<< retorna esse objeto
console.log(g1.next().value) 
// boa tarde
console.log(g1.next().value) // extraindo apenas 'value:'
// boi noite
console.log(g1.next())
// { value: undefined, done: true }
console.log(g1.next().value)
// undefined

// Usando estrutura de repetição 'for'
// 'for' sabe a hora de parar

function* geradora2() {
    yield 'bom dia'
    yield 'boa tarde'
    yield 'boa noite'

}

const g2 = geradora2()

for (let i of g2) {
    console.log(i)
}

// bom dia
// boa tarde
// boa noite

// Usando estrutura de repetição 'while'
// 'while' vai funcionar quantas vezes for requisitado (infinito)

function* geradora3() {
    let i = 0

    while(true) {
        yield i
        i++
    }
}

const g3 = geradora3()

console.log(g3.next().value)
// 0
console.log(g3.next().value)
// 1
console.log(g3.next().value)
// 2


// Geradora dentro de Geradora

function* geradora4() {
    yield 0
    yield 1
    yield 2
}


function* geradora5() {
    yield* geradora4()
    yield 3
    yield 4
    yield 5
}

const g5 = geradora5()
for (let i of g5) {
    console.log(i)
}

/*
0
1
2
3
4
5
*/

function* geradora6() {
    yield function() {
        console.log('bom dia')
    }
    
    //.. Cuidado! Se tiver um 'return' no meio, não aciona mais a próxima yield... 

    yield function() {
        console.log('boa tarde')
    }
}

const g6 = geradora6()
const func1 = g6.next().value
const func2 = g6.next().value

func1()
// bom dia
func2()
// boa tarde