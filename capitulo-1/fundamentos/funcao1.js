//Função sem retorno
function imprimirSoma(a, b) {
    console.log(a + b)
}
imprimirSoma(2, 3) //Imprime resultado
imprimirSoma(2) //Resultado: NaN
imprimirSoma(2, 10, 4, 5, 6, 7, 8) //Imprime resultado
imprimirSoma() //Resultado: NaN

//Função com retorno
function soma(a, b = 0) {
    return a + b
}
console.log(soma(2,3)) //Imprime resultado
console.log(soma(2)) //Resultado: 2, usou b = 0 como valor de b
console.log(soma()) //Resultado: NaN
