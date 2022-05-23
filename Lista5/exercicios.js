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
    // cria um vetor
    let vetor = []
    // entrada de dados
    for(let i=0;i<5;i++){
        // cria o objeto
        let objeto = new Object()
        objeto.sexo = prompt(`Informe o sexo: M para masculino e F para feminino do habitante ${i+1}`).toUpperCase()
        objeto.altura = Number(prompt(`Informe altura do habitante em metros usando . ao invés de , ${i+1}`))
        objeto.idade = Number(prompt(`Informe idade do habitante ${i+1}`))
        objeto.olhos = prompt(`Informe cor dos olhos: A - azul, V - verde e C - castanho do habitante ${i+1}`).toUpperCase()
        // adiciona o objeto no vetor
        vetor.push(objeto)
    }
    let somaIdade = 0
    let contaIdade = 0
    let maiorIdade = vetor[0].idade // assumo que a maior idade é a primeira
    let qtde = 0
    let qtdeH = 0 
    for(let i=0;i<5;i++){
        if (vetor[i].olhos == 'C' && vetor[i].altura > 1.60){
            somaIdade = somaIdade + vetor[i].idade
            contaIdade++
        }
        if (vetor[i].idade > maiorIdade){
            maiorIdade = vetor[i].idade
        }
        if ((vetor[i].sexo == 'F' && vetor[i].idade > 20 && vetor[i].idade <= 45) || (vetor[i].sexo == 'F' && vetor[i].olhos == 'V' && vetor[i].altura < 1.70)){
            qtde++
        }
        if (vetor[i].sexo == 'M'){
            qtdeH++
        }
    }
    document.getElementById("result3").innerHTML = `A média de idade das pessoas com olhos castanho e altura maior 1.60 é ${somaIdade/contaIdade} <br/> A maior idade é ${maiorIdade} <br/> Qtde mulheres entre 20 e 45 anos ou que possuem olhos verdes e altura < 1.70 ${qtde} <br/> Percentual de homens ${(qtdeH/vetor.length)*100}`
}

function exe6(){
    let vetorContas = [] // vetor de contas
    let vetorClientes = [] // vetor de clientes
    let nroCliente = Number(prompt(`Informe número do cliente da conta`))
    do {
        let objetoConta = new Object()
        objetoConta.nroCliente = nroCliente
        objetoConta.nroConta = Number(prompt(`Informe número da conta`))
        objetoConta.saldo = Number(prompt(`Informe saldo da conta`))
        // verifica se vai ser preciso criar o cliente
        // vamos percorrer o vetor de clientes
        let achou = false // inicialmente, não encontramos o cliente
        for(let i=0;i<vetorClientes.length;i++){
            if (objetoConta.nroCliente == vetorClientes[i].nroCliente){
                achou = true // encontrei
                break // pára de procurar
            }
        }
        if (!achou){ // precisamos cadastrar cliente
            let objetoCliente = new Object()
            objetoCliente.nroCliente = objetoConta.nroCliente
            objetoCliente.nome = prompt(`Informe nome do cliente`)
            objetoCliente.telefone = Number(prompt(`Informe telefone do cliente`))
            objetoCliente.endereco = prompt(`Informe endereço do cliente`)
            // insere objeto no vetor
            vetorClientes.push(objetoCliente)
            alert(`Cliente cadastrado com sucesso`)
        }
        // adiciona objeto dentro do vetor
        vetorContas.push(objetoConta)
        alert(`Conta cadastrada com sucesso`)
        nroCliente = Number(prompt(`Vamos criar outra conta. Digite número do cliente ou zero para encerrar`))
    }
    while (nroCliente != 0)
    let result = ""
    for(let i=0;i < vetorContas.length;i++){
        result += `Nro Cliente: ${vetorContas[i].nroCliente} Nro Conta: ${vetorContas[i].nroConta} e Saldo: ${vetorContas[i].saldo} <br/>`
    }
    document.getElementById("result6").innerHTML = result
}

function extra(){
    // declarando os vetores
    let vetCarros = []
    let vetClientes = []
    let codCliente = Number(prompt(`Informe código do cliente dono do carro`))
    do {
        let objetoCarro = new Object()
        objetoCarro.codCliente = codCliente
        objetoCarro.marca = prompt(`Informe marca do carro`)
        objetoCarro.modelo = prompt(`Informe modelo do carro`)
        objetoCarro.placa = prompt(`Informe placa do carro`)
        let achou = false // não encontrou o cliente cadastrado
        for(let i=0;i<vetClientes.length;i++){
            if (vetClientes[i].codCliente == codCliente){
                achou = true
                break // pára de procurar
            }
        }
        if (!achou){
            let objetoCliente = new Object()
            objetoCliente.codCliente = codCliente
            objetoCliente.nome = prompt(`Informe nome do cliente`)
            objetoCliente.cpf = prompt(`Informe cpf do cliente`)
            vetClientes.push(objetoCliente) // insere no vetor de clientes
            alert(`Cliente inserido com sucesso`)
        }
        vetCarros.push(objetoCarro) // insere no vetor de carros
        alert(`Carro inserido com sucesso`)
        codCliente = Number(prompt(`Informe novo código do cliente. Digite 0 para encerrar`))
 
    }
    while(codCliente != 0)
    let result = "" 
    for(let i=0;i < vetCarros.length;i++){
        result += `Cod Cliente: ${vetCarros[i].codCliente} Marca: ${vetCarros[i].marca}, Modelo ${vetCarros[i].modelo} <br/>`
    }
    document.getElementById("resultExtra").innerHTML = result
}





