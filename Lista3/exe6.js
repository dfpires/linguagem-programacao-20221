function calcular(){
    let totalPrazo = 0
    let qtdePrazo = 0
    let totalVista = 0
    let qtdeVista = 0
    for(let cont = 1;cont<=5;cont++){
        let codigo = prompt(`Informe P à prazo ou V à vista`).toUpperCase()
        let valor = Number(prompt(`Informe valor`))
        if (codigo == "P"){
            totalPrazo = totalPrazo + valor // acumula valor
            qtdePrazo++ // incrementa 1
        }
        else if (codigo == "V"){
            totalVista = totalVista + valor // acumula valor
            qtdeVista++ // incrementa 1
        }
        else {
            alert("Código inválido, o valor informado não será contado")
        }

    }
    let result = "Total à vista " + totalVista + " total à prazo " + totalPrazo
    result = result + "<br/> Total geral " + (totalPrazo + totalVista)
    let parcela = totalPrazo / 3 // calcula valor da 1a. parcela
    result = result  + "<br/> Valor da 1a. parcela à prazo " + parcela
    document.getElementById("result").innerHTML = result
}
