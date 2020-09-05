// Função recebe número e retorna: divisível por três = Fizz, divisível por cinco = Buzz,
// divisível por três e cinco= FizzBuzz, não é divisível por três e cinco = próprio número

// função criar aleatório de 0 a 100 

function random(min, max) {
    const r = Math.random() * (max - min) + min
    return Math.floor(r)
}

const min = 1
const max = 100
let rand = random(min, max)


// função resultado
let num = rand

function getResultado() {

    if (typeof num !== 'number') {           // solução professor!
        return (num + ' Não é number')
    }
    if ( ((num % 3) == 0) && ((num % 5) == 0) ) {
        return (num + "FizzBuzz");
    }
    if ((num % 3) == 0) {
        return (num + " Fizz");
    }
    if ((num % 5) == 0) {
        return (num + " Buzz");
    }
    else {
        return (num)
    }
}

console.log(getResultado())