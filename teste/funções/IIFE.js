// IIFE


(function(){
    nome = 'thiago'
    console.log(nome)
})();
// thiago


(function(){
    function retornaFunção(nome) { 
        return function () {       
            return nome           
        }                                 
    }                                                     
    
    const funcao1 = retornaFunção('Luiz')  
    const funcao2 = retornaFunção('João')  
    
    console.log(funcao1())
    console.log(funcao2())
})();   //  <<< neste caso se não colocar ';' vai dar ERRO no código!!!
// Luiz
// João


// Colocando parâmetros na IIFE 

let cliente = 'Thiago'
let sobrenome = 'Milhomens'
let peso = 120
let altura = 181
let idade = 36

function id () {     // ñ sei pq mas não aceita string como primeiro parâmetro
    return cliente
}

(function(id, sobrenome, peso, altura, idade){
        console.log(`nome: ${id}, sobrenome: ${sobrenome}, peso: ${peso}, altura: ${altura}, idade: ${idade}`)
}) (cliente , sobrenome, peso, altura, idade);  // mas aceita string como segundo parâmetro ???

// nome: Thiago, sobrenome: Milhomens, peso: 120, altura: 181, idade: 36
