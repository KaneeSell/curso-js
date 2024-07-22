let vetor = []
function contarde10A2(vetor){
    let valorForaDoVetor = []; let vetorEntre10E20 = []
    for(let i = 0; i < vetor.length; i++){
        if(vetor[i] >= 10 && vetor[i] <= 20){ vetorEntre10E20.push(vetor[i]) }
        else{ valorForaDoVetor++}
    }
    if(vetorEntre10E20.length > 0){
        console.log(`Quantidade fora do Vetor = ${valorForaDoVetor}\nNúmeros entre 10 e 20 = ${vetorEntre10E20}`)
    } else { console.log(`Não existe valor entre 10 e 20 dentro do vetor!`) }
}
for(let i = 1; i <= 100; i++){
vetor.push(i)
}
contarde10A2(vetor)