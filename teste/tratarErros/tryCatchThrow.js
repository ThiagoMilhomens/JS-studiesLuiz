


try {
    console.log(a)

} catch (erro) {
    console.log('não publicável')
    //console.log(erro)
}

//-------------------------//

function soma (x,y) { 
if (typeof x !== 'number' || typeof y !== 'number')
{
throw new ReferenceError('x e y precisam ser números')
}
return x + y
}
try
{
    console.log(soma(10, 3)) 
    console.log(soma(10,'3')) 
} catch (err) {
    //console.log(err)
    console.log('algo amigável') 
}
