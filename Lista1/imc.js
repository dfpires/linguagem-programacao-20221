function calculaImc(){
    // recupera os dados digitados pelo usuário
    // JS é não tipado => não se define o tipo da variável
    let peso = document.getElementById("peso").value
    let altura = document.getElementById("altura").value
    // calcular o IMC
    let imc = (peso / (altura * altura))
    // mostra o resultado para o usuário
    document.getElementById("imc").innerHTML = "O IMC é " + imc.toFixed(2) // duas casas depois da vírgula
    if (imc < 18.5){
        alert("Magreza")
    }
    else if ((imc >= 18.5) && (imc < 25)){
        alert("Normal")
    }
    else if ((imc >=25) && (imc < 30)) {
        alert("Sobrepeso")
    }
    else if ((imc >= 30) && (imc < 40)){
        alert("Obesidade")
    }
    else {
        alert("Obesidade grave")
    }
}