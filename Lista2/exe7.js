function calcular(){
    // entrada de dados
    let salario = Number(document.getElementById("salario").value)
   
    // processamento
    let resultado
    if (salario < 5000){
            resultado = salario + ((salario*30)/100)
    }
    else {
            resultado = "Não tem direito a aumento"
    }
    // saida
    document.getElementById("resultado").innerHTML = resultado
}