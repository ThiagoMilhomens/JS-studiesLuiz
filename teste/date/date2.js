const data = new Date(2030, 0, 1, 1, 30, 5, 850) // (ano, índice mês, dia, hora, minutos, segundos, milésimos)
const dataBrasil= formatarData(data)

function zeroAEsquerda (num) {
    //if (num < 10) return `0${num}` // minha solução
    //else return num
    
    //return num >= 10 ? num : `0${num}` // solução do prof, op ternário
    return num < 10 ? `0${num}` : num
}

function formatarData(data) {
    const dia = zeroAEsquerda(data.getDate())
    const mes = zeroAEsquerda(data.getMonth() + 1) 
    const ano = zeroAEsquerda(data.getFullYear())
    const hora = zeroAEsquerda(data.getHours())
    const min = zeroAEsquerda(data.getMinutes())
    const seg = zeroAEsquerda(data.getSeconds())

    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`
}

console.log(dataBrasil)
// 01/01/2030 01:30:05