const inputTarefa = document.querySelector('.input-tarefa')
const btnTarefa = document.querySelector('.btn-tarefa')
const tarefas = document.querySelector('.tarefas')


// criando tarefa

function criaTarefa(textoInput) {
    const li = criaLi()
    li.innerText = textoInput
    tarefas.appendChild(li) // vai acrescentar na ul tarefas
    limpaInput()
    criarbotaoApagar(li)
    salvarTarefa()
}

// adcionando tarefas na lista 


function criaLi() {
    const li = document.createElement('li')
    return li
}

// criando botão para apagar tarefa da lista

function criarbotaoApagar(li) {
    li.innerText += ' '
    const botaoApagar = document.createElement('button')
    botaoApagar.innerText = 'Apagar'
    botaoApagar.setAttribute('class', 'apagar')
    botaoApagar.setAttribute('title', 'Apagar esta tarefa')
    li.appendChild(botaoApagar)
}

// ativando o botão apagar

document.addEventListener('click', function (e) {
    const el = e.target

    if (el.classList.contains('apagar')) {
        el.parentElement.remove()
        salvarTarefa()  // limpar a tarefa do local Storage
    }
})


// capturando input com click no botão

btnTarefa.addEventListener('click', function () {
    if (!inputTarefa.value) return
    criaTarefa(inputTarefa.value)
    //console.log(inputTarefa.value)
})

// capturando input pressionando enter

inputTarefa.addEventListener('keypress', function (e) {
    if (e.keyCode === 13) {
        if (!inputTarefa.value) return
        criaTarefa(inputTarefa.value)
    }
})

// limpando o texto do input 

function limpaInput() {
    inputTarefa.value = ''
    inputTarefa.focus()
}

// salvando tarefas (criando um array)

function salvarTarefa() {
    const liTarefas = tarefas.querySelectorAll('li')
    const listaDeTarefas = []

    for (let tarefa of liTarefas) {
        let tarefaTexto = tarefa.innerText  // vai vir com o texto 'Apagar' do botão..
        tarefaTexto = tarefaTexto.replace('Apagar', '').trim()
        listaDeTarefas.push(tarefaTexto)
    }
    // transformando o array em srting com JSON para salvar em 'localStorage' do navegador
    const tarefasJSON = JSON.stringify(listaDeTarefas)
    localStorage.setItem('tarefas', tarefasJSON) // 'setItem()' requer como segundo parâmetro um JSON 
}

// recuperando tarefas salvas (só funciona dentro daquele navegador, "tipo um cache" ???)

function recuperaTarefasSalvas() {
    const tarefas = localStorage.getItem('tarefas') //'Local Storage' no devtools está dentro da aba applications
    const listaDeTarefas = JSON.parse(tarefas) // revertendo de srting para array novamente

    for (let tarefa of listaDeTarefas) {
        criaTarefa(tarefa)
    }
}

recuperaTarefasSalvas() // acionando a função