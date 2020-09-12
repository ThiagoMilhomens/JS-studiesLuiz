 // Factory functions é útil para construir objetos(muito usado em OO)


 function criarPessoa( nome, sobrenome, altura, peso) {
     return {
         nome,
         sobrenome,

         // GETTER 
         get nomeCompleto () {
            return `${this.nome} ${this.sobrenome}`
         },

         // SETTER
         set nomeCompleto(valor) {
            valor = valor.split(' ')
            this.nome = valor.shift()
            this.sobrenome = valor.join(' ')
         },

         fala: function(assunto) {
             return `${nome} está ${assunto} seu peso, que é ${this.peso}.`
         },
         
         altura,
         peso, 

         // GETTER
         get imc() { 
             const indice = this.peso / (this.altura ** 2);
             return indice.toFixed(2)
         },
     }
 }

 const p1 = criarPessoa('Thiago', 'Milhomens', 1.8, 125)
 const p2 = criarPessoa('José', 'Mané', 1.6, 55)
 
 // Setter para modificar o objeto 
 p2.nomeCompleto = 'Fulano deTal'

 console.log(p1.sobrenome)
// Milhomens
 console.log(p1.nomeCompleto)
// Thiago Milhomens
 
console.log(p2.sobrenome)
// deTal
console.log(p2.nome, p2.imc)
// Fulano 21.48