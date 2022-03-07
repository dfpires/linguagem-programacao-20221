function calcular(){
    // entrada de dados
    let nro1 = Number(document.getElementById("nro1").value)
    let nro2 = Number(document.getElementById("nro2").value)
    let opcao = Number(document.getElementById("opcao").value)
    // processamento
    let resultado
    switch(opcao){
        case 1: resultado = Math.pow(nro1, nro2)
                break // sai do switch
        case 2: resultado = Math.sqrt(nro1) + " - " + Math.sqrt(nro2)
                break // sai do switch
        case 3: resultado = Math.cbrt(nro1) + " - " + Math.cbrt(nro2)
                break // sai do switch
        default: resultado = "Opção inválida"
    }
    // saida
    document.getElementById("resultado").innerHTML = resultado
}