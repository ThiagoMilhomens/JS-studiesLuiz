/*
Os parâmetros da função são os nomes listados na definição da função.

Os argumentos da função são os valores reais passados ​​para (e recebidos pela) função.
*/

function funcao() {
    console.log('oi')
}

funcao('valor', 1 , 2, 3, 4, 7, 6, 8, 9, 10) // JS não dá erro se atribuir parâmetros extras na função 
// oi

// Arguments 
function getArgumento() {
    console.log(arguments[10])
}

getArgumento('valor', 1 , 2, 3, 4, 5, 6, 7, 8, 9, 'argumets10')
// arg10

function percorrerArgumentos() {
    let total = 2
    for (let argumento of arguments) {
        total += argumento
    }
    console.log(total)
}

percorrerArgumentos(10, 2, 4, 50)
// 66

function argumentoNaoAtribuido(a, b, c, d, e, f) {
    console.log(a, b, c, d, e, f)
}

argumentoNaoAtribuido( 1 , 2, 3)  // aqui tbm não tem erro...
// 1 2 3 undefined undefined undefined



function sustentarArgumento(a, b = 2, c = 4) {
    console.log(a + b + c)
}

sustentarArgumento(10) 
// 16
sustentarArgumento(10,'',10 ) // não dá erro, mas tem comportamento "estranho" de concactenação...
// 1010

sustentarArgumento(10, null, 10) // 'null' assume como 0
//20 

sustentarArgumento(10, undefined, 10) // 'undefined' não ignora...(ñ é boa prática, melhor mudar a lógica do código)
//22

//sustentarArgumento(10, , 10)
// SyntaxError: Unexpected token ','

// Destructuring na função


function desestruturaNaFuncao( {nome, sobrenome, idade}) {
    console.log(nome, sobrenome, idade)
}

let cliente = { nome: 'Thiago', sobrenome:'Milhomens', idade: 36}

desestruturaNaFuncao(cliente)
// Thiago Milhomens 36


function desestruturaNaFuncao2([x, y, z]) {
    console.log(x, y, z)
}

let clienteNoArray = [ 'Thiago', 'Milhomens', 36 ]

desestruturaNaFuncao2(clienteNoArray)
// Thiago Milhomens 36