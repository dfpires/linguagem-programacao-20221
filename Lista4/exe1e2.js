function calcular(){
    let vetor = []
    let pares = []
    let impares = []
    let multiplos2 = [] // múltiplos de 2
    let multiplos3 = [] // múltiplos de 3
    let multiplos23 = [] // múltiplos de 2 e de 3

    // entrada de dados
    for(let i=0;i<6;i++){
        vetor.push(Number(prompt(`Informe um número `)))
    }
    // processamento -> percorrer o vetor
    for(let i=0;i<6i++){
        if (vetor[i] % 2 == 0) {// par
            pares.push(vetor[i])
        }
        else {
            impares.push(vetor[i])
        }
        if (vetor[i] % 2 == 0){
            multiplos2.push(vetor[i])
        }
        if (vetor[i] % 3 == 0){
            multiplos3.push(vetor[i])
        }
        if (vetor[i] % 2 == 0 && vetor[i] % 3 == 0){
            multiplos23.push(vetor[i])
        }
    }
    // saída
    document.getElementById("result").innerHTML = `Pares ${pares} e a sua qtde ${pares.length} - Ímpares ${impares} e a sua qtde ${impares.length}, Múltiplos de 2 ${multiplos2}, Múltiplos de3 ${multiplos3} e Múltiplos de 2 e 3 ${multiplos23}`
}