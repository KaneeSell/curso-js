let vetorA = []; let vetorB = []
function trocarVetor(vetorA, vetorB){
    console.log(vetorA, vetorB)
    for(let i = 0;i < vetorA.length; i++){
        vetorA[i] = vetorB[i] ^ vetorA[i]
        vetorB[i] = vetorB[i] ^ vetorA[i]
        vetorA[i] = vetorB[i] ^ vetorA[i]
    }
    console.log(vetorA, vetorB)
}
vetorA = [1,2,3,4,5,6]
vetorB = [7,8,9,10,11,12]
trocarVetor(vetorA, vetorB)