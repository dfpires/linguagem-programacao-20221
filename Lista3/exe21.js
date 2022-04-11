function calcular(){
    // vai votar pelo menos uma vez
    let candidato
    do {
        candidato = Number(prompt(`Informe o candidato`))
    }
    while (candidato == 0)
    let qtdeC1 = 0, qtdeC2 = 0, qtdeC3 = 0, qtdeC4 = 0
    let qtdeNulos = 0, qtdeBranco = 0
    do {
        switch(candidato){
            case 1: qtdeC1++; break
            case 2: qtdeC2++; break
            case 3: qtdeC3++; break
            case 4: qtdeC4++; break
            case 5: qtdeNulos++; break
            case 6: qtdeBranco++; break
            case 0: alert(`Esta opção encerra o programa`); break
            default: alert(`Opção inválida`)
        }
        candidato = Number(prompt(`Informe outro candidato. Digite 0 para encerrar`))
    }
    while(candidato != 0)
    // calcula o total de votos
    let total = qtdeC1 + qtdeC2 + qtdeC3 + qtdeC4 + qtdeBranco + qtdeNulos
    document.getElementById("result").innerHTML = `Votos no cand1 é ${qtdeC1} <br/> Votos no cand2 ${qtdeC2} <br/> Votos no cand3 ${qtdeC3} <br/> Votos no cand4 ${qtdeC4} <br/> Votos nulos ${qtdeNulos} <br/> Votos em branco ${qtdeBranco} <br/> % votos em branco ${qtdeBranco/total*100} <br/> % de votos nulos ${qtdeNulos/total*100}`
}