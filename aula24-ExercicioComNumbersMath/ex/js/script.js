const numero = Number(prompt('Digite um número: '))
const numeroTitulo = document.getElementById('numero-titulo')
const texto = document.getElementById('texto')

numeroTitulo.innerHTML = numero

texto.innerHTML = `<p>Raiz quadrada é: <strong>${numero ** 2}</strong></p>`
texto.innerHTML += `<p>Número é inteiro: <strong>${Number.isInteger(numero)}</strong></p>`
texto.innerHTML += `<p>É NaN: <strong>${Number.isNaN(numero)}</strong></p>`
texto.innerHTML += `<p>Arredondando para baixo: <strong>${Math.floor(numero)}</strong></p>`
texto.innerHTML += `<p>Arredondando para cima: <strong>${Math.ceil(numero)}</strong></p>`
texto.innerHTML += `<p>Com dua casas decimais: <strong>${numero.toFixed(2)}</strong></p>`

