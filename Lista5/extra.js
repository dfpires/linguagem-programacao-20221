function extra(){

    // cria o vetor
    let alunos = []
    for(let i=0;i<3;i++){
        // cria um objeto
        let aluno = new Object()
        // entrada de dados
        aluno.nome = prompt(`Informe o nome do aluno`)
        aluno.ra = Number(prompt(`Informe o RA do aluno`))
        aluno.curso = prompt(`Informe o curso do aluno`)
        aluno.disciplina = prompt(`Informe disciplina do aluno`)
        aluno.n1 = Number(prompt(`Informe nota do 1o. bimestre`))
        aluno.n2 = Number(prompt(`Informe nota do 2o. bimestre`))
        // calcula a média
        aluno.media = (aluno.n1 + aluno.n2) / 2
        // adiciona objeto no vetor
        alunos.push(aluno)
    }

    for(let i=0;i<3;i++){
        if (alunos[i].media >= 6){
            document.getElementById("result").innerHTML += `${alunos[i].nome} com RA ${alunos[i].ra} aprovado com ${alunos[i].media} <br/>`
        }
        else{
            alunos[i].sub = Number(prompt(`Informe a nota da sub do aluno ${alunos[i].nome}`))
            if (alunos[i].n1 < alunos[i].n2){
                alunos[i].n1 = alunos[i].sub
            }       
            else {
                alunos[i].n2 = alunos[i].sub
            }
            alunos[i].media = (alunos[i].n1 + alunos[i].n2) / 2
            if (alunos[i].media >=6 ){
                document.getElementById("result").innerHTML += `${alunos[i].nome} com RA ${alunos[i].ra} aprovado com ${alunos[i].media} <br/>`
            }
            else {
                document.getElementById("result").innerHTML += `${alunos[i].nome} com RA ${alunos[i].ra} reprovado com ${alunos[i].media} <br/>`
            }
        }
    }
}