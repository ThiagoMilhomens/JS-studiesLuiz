// Função que recebe dois números e retorne o maior deles 


function maior(num1, num2){
    if (num1 > num2) {
    return num1
    } else {          // por ser apenas 2 opções else não é necessário
        return num2
    }
}

console.log(maior(56, 29))
//56

//--------------------------------------//
function maior(num1, num2){
    if (num1 > num2) return num1
    return num2
}
console.log(maior(26, 49))
//49

//-------------------------------------//

function maior(num1, num2){
    return num1 > num2 ? num1 : num2
}
console.log(maior(26, 49))

//---------------Arrow Function----------------//

const maior = (num1, num2) => {
    return num1 > num2 ? num1 : num2
}
console.log(maior(26, 49))

//-------------------------------------//

const maior = (num1, num2) => num1 > num2 ? num1 : num2

console.log(maior(26, 49))