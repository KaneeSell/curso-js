let vetorInteiro = []; let vetorString = []; let vetorDouble = [];
function calcularVetores(vetorInteiro, vetorString, vetorDouble){
    let stringPInt = []; let totalString = 0; let totalInteiro = 0; let totalDouble = 0; let total = []
    if(vetorString.length > 0){
        for(let i = 0; i < vetorString.length; i++){stringPInt.push(Number(vetorString[i]));totalString += stringPInt[i]}
    } else {console.log('Vetor String vazio!')}
    if(vetorInteiro.length > 0){
        for(let i = 0; i < vetorInteiro.length; i++){totalInteiro += vetorInteiro[i]}
    } else {console.log('Vetor Inteiro vazio!')}
    if(vetorDouble.length > 0){
        for(let i = 0; i < vetorDouble.length; i++){totalDouble += vetorDouble[i]}
    } else {console.log('Vetor Double vazio!')}
    for(let i = 0; i < vetorInteiro.length; i++){total.push(vetorInteiro[i] + stringPInt[i] + vetorDouble[i])}
    console.log(`Total soma dos vetores = ${total}\nTotal Vetor Inteiro = ${totalInteiro}\nTotal Vetor String = ${totalString}\nTotal Vetor Double = ${totalDouble}\nTotal Geral = ${totalInteiro + totalString + totalDouble}`)
} 
vetorInteiro = [1, 1, 1]
vetorString = ['1', '1', '1']
vetorDouble = [1.0, 1.0, 1.0]
calcularVetores(vetorInteiro, vetorString, vetorDouble)