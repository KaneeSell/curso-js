//armazenando uma funcao em uma variavel
const imprimirSoma = function (a, b) {
    console.log(a + b)
}
imprimirSoma(2, 3)

//armazenando uma funcao arrow em uma variavel(abreviado)
const soma = (a, b) => {
    return a + b
}
console.log(soma(2, 3))

//retorno implícito(bem abreviado)
const suvtracao = (a, b) => a - b
console.log(suvtracao(2, 3)) //Imprime resultado

const Imprime2 = a => console.log(a)

Imprime2('Legal!')