function principal(){
    let opcao
    let vetor = []
    let matriz = []
    do {
        opcao = Number(prompt(`1. Carros 2. Avaliações 3. Média 4. Mais avaliado 5. Sair`))
        switch(opcao){
            case 1: cadastraCarros(vetor)
                    break
            case 2: cadastraAvaliacoes(matriz, vetor)
                    break
            case 3: consultaMedias(matriz, vetor)
                    break
            case 4: consultaMelhorAvaliado(matriz, vetor)
                    break
            case 5: alert(`Programa será encerrado`)
        }
    }
    while(opcao != 5)
}
function cadastraCarros(vetor){
    for(let i=0;i<3;i++){
        vetor.push(prompt(`Informe o modelo do carro`))
    }
}
function cadastraAvaliacoes(matriz, vetor){
    for(let i=0;i<vetor.length;i++){
        matriz[i] = []
        for(let j=0;j<4;j++){
            matriz[i][j] = Number(prompt(`Informe avaliação ${j+1} do carro ${vetor[i]}`))
        }
    }
}
function consultaMedias(matriz, vetor){
    let result = ``
    for(let i=0;i<vetor.length;i++){
        let soma = 0
        for(let j=0;j<4;j++){
            soma += matriz[i][j]
        }
        result += (`\n A média do carro ${vetor[i]} é ${soma/4}`)
    }
    alert(result)
}
function consultaMelhorAvaliado(matriz, vetor){
    let maiorAvaliacao = matriz[0][2] // linha 0 e coluna 2
    let posicaoMaior = 0
    for(let i=0;i<vetor.length;i++){ // percorre apenas a linha
        // coluna é fixa
        if (matriz[i][2] > maiorAvaliacao){
            maiorAvaliacao = matriz[i][2]
            posicaoMaior = i
        }
    }
    alert(`O carro mais bem avaliado foi ${vetor[posicaoMaior]} com nota ${maiorAvaliacao}`)

}