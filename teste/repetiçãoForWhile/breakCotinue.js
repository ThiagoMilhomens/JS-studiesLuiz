const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9]

for (let numero of numeros) {

    if (numero === 2) {
        console.log('pulei 2')
        continue
    }
    console.log(numero)

    if (numero === 5) {
        console.log('parei aqui')
        break
    }

}
/*
1
pulei 2
3
4
5
parei aqui
*/

