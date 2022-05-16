function mediaIdade(){
    let soma = 0
    let vetor = [] // cria um vetor -> lista -> array
   
    for(let i = 0; i < 10; i++){
        vetor.push(Number(prompt(`Informa a idade ${i+1}`)))
        soma = soma + vetor[i] 
    }
    let media = soma / 10
    
    // calcula e mostra a maior idade
    // percorre o vetor
    let maiorIdade = vetor[0] // assumo que a maior idade é a primeira
    let menorIdade = vetor[0]
    for(let i=1;i<vetor.length;i++){
        if (vetor[i] > maiorIdade){
            maiorIdade = vetor[i] // atualiza a maiorIdade
        }
        if (vetor[i] < menorIdade){
            menorIdade = vetor[i]
        }
    }
    document.getElementById(`result`).innerHTML = `A Média é ${media} e Maior é ${maiorIdade} e Menor é ${menorIdade}`
}