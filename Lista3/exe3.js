function calcular(){
    let idade, f1 = 0, f2 = 0, f3 = 0, f4 = 0, f5 = 0
    let contador = 1
    while (contador <= 8){
        idade = Number(prompt("Idade"))
        if ((idade >=0) && (idade <= 15)){
            f1++
        }
        else if ((idade > 15) && (idade <=30)){
            f2++
        }
        else if ((idade > 30) && (idade <=45)){
            f3++
        }
        else if ((idade > 45) && (idade <=60)){
            f4++
        }
        else if (idade > 60 ){
            f5++
        }
        contador++
    }
    document.getElementById("result").innerHTML = 
    " Faixa 1 " + f1 + " Faixa 2 " + f2 +
    " Faixa 3 " + f3 + " Faixa 4 " + f4 +
    " Faixa 5 " + f5 + "% faixa 1 " + f1/8*100 +
    " % faixa 5 " + f5/8*100
}