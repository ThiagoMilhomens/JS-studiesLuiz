//Função chamada ePaisagem recebe altura e largura de um imagem(number), retorna true se estiver no modo paisagem.
 

function ePaisagem (largura, altura) {
    return largura > altura ? true : false;
}

console.log(ePaisagem(640, 320))

//-------------Arrow function---------------------//

const ePaisagem = (largura,altura) => largura > altura ? true : false

console.log(ePaisagem(640, 320))

//-------------solução  prof---------------------//

const ePaisagem = (largura,altura) => largura > altura   // automaticamente retorna true ou false...

console.log(ePaisagem(640, 320))