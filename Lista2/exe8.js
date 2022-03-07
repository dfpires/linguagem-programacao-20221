function calcular(){
    // entrada de dados
    let salario = Number(document.getElementById("salario").value)
   
    // processamento
    let resultado
    let percentual
    if (salario <= 3000){
            percentual = 35
    }
    else {
            percentual = 15
    }
    resultado = salario + ((salario*percentual)/100)
    // saida
    document.getElementById("resultado").innerHTML = 
    "O percentual de aumento é " + percentual + " com salário final " + 
    resultado
}