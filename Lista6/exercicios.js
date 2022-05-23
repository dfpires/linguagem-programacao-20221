function exe0(){
    let vetAlunos = [] // declara vetor
    let matNotas = [] // declara matriz
    for(let i=0;i<3;i++){
        vetAlunos.push(prompt(`Informe nome do aluno`))
        matNotas[i] = [] // cria vetor na posição i da matriz
        for(let j=0;j<4;j++){
            matNotas[i][j] = Number(prompt(`Informe nota ${j+1} do ${vetAlunos[i]}`))
        }
    }
    // mostra o resultado
    let result = ''
    let soma
    for(let i=0;i<3;i++){ // para cada linha
        result += `<br/> Nome: ${vetAlunos[i]} Notas: `
        soma = 0 // aluno novo
        for(let j=0;j<4;j++){ // para cada coluna
            result += ` ${matNotas[i][j]}`
            soma = soma + matNotas[i][j]
        }
        result += ` Média: ${soma/matNotas[i].length}`
    }
    
    let maior
    for(let j=0;j<4;j++){// para cada coluna
        // nova coluna
        maior = 0
        for(let i=0;i<3;i++){// para cada linha
            if (matNotas[i][j] > maior){
                maior = matNotas[i][j]
            }
        }
        result += `<br/> Maior nota da prova ${j+1} é ${maior}`
    }

    document.getElementById("result").innerHTML = result
}