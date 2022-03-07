function calcular(){
    // entrada de dados
    let nro1 = Number(document.getElementById("nro1").value)
    let nro2 = Number(document.getElementById("nro2").value)
    let opcao = Number(document.getElementById("opcao").value)
    // processamento
    let resultado
    if (opcao == 1){
        resultado = (nro1 + nro2) / 2
    }
    else if (opcao == 2){
            if (nro1 >= nro2){
                resultado = nro1 - nro2
            }
            else {
                resultado = nro2 - nro1
            }
    }
    else if (opcao == 3){
            resultado = nro1 * nro2
    }
    else if (opcao == 4){
            if (nro2 != 0){
                resultado = nro1 / nro2
            }
            else {
                resultado = "Não pode divisão por zero"
            }
    }
    else {
        resultado = "Opção inválida"
    }
    // saida
    document.getElementById("resultado").innerHTML = resultado
}