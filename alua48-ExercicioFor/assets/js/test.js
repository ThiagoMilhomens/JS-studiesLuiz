const elementos = [
    {tag: 'p', texto: 'Frase 1'}, // 0
    {tag: 'div', texto: 'Frase 2'}, // 1
    {tag: 'footer', texto: 'Frase 3'}, // 2
    {tag: 'section', texto: 'Frase 4'}  // 3 
]

const [ p, div, footer, section] = elementos

let objeto = elementos [2]

function destrucTag () {
    let {tag, texto} = objeto
    return `<${tag}>${texto}</${tag}>`
}

//console.log(destrucTag())

for (let i = 0; i < elementos.length; i ++) { 
        console.log (objeto)

}



