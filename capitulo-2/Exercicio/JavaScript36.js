let vetor = []; let inteiro = 0
function multiplicaVetor(vetor, inteiro){
    if(vetor.length > 0){let vetorTotal=[];for(let i=0;i<vetor.length;i++){vetorTotal.push(vetor[i] * inteiro)}
    console.log(`Resultado da multiplicação de [${vetor}] por ${inteiro} é [${vetorTotal}]`)}
    else{console.log('Vetor Vazio!')}
}
function multiplicaVetorMaior5(vetor, inteiro){
    if(vetor.length > 0){let vetorTotal=[];for(let i=0;i<vetor.length;i++){if(vetor[i] > 5){vetorTotal.push(vetor[i] * inteiro)}}
    console.log(`Resultado da multiplicação de [${vetor}] por ${inteiro} é [${vetorTotal}]`)}
    else{console.log('Vetor Vazio!')}
}
vetor = [1, 2, 3, 6, 6];inteiro = 2
multiplicaVetor(vetor, inteiro)
multiplicaVetorMaior5(vetor, inteiro)