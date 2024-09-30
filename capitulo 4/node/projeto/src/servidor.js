const porta = 3003

const express = require('express')
const app = express()
const bancoDeDados = require('./bancoDeDados')

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
        nome: req.body.name,
        preco: req.body.preco
    })
    res.send(produto)
})

app.listen(porta, () => {
    console.log(`Servidor executando na porta ${porta}.`)
})