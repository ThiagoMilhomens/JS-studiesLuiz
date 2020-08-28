// tempo em JS é contado em milissegundos

const data = new Date(0) // JS tem padrão unix time 01/01/1970 (se usar 0 como parâmetro para imprimir) 
console.log(data.toString())
// Wed Dec 31 1969 21:00:00 GMT-0300 (Brasilia Standard Time) horário de brasilia vai diminuir 3 horas

const tresHoras = 60 * 60 * 3 * 1000 // 60 * 60 = 1 hora , 1000 representa milisegundos
const umDia = 60 * 60 * 24 * 1000   // 24 horas em milesimo de segundos é 86 400 segundos

const data2 = new Date(0 + tresHoras) 
console.log(data2.toString())
// Thu Jan 01 1970 00:00:00 GMT-0300 (Brasilia Standard Time)

const data3 = new Date(0 + tresHoras - umDia)
console.log(data3.toString())
// Wed Dec 31 1969 00:00:00 GMT-0300 (Brasilia Standard Time)

console.log(Date.now()) // tempo contado em milisegundos desde 01/01/1970 ("marco zero")
// 1598569271137 

const data4 = new Date() //sem usar parâmetro temos a data e hora fornecido pelo sistema 
console.log(data4.toString())
// Thu Aug 27 2020 19:30:11 GMT-0300 (Brasilia Standard Time)

console.log(data4) // o retono sem '.toString()' é um objetc
// 2020-08-27T22:30:11.085Z

const data5 = new Date(2030, 0, 1, 19, 30, 11, 850) // parms (ano, índice mês, dia, hora, minutos, segundos, milésimos)
console.log(data5.toString())
console.log(data5)
// Tue Jan 01 2030 19:30:11 GMT-0300 (Brasilia Standard Time) 
// 2030-01-01T22:30:11.850Z

const data6 = new Date('2019-04-20 20:20:59') // Outra forma de atribuir..
console.log(data6.toString())
console.log(data6)
// Sat Apr 20 2019 20:20:59 GMT-0300 (Brasilia Standard Time)
// 2019-04-20T23:20:59.000Z

console.log ('Dia', data6.getDate()) // dia do mês 
// Dia 20
console.log ('Mês', data6.getMonth() + 1) // mês começa no índice 0
// Mês 4
console.log ('Ano', data6.getFullYear())
// Ano 2019
console.log ('Hora', data6.getHours())
// Hora 20
console.log ('Min', data6.getMinutes())
// Min 20
console.log ('Seg', data6.getSeconds())
// Seg 59
console.log ('Ms', data6.getMilliseconds())
// Ms 0
console.log ('Dia semana', data6.getDay()) // dia da semana, índice 0 é domingo, 6 é sábado
// Dia semana 6
