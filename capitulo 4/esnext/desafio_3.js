const fs = require('fs')
const path = require('path')

function lerDados() {
    
    return new Promise(resolve => {
        const conteudo = fs.readFileSync(caminho)
        resolve(conteudo.toString())
    })
}

const caminho = path.join(__dirname, 'dados.txt')
lerDados(caminho)
    .then(conteudo => conteudo.split('\n'))
    .then(linhas => linhas.join(','))
    .then(conteudo => `O Valor Final é: ${conteudo}`)
    .then(console.log)