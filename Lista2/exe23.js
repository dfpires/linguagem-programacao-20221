function calcular(){
    // obter os dados
    let codigo = Number(document.getElementById("codigo").value)
    let qtde = Number(document.getElementById("qtde").value)
    // calcular preço unitário
    let precoU
    if (codigo >=1 && codigo <=10){
        precoU = 10
    }
    else if (codigo >=11 && codigo <= 20){
        precoU = 15
    }
    else if (codigo >= 21 && codigo <= 30){
        precoU = 20
    }
    else if (codigo >= 31 && codigo <= 40){
        precoU = 30
    }
    else {
        document.getElementById("saida").innerHTML = "Código inválido"
        return // sai da função
    }
    // calcula preço total
    let precoT = precoU * qtde
    // valor do desconto
    let desconto
    if (precoT < 250){
        desconto = precoT * 5/100
    }
    else if (precoT >= 250 && precoT < 500){
        desconto = precoT * 10/100
    }
    else {
        desconto = precoT * 15/100
    }
    let precoF = precoT - desconto
    // saida
    document.getElementById("saida").innerHTML = "Preço unitário " + 
    precoU + " Preço Total " + precoT + " Desconto " + desconto + 
    "Preço Final " + precoF 
}