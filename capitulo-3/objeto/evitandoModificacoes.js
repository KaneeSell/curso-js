// Object.preventExtensions
const produto = Object.preventExtensions({
    nome: 'Qualquer', preco: 1.99, tag: 'promoção'
})
console.log('Extensível:', Object.isExtensible(produto))
produto.nome = 'Borracha'
produto.descricao = 'Borracha escolar branca'
delete produto.tag
console.log(produto)

// Objet.eal
const pessoa = { nome: 'Juliana', idade: 35 }
Object.seal(pessoa)
console.log('Selado:', Object.isSealed(pessoa))

pessoa.sobrenome = 'Silva'
delete pessoa.nome
pessoa.idade = 29
console.log(pessoa)

// Object.freeze = selado + vaores constantes
const carro = Object.freeze({marca: 'VolksWagen', modelo: 'Gol', valor: 36000})
delete carro.marca
carro.modelo = 'Golf'
console.log(carro)