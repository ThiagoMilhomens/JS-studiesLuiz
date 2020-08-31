const elementos = [
    {tag: 'p', texto: 'Frase 1'},
    {tag: 'div', texto: 'Frase 2'},
    {tag: 'footer', texto: 'Frase 3'},
    {tag: 'section', texto: 'Frase 4'}
]


const [ p, div, footer, section] = elementos

let objeto = elementos [2] // getIndice

function destrucTag () {
    let {tag, texto} = objeto
    return `<${tag}>${texto}</${tag}>`
}
console.log(destrucTag())