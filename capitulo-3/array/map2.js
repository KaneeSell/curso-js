const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45 }',
    '{ "nome": "Caderno", "preco": 13.90 }',
    '{ "nome": "Kit de Lapis", "preco": 41.22 }',
    '{ "nome": "Caneta", "preco": 7.50 }'
]

//Retornar um array somente com preços
const json = []
for(let i = 0; i < carrinho.length; i++){
    json.push(JSON.parse(carrinho[i]))
}
console.log(json)
const preco = json.map(function(e){
    return e.preco
})
console.log(preco)

//Resposta
const paraObjeto = json => JSON.parse(json)//JSON recebe um objeto com a json
const apenasPreco = produto => produto.preco //recebe como parametro um produto e retorna apenas o preço

const resultado = carrinho.map(paraObjeto).map(apenasPreco)
console.log(resultado)