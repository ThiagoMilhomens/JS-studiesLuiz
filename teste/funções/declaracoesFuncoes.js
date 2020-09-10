// Função é first class object, portanto são tratados como dado.

//Hoisting só acontece  em declaração literal de função

falaOi()
// oi

function falaOi() {
    console.log('oi')
}


// Function expression

// falaOla () >>> erro, pois, não funciona hoisting...

const falaOla = function () {
    console.log('Ola')
}

falaOla()
// Ola


// função como parâmetro

function executarFuncao (funcao) {
    funcao()
}

executarFuncao(falaOi)
// oi

// Arrow function é function expression de sintaxe curta (mas comporta diferente no uso do 'this' )

const funcaoArrow = (f) => {
    f()
}

funcaoArrow(falaOla)
// Ola

// Função dentro do objeto



const obj = {
    falaAi: 'Ai',
    funcaoOI() {
        return 'Oi'
    },
    falaUi: 'Ui'
};

console.log(obj.falaAi, obj.falaUi, obj.funcaoOI())
// Ai Ui Oi