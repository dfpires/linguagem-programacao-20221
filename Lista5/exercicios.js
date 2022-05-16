function exe2(){
    // declaração do vetor
    let vetor = []
    // entrada de dados
    for(let i=0;i<5;i++){
        let objeto = new Object()
        objeto.salario = Number(prompt(`Informe salário`))
        objeto.idade = Number(prompt(`Informe idade`))
        objeto.filhos = Number(prompt(`Informe número de filhos`))
        objeto.sexo = prompt(`Informe M para masculino e F para feminino`).toUpperCase()
        // insere objeto no vetor
        vetor.push(objeto)
    }
    // processamento - a partir de agora os dados são obtidos apenas no vetor
    let somaSalario = 0
    let somaFilhos = 0
    let maiorSalario = vetor[0].salario // inicia o maior salário com o primeiro
    let qtde = 0 // qtde de mulheres com salário > 1000
    for(let i=0;i<5;i++){
        // soma os salários
        somaSalario += vetor[i].salario
        // soma os filhos
        somaFilhos += vetor[i].filhos
        // maior salário
        if (vetor[i].salario > maiorSalario){
            maiorSalario = vetor[i].salario
        }
        if (vetor[i].sexo == 'F' && vetor[i].salario > 1000){
            qtde++
        } 
    }
 
    document.getElementById("result").innerHTML = `A média dos salários é de ${somaSalario/vetor.length}, a média dos filhos é de ${somaFilhos/vetor.length}, o maior salário é ${maiorSalario} e % de mulheres com salário superior a 1000 é ${qtde/vetor.length*100}`
}

function exe3(){
    
}