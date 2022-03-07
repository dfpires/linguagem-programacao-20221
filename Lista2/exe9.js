function calcular(){
    // entrada de dados
    let saldo = Number(document.getElementById("saldo").value)
   
    // processamento
    let credito
    if (saldo > 4000){
            credito = 30*saldo/100
    }
    else if ((saldo <= 4000) && (saldo > 3000)){
            credito = 25*saldo/100
    }
    else if ((saldo <= 3000) && (saldo > 2000)){
            credito = 20*saldo/100
    }
    else {
            credito = 10*saldo/100
    }

    // saida
    document.getElementById("resultado").innerHTML = 
    "O valor do crédito é R$" + credito.toFixed(2) + " e o saldo " + saldo
}