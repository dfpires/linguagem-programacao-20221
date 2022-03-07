function calcular(){
    // entrada de dados
    let nro1 = Number(document.getElementById("nro1").value)
    let nro2 = Number(document.getElementById("nro2").value)
    let opcao = Number(document.getElementById("opcao").value)
    // processamento
    let resultado
    switch(opcao){
        case 1: resultado = (nro1 + nro2) / 2
                break // sai do switch
        case 2: if (nro1 >= nro2){
                    resultado = nro1 - nro2
                }
                else {
                    resultado = nro2 - nro1
                }
                break // sai do switch
        case 3: resultado = nro1 * nro2
                break // sai do switch
        case 4: if (nro2 != 0){
                    resultado = nro1 / nro2
                }
                else {
                    resultado = "Não pode divisão por zero"
                }
                break // sai do switch
        default: resultado = "Opção inválida"
    }
    // saida
    document.getElementById("resultado").innerHTML = resultado
}