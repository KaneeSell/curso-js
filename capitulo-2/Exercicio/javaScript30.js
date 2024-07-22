let vetor = []
function valorMaiorEMenor(vetor){
    if(vetor.length > 0){
        let maior = vetor[0]; let menor = vetor[0];
        for(let i = 0; i <= vetor.length; i++){
            if(vetor[i] > maior){ maior = vetor[i] }
            if(vetor[i] < menor){ menor = vetor[i] }
        }
    console.log(`Valor maior = ${maior}\nValor menor = ${menor}`)
    }else{console.log('Vetor vazio')}
}
for(let i = 1; i <= 100; i++){
    vetor.push(i)
}
valorMaiorEMenor(vetor)