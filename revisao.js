function principal(){
    let opcao
    let vetor = [] // criando o vetor
    do {
        opcao = Number(prompt(`1. Cadastrar 2. Todos 3. Média 4. Mais novo 5. Sair`))
        switch(opcao){
            case 1: cadastra(vetor)// passa um vetor como parâmetro
                    break
            case 2: consultaTodos(vetor)
                    break
            case 3: consultaMedia(vetor)
                    break
            case 4: consultaMaisNovo(vetor)
                    break
            case 5: alert(`Programa será encerrado`)
        }
    }
    while(opcao != 5)
} // encerra a função principal
function cadastra(vetor){ // função recebe um vetor como parâmetro
    let objeto = new Object()
    objeto.preco = Number(prompt(`Informe o preço`))
    objeto.marca = prompt(`Informe marca`)
    objeto.modelo = prompt(`Informe modelo`)
    objeto.ano = Number(prompt(`Informe ano`))
    // insere objeto no vetor
    vetor.push(objeto)
} // encerra a função de cadastro
function consultaTodos(vetor){ // função recebe um vetor como parâmetro
    let result = ``
    for(let i=0;i<vetor.length;i++){
        result += `\n Marca: ${vetor[i].marca} Modelo: ${vetor[i].modelo} Ano: ${vetor[i].ano} Preço: ${vetor[i].preco}`
    }
    alert(result)
}
function consultaMedia(vetor){
    let soma = 0
    for(let i=0;i<vetor.length;i++){
        soma += vetor[i].preco
    }
    alert(`A média de preços dos carros é ${soma/vetor.length}`)
}
function consultaMaisNovo(vetor){
    let ano = vetor[0].ano // guarda o ano mais novo, iniciando pelo 1o. carro
    let carroMaisNovo = vetor[0]
    for(let i=0;i<vetor.length;i++){
        if (vetor[i].ano > ano){
            ano = vetor[i].ano
            carroMaisNovo = vetor[i]
        }
    }
    alert(`Carro mais novo: Ano ${carroMaisNovo.ano} Marca ${carroMaisNovo.marca} Modelo ${carroMaisNovo.modelo} Preço ${carroMaisNovo.preco}`)
}