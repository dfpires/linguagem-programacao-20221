function calcular(){
    // obter os dados
    let idade = Number(document.getElementById("idade").value)
    let peso = Number(document.getElementById("peso").value)
    // calcular
    if  ((idade >=0) && (idade < 20)){
        if ((peso >= 0) && (peso < 60)){
            document.getElementById("saida").innerHTML = "Risco 9"
        }
        else if ((peso >= 60) && (peso <= 90 )){
            document.getElementById("saida").innerHTML = "Risco 8"
        }
        else if (peso > 90){
            document.getElementById("saida").innerHTML = "Risco 7"
        }
        else {
            document.getElementById("saida").innerHTML = "Peso inválido"
        }
    }
    else if (idade >=20 && idade <=50){
            if ((peso >= 0) && (peso < 60)){
                document.getElementById("saida").innerHTML = "Risco 6"
            }
            else if (peso >= 60 && peso <= 90 ){
                document.getElementById("saida").innerHTML = "Risco 5"
            }
            else if (peso > 90){
                document.getElementById("saida").innerHTML = "Risco 4"
            }
            else {
                document.getElementById("saida").innerHTML = "Peso inválido"
            }
    }
    else if (idade > 50){
            if ((peso >= 0) && (peso < 60)){
                document.getElementById("saida").innerHTML = "Risco 3"
            }
            else if (peso >= 60 && peso <= 90 ){
                document.getElementById("saida").innerHTML = "Risco 2"
            }
            else if (peso > 90){
                document.getElementById("saida").innerHTML = "Risco 1"
            }
            else {
                document.getElementById("saida").innerHTML = "Peso inválido"
            }
    }
    else {
        document.getElementById("saida").innerHTML = "Idade inválida"
    }
}