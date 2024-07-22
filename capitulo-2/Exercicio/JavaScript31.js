let vetor = []
function contaNegativos(vetor){
    let negativos = 0
    if(vetor.length > 0){
        for(let i = 0; i < vetor.length; i++){
            if(vetor[i] < 0){negativos++}
        }
        console.log(`Contém ${negativos} números negativos.`)
    }
    else{console.log('Sem numero para ver se há negativos!')}
}
for(let i = -20; i < 10; i++){
    vetor.push(i)
}
contaNegativos(vetor)