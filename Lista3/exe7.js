function calcular(){
    let qtdeIdade50 = 0
    let somaAltura = 0
    let qtdeSomaAltura = 0
    let qtdePeso40 = 0
    for(let cont=1;cont <= 5; cont++){
        // leitura dos dados
        let idade = Number(prompt(`Informe idade`))
        let altura = Number(prompt(`Informe altura`))
        let peso = Number(prompt(`Informe peso`))
        // comparações
        if (idade > 50){
            qtdeIdade50++ // incrementa 1
        }
        else if ((idade >= 10) && (idade <= 20)){
                somaAltura = somaAltura + altura // acumula
                qtdeSomaAltura++ // incrementa 1
        }
        if (peso < 40){
            qtdePeso40++ // incrementa 1
        }
    }
    let result = " Qtde pessoas idade > 50 " + qtdeIdade50
    result = result + "<br/> Média altura de idade entre 10 e 20 " + (somaAltura/qtdeSomaAltura)
    result = result + "<br/> % com peso < 40 " + (qtdePeso40/5*100)
    document.getElementById("result").innerHTML = result
}