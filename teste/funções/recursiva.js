// Função Recursiva é capaz de se chamar de volta (seria um loop?)
// se exagerar nas repetiçãoes(acima de 1000 ) pode dar erro(JS entende loop infinito)

function recursiva(max) {
    console.log(max) 
    if (max >= 2) return;
    max++
    //console.log(max) // daqui começa imprimir no console -2 
    recursiva(max) // <<< aqui chamo a função com o parâmetro novamente

}

recursiva(-3)
/*
-3
-2
-1
0
1
2
*/
