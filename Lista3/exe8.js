function calcular(){
    let item1 = 0 // idade > 50 e peso < 60
    let somaItem2 = 0; let qtdeItem2 = 0;
    let item3 = 0
    for(let cont=1;cont<=5; cont++){
        // leitura
        let idade = Number(prompt(`Informe idade`))
        let peso = Number(prompt(`Informe peso`))
        let altura = Number(prompt(`Informe altura`))
        let olhos = prompt(`Informe cor dos olhos:  A - azul, P - preto, V - verde e C - castanho`).toUpperCase()
        let cabelos = prompt(`Informe cor dos cabelos:  P - preto, C - castanho, L - louro e R - ruivo`).toUpperCase()
        // compara
        if ((idade > 50) && (peso < 60)){
            item1++
        }
        if (altura < 1.50){
            somaItem2 = somaItem2 + idade
            qtdItem2++ 
        }
        if (olhos == "A"){
            item3++
        }
        if (cabelos == "R") && (olhos != "A"){
            item4++
        }
    }
    let result = result + "Item 1: " + item1
    result += "<br/> Item 2 " + somaItem2/qtdeItem2
    result += "<br/> Item 3 " + item3/5*100
    result += "<br/> Item 4 " + item4
    document.getElementById("result").innerHTML = result
}