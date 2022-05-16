function exe3(){
    // entrada de dados
    let vetCodigos = [] // declaração de vetor
    let vetEstoque = [] // declaração de vetor
    for(let i=0;i<5;i++){
        // insere o código no vetor
        vetCodigos.push(Number(prompt(`Informe código do produto ${i+1}`)))
        // insere a qtde no vetor
        vetEstoque.push(Number(prompt(`Informe qtde do produto ${i+1}`)))
    }

    // tentar realizar uma compra
    let cliente = Number(prompt(`Informe código do cliente`))
    do {
        let codigo = Number(prompt(`Informe código do produto comprado`))
        let qtde = Number(prompt(`Informe qtde do produto comprado`))
        // verifica se o produto existe -> vamos percorrer o vetor
        let achei = false // não achei
        let posicao // posição do produto encontado
        for(let i=0;i<vetCodigos.length;i++){
            if (codigo == vetCodigos[i]){
                achei = true
                posicao = i
                break // sai do for
            }
        }
        if (!achei){ // não achei
            alert(`Código inexistente`)
        }
        else {
            // vamos verificar o estoque
            if (vetEstoque[posicao] - qtde < 0){
                alert(`Não temos estoque suficiente desta mercadoria`)
            }
            else {
                vetEstoque[posicao] = vetEstoque[posicao] - qtde // atualiza estoque
                alert(`Pedido atendido. Obrigado, volte sempre`)
                alert(`Estoque atualizado ${vetEstoque}`)
            }
        }
        cliente = Number(prompt(`Informe código de outro cliente. Digite 0 para encerrar`))
    }
    while (cliente != 0)
}

function exe4(){
    let vet = [] // vetor contendo os números
    let vetPosicoes = [] // vetor contendo as posições do número 30
    // entrada de dados
    for(let i=0;i<10;i++){
        vet.push(Number(prompt(`Informe um número`)))
    }
    // percorre vetor para encontrar o 30
    for(let i=0;i<10;i++){
        if (vet[i] == 30){
            vetPosicoes.push(i) // guarda no vetor a posição i
        }
    }
    if (vetPosicoes.length == 0){
        alert(`Nenhum número 30 foi encontrado`)
    }
    else {
        alert(`Foram encontrados números 30 nas posições ${vetPosicoes}`)
    }
}

function exe5(){
    let vetLogica = []
    let vetLinguagem = []
    let vetInterseccao = []

    // entrada de dados
    for(let i=0;i<10;i++){
        vetLogica.push(Number(prompt(`Informe código do aluno que faz disciplina de lógica`)))
    }
    for(let i=0;i<5;i++){
        vetLinguagem.push(Number(prompt(`Informe código do aluno que faz disciplina de linguagem`)))
    }
    // encontrar a intersecção
    for(let i=0;i<10;i++){
        for(let j=0;j<5;j++){
            if (vetLogica[i] == vetLinguagem[j]){
                vetInterseccao.push(vetLogica[i])
            }
        }
    }
    alert(`O vetor intersecção é ${vetInterseccao}`)
}

function exe6(){
    let vetVendas = []
    let vetNomes = []
    let vetComissoes = []
    let vetReceber = []
    // entrada de dados
    for(let i=0;i<5;i++){
        vetNomes.push(prompt(`Informe nome do vendedor`))
        vetVendas.push(Number(prompt(`Informe total de vendas de ${vetNomes[i]}`)))
        vetComissoes.push(Number(prompt(`Informe valor de comissão de ${vetNomes[i]}`)))
         // calcula valor a receber
         vetReceber[i] = vetVendas[i] * vetComissoes[i] / 100
    }
    // processamento
    let totalVendas = 0
    let maiorReceber = vetReceber[0]
    let menorReceber = vetReceber[0]
    let nomeMaior = vetNomes[0]
    let nomeMenor = vetNomes[0]

    for(let i=0;i<5;i++){
        // acumulando o valor das vendas
        totalVendas = totalVendas + vetVendas[i]
        if (vetReceber[i] > maiorReceber){
            maiorReceber = vetReceber[i]
            nomeMaior = vetNomes[i]
        }    
        if (vetReceber[i] < menorReceber){
            menorReceber = vetReceber[i]
            nomeMenor = vetNomes[i]
        }
    }
    alert(`Maior valor a receber ${maiorReceber} e quem receberá ${nomeMaior}`)
    alert(`Menor valor a receber ${menorReceber} e quem receberá ${nomeMenor}`)
    alert(`Total de vendas ${totalVendas}`)
    alert(` Valores a receber ${vetNomes} - ${vetReceber}`)
}




