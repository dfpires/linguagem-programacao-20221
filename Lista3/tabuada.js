function  calcular(){
    // recupera os dados
    let numero = Number(document.getElementById("numero").value)
    let i = 0
    let saida = ""
    while (i<=10){
        saida += "<br/> " + numero + " x " + i + " = " + (numero*i)
        i++
    }
    document.getElementById("saida").innerHTML = saida
}