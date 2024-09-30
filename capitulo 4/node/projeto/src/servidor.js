const porta = 3003

const express = require('express')
const app = express()
const bobyParser = require('body-parser')
const bancoDeDados = require('./bancoDeDados')
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extends: true})) //Vai ser feito um parser para JSON

// app.get('/produtos', (req, res, next) =>{
//     console.log('Middleware 1...')
//     next()
// })
app.get('/produtos', (req, res, next) =>{
    res.send(bancoDeDados.getProdutos()) // converter para JSON
})
// app.use((req, res, next) =>{ //Responde a todos depois da :3003/
//     res.send({ nome: 'Notebook', preco: 123.45}) // converter para JSON
// })
app.get('/produtos/:id', (req, res, next) => {
    res.send(bancoDeDados.getProduto(req.params.id))
})

app.post('/produtos', (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto)
})
//Editar Produto
app.put('/produtos/:id', (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        id: req.params.id,
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto)
})
//Excluir Produto
app.delete('/produtos/:id', (req, res, next) => {
    const produto = bancoDeDados.excluirProduto(req.params.id)
    res.send(produto)
})

app.listen(porta, () => {
    console.log(`Servidor executando na porta ${porta}.`)
})