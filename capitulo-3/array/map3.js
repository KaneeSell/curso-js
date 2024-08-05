Array.prototype.map2 = function(callback){
    const newArray = []
    for(let i = 0; i < this.length; i++){
        newArray.push(callback(this[i], i, this))
    }
    return newArray
}


const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45 }',
    '{ "nome": "Caderno", "preco": 13.90 }',
    '{ "nome": "Kit de Lapis", "preco": 41.22 }',
    '{ "nome": "Caneta", "preco": 7.50 }'
]

//Retornar um array somente com preços

const paraObjeto = json => JSON.parse(json)//JSON recebe um objeto com a json
const apenasPreco = produto => produto.preco //recebe como parametro um produto e retorna apenas o preço

const resultado = carrinho.map2(paraObjeto).map(apenasPreco)
console.log(resultado)