function paresImpares(numeros){
if(numeros.length > 1){
    let i, impares = 0
    let pares = 0
 for(i = 1; numeros.length > i; i++){ if(numeros[i] % 2 == 0){ pares++ } else{ impares++ } }
console.log(`Quantidade de Pares = ${pares}\nQuantidade de Impares = ${impares}`)
}
else { console.log('Não entregue um vetor') }}
let numeros = [10, 2, 6, 5, 8 , 9, 11, 16, 17, 11]
paresImpares(numeros)