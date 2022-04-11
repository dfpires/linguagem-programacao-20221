function calcular(){
    let opcao // opção selecionada pelo usuário
    let salario // salário
    let novo // novo salário
    let ferias // férias
    let meses // número de meses trabalhado
    let decimoTerceiro // décimo terceiro
    do {
        opcao = Number(prompt(`Digite \n 1. Novo salário \n 2. Férias \n 3. Décimo terceiro \n 4. Sair`))
        switch(opcao){
            case 1: salario = Number(prompt(`Informe o salário`))
                    if (salario < 210){
                        novo = salario + (salario*15/100)
                    }
                    else if ((salario >=210) && (salario <=600)){
                        novo = salario + (salario*10/100)
                    }
                    else {
                        novo = salario + (salario*5/100)
                    }
                    // ES 6 (2015) - template string
                    alert(`Novo salário ${novo} `)
                    break
            case 2: salario = Number(prompt(`Informe o salário`))
                    ferias = salario + (salario/3)
                    alert(`Salário das férias ${ferias}`)
                    break
            case 3: salario = Number(prompt(`Informe o salário`))
                    do {
                        meses = Number(prompt(`Informe número de meses`))
                    }
                    while (meses < 0 || meses > 12) 
                    decimoTerceiro = (salario*(meses/12))
                    alert(`Décimo terceiro é ${decimoTerceiro}`)
                    break
            case 4: alert(`Vai sair`)
                    break
            default: alert(`Opção inválida`)
        }
    }
    while (opcao != 4)
}