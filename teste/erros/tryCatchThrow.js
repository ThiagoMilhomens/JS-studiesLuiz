try {
    console.log(naoExisto)

} catch (erro) {
    console.log('naoExisto nao existe')
    //console.log(erro)
}

//-------------------------//

function soma (x,y) { 
if (typeof x !== 'number' || typeof y !== 'number')
{
throw('x e y precisam ser números')
}
return x + y
}
try
{
    
}
console.log(soma(10,'3')) 