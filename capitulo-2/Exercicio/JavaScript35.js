let vetorPilha = []; let vetorAdiociona = []
function adicionaVetor(vetorPilha, vetorAdiociona){
    let vetorTotal = []
    for(let i = 0; i < vetorPilha.length; i++){
        vetorTotal.push(vetorPilha[i])
    }
    for(let i = 0; i < vetorAdiociona.length; i++){
        vetorTotal.push(vetorAdiociona[i])
    }
    console.log(`A junção do vetor [${vetorPilha}] e [${vetorAdiociona}] é [${vetorTotal}]`)
}
adicionaVetor([1, 2, 3], [4, 5, 6])