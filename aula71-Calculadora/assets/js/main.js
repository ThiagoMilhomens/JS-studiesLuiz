
function criaCalculadora() {
    // objeto calculadora 
    return {
        
        // CHAVE DISPLAY (linkando os valores do display) 
        display: document.querySelector('.display'),
        btnClear: document.querySelector('.btn-clear'),
        
        inicia() {
            this.cliqueBotoes()
            this.pressionarEnter()
        },

        pressionarEnter() {
            this.display.addEventListener('keyup', e => {
                if (e.keyCode === 13) {
                    this.realizaconta()
                }
            })
        },

        clearDisplay() {
            this.display.value = ''
        },
        
        apagaUm() {
            this.display.value = this.display.value.slice(0, -1)
        },

        realizaconta() {
            let conta = this.display.value
            
            try {
                conta = eval(conta)

                if(!conta) {
                    alert ('conta inválida')
                    return
                }
                this.display.value = String(conta)
            } catch(e) {
                alert('Conta Inválida')
                return;
            }
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
                
                if (el.classList.contains('btn-clear')) {
                    this.clearDisplay()
                }

                if (el.classList.contains('btn-del')) {
                    this.apagaUm()
                }

                if (el.classList.contains('btn-eq')) {
                    this.realizaconta()
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