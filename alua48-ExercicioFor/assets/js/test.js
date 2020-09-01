

// desestruturando array
const elementos = [
    {tag: 'p', texto: 'Frase 1'},
    {tag: 'div', texto: 'Frase 2'},
    {tag: 'footer', texto: 'Frase 3'},
    {tag: 'section', texto: 'Frase 4'}
]



const alcance = []

for (let i = 0; i < elementos.length; i ++) { 
    let {tag,texto} = elementos [i]
    console.log(alcance.push([`<${tag}>${texto}</${tag}>`]))
}

let resultado = `${alcance[0]}${alcance[1]}${alcance[2]}${alcance[3]}`



// //desetruturando objeto
// let objeto = elementos [i] 

// function destrucTag () {
//     let {tag, texto} = objeto
//     return `<${tag}>${texto}</${tag}>`
// }


