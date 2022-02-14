function calcular(){
    // obter dados
    let salario = Number(document.getElementById("salario").value)
    let vendas = Number(document.getElementById("vendas").value)
    let percentual = Number(document.getElementById("percentual").value)
    // calcular comissão e total
    let comissao = vendas*percentual/100
    let total = salario + comissao
    // saída dos dados
    document.getElementById("total").innerHTML = " O valor da comissão é " + comissao + " e o valor total é " + total
}