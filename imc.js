function calculaImc(){
    // recupera os dados digitados pelo usuário
    // JS é não tipado => não se define o tipo da variável
    let peso = document.getElementById("peso").value
    let altura = document.getElementById("altura").value
    // calcular o IMC
    let imc = (peso / (altura * altura))
    // mostra o resultado para o usuário
    document.getElementbyId("imc").innerHTML = "O IMC é " + imc.toFixed(2) // duas casas depois da vírgula
}