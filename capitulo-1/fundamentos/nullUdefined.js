let valor; //Não inicializa
console.log(valor); //Resultado: undefined

valor = null; //Ausência de valor
console.log(valor); //Resultado: Null
//console.log(valor.toString()) //Erro! pois não podemos acessar nada que o valor esteja Null

const produto = {}
console.log(produto.preco) //Resultado: undefined
console.log(produto) //Resultado: Null

produto.preco = 3.5
console.log(produto) //Resultado {preco: 3.5}

produto.preco = undefined //Evitar atrivuir undefined
console.log(!!produto.preco) //Resultado: false, mas ainda existe produto.preco
//delete produto.preco //assim realmente deleta produto.preco
console.log(produto)

produto.preco = null //sem preço
console.log(!!produto.preco) //resultado: False
console.log(produto)