// try {
//   // É executado quando NÃO há erros    
// } catch (e) {
//   // É executado quando há erros    
// } finally {
//   // É executado sempre(embora possa ser omitido)   
// }

// //-------------------------------------//

// try {
//     console.log('Abri um arquivo')
//     console.log('Manipulei o arquivo')  
//     //console.log(a)  // erro 
//     console.log('Fechei o arquivo')      
    
//     try {
//         console.log(b) // erro
//     } catch(e){
//         console.log('deu erro')   
//     } finally {
//         console.log('também sou finally')   
//     }

//   } catch (e) {
//     console.log('Tratando o erro')     
//   } finally {
//     console.log('Finally: eu sempre sou executado')    
//   }

  //-------------------------------------//

function retornaHora (data) {
    if (data && !(data instanceof Date)) {
        throw new TypeError('Esperando instância de Date.')
    }
    
    if (!data) {
        data = new Date()
    }

    return data.toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    })
}

try {
    const data = new Date('01-01-1970 12:58:10')
    const hora = retornaHora()
    console.log(hora)
} catch (e) {
    console.log('algo errado') 
} finally {
    console.log('Até a próxima')
}
