
function criaCalculadora() {
    // objeto calculadora 
    return {
        
        // CHAVE DISPLAY (linkando os valores do display) 
        display: document.querySelector('.display'), 

        inicia() {
            this.cliqueBotoes()
        },
        
        // CAPTURAR CLICK
        cliqueBotoes() {
                // this >> escopo 'criarCalculadora()'           
            document.addEventListener('click', function(e) {
                // this >> escopo 'document'
                // JOGANDO VALORES NO DISPLAY 1              
                const el = e.target

                if (el.classList.contains('btn-num')) {
                    this.btnParaDisplay(el.innerText) // 'this' precisa funcionar somente neste escopo.
                }

            }.bind(this)); // << fechando 'this' neste escopo com '.bind()' 
            // se fosse uma arrow function não necessitaria de '.bind()'
            // arrow function limita automaticamnete o this apenas ao seu escopo
        },

        // JOGANDO VALORES NO DISPLAY 2  
        btnParaDisplay(valor) {
            this.display.value += valor

        }
    }
}

const calculadora = criaCalculadora()
calculadora.inicia()