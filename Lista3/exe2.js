function calcular(){

    let preco // preço do ingresso - 5.0 até 1.0
    let qtde // qtde de ingressos - 120 até 328
    let lucro // lucro do espetáculo

    // calcular
    preco = 5.0
    qtde = 120
    let result = "" // guarda e acumula o resultado
    let maiorLucro = 0
    while (preco >= 1){
        lucro = (preco * qtde) - 200
        if (lucro > maiorLucro){
            maiorLucro = lucro
        }
        result = result + "<tr> <td>R$" + preco.toFixed(2) + 
        "</td> <td> " + qtde + "</td><td>R$200.00</td><td>R$ " + 
        lucro.toFixed(2) +  "</td></tr>"
        qtde = qtde + 26
        preco = preco - 0.50
    }
    // saída
    document.getElementById("result").innerHTML = result
    document.getElementById("maiorLucro").innerHTML = 
    "R$" + maiorLucro.toFixed(2)
    console.log("R$" + maiorLucro.toFixed(2))
}