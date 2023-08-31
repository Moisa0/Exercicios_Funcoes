const prova = {
    aluno: "João",
    materia: "Português",
    valor: 10,
    questoes: [
        {
            resposta: "a",
            correta: "b"
        },
        {
            resposta: "b",
            correta: "c"
        },
        {
            resposta: "e",
            correta: "b"
        },
        {
            resposta: "a",
            correta: "b"
        },
        {
            resposta: "c",
            correta: "b"
        }
    ]
};

function corrigirProva(simulado){
    let nota = 0
    for(alternativas of simulado.questoes){
        if(alternativas.resposta === alternativas.correta){
            nota += 2
        }else{
            nota += 0
        }
    }if(nota === 0){
        console.log(`O aluno(a) ${simulado.aluno} acertou nenhuma questão e obteve nota 0`)
    }else if(nota === 2){
        console.log(`O aluno(a) ${simulado.aluno} acertou 1 questão e obteve nota ${nota}`)
    }else{
        console.log(`O aluno(a) ${simulado.aluno} acertou ${nota/2} questões e obteve nota ${nota}`)
    }

}

corrigirProva(prova)