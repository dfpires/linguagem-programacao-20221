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

function exe1(){
    let mat = [] // declaração da matriz
    for(let i=0;i<3;i++){
        mat[i] = [] // alocando espaço para cada linha da matriz
        for(let j=0;j<5;j++){
            mat[i][j] = Number(prompt(`Informe um número da posição ${i+1} x ${j+1}`))
        }
    }
    // processamento
    let contador = 0
    for(let i =0; i<3; i++){
        for(let j=0;j<5;j++){
            if (mat[i][j] >= 15 && mat[i][j] <= 20){
                contador++
            }
        }
    }
    document.getElementById("exe1").innerHTML = `A qtde é ${contador}`
}
function exe2(){
    let mat = [] // declaração da matriz
    for(let i=0;i<2;i++){
        mat[i] = [] // alocando espaço para cada linha da matriz
        for(let j=0;j<4;j++){
            mat[i][j] = Number(prompt(`Informe um número da posição ${i+1} x ${j+1}`))
        }
    }
    // processamento
    let contador
    let result = ''
    let contaPares = 0
    let somaPares = 0 
    for(let i=0;i<2;i++){
        contador = 0 // vamos iniciar uma nova linha
        for(let j=0;j<4;j++){
            if (mat[i][j] >= 12 && mat[i][j]<=20){
                contador++
            }
            if (mat[i][j] % 2 == 0){
                contaPares++ // conta quantos pares temos
                somaPares += mat[i][j] // acumula os pares
            }
        }
        // terminamos de ler a linha
        result += `<br/> A qtde de números entre 12 e 20 na linha ${i+1} é ${contador}`
    }
    document.getElementById("exe2").innerHTML = result + `<br/> A média dos pares é ${somaPares/contaPares}`
}

function exe4(){
    let mat = [] // matriz de notas
    let vet = [] // vetor de nomes
    for(let i=0;i<5;i++){
        vet.push(prompt(`Informe o nome do aluno`))
        mat[i] = []
        for(let j=0;j<5;j++){
            mat[i][j] = Number(prompt(`Informe nota ${j+1} do aluno ${vet[i]}`))
        }
    }
    // processamento
    let somaNotas
    let result = ''
    let somaClasse = 0
    for(let i=0;i<5;i++){
        somaNotas = 0 // iniciaremos um aluno novo
        for(let j=0;j<5;j++){
            somaNotas += mat[i][j]
            somaClasse += mat[i][j]
        }
        // acabou aluno
        if (somaNotas/5 >= 6){
            result += `<br/> O aluno ${vet[i]} foi aprovado com média ${somaNotas/5}`
        }
        else if (somaNotas/5 >= 3){
            result += `<br/> O aluno ${vet[i]} ficou de exame com média ${somaNotas/5}`
        }
        else {
            result += `<br/> O aluno ${vet[i]} foi reprovado com média ${somaNotas/5}`
        }
    }
    document.getElementById("exe4").innerHTML = result + `<br/> A média da classe é ${somaClasse / 25}`
}

function exe5(){
    let mat = []
    let vet = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"]
    for(let i=0;i<12;i++){
        mat[i] = []
        for (let j=0;j<4;j++){
            mat[i][j] = Number(prompt(`Informe valor do mês ${vet[i]} da semana ${j+1}`))
        }
    }
    let totalMes
    let result = ''
    for(let i=0;i<12;i++){
        totalMes = 0 // início de leitura do mês
        for(let j=0;j<4;j++){
            totalMes += mat[i][j]
        }
        // fim de leitura do mês
        result += `<br/> Total vendido no mês ${vet[i]} foi ${totalMes}`
    }
    let totalSemana
    let totalAno = 0
    for(let j=0;j<4;j++){
        totalSemana = 0
        for(let i=0;i<12;i++){
            totalSemana += mat[i][j]
            totalAno += mat[i][j]
        }
        result += `<br/> Total vendido na semana ${j+1} foi ${totalSemana}`
    }
    document.getElementById("exe5").innerHTML = `${result} <br/> Total vendido no ano ${totalAno}`
}