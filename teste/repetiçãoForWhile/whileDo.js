let i = 0

while (i <= 4) {
    console.log(i)
    i++
}

/*
0
1
2
3
4
*/
//------------------------------------------------//

const nome = 'thiago'

let i = 0

while (i < nome.length) {
    console.log(nome[i])
    i++
}

/*
t
h
i
a
g
o
*/
//-------------------------------------------//

function random(min, max) {
    const r = Math.random() * (max - min) + min
    return Math.floor(r)
}

const min = 1
const max = 50
let rand = random(min, max)

// while ( rand !== 10 ) {
//     rand = random(min, max)
//     console.log(rand)
// }

do {
    rand = random(min, max)
    console.log(rand)
} while (rand !== 10);