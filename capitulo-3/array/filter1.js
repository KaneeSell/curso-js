const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true },
    { nome: 'iPad Pro', preco: 4199, fragil: true },
    { nome: 'Copo de Vidro', preco: 12.49, fragil: true },
    { nome: 'Copo de Plástico', preco: 18.99, fragil: false }
]

console.log(produtos.filter(function(p){
    // return false //Não retorna nada
    // return true //Retorna tudo
    return p.preco > 2400
}))
//Retornar produto acima de 2mil e fragil
const caros = produtos => produtos.preco >= 500
const fragil = produto => produto.fragil
const resultado = produtos.filter(caros).filter(fragil)
console.log(resultado)