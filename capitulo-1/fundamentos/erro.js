
//tratamento de erro
function tratarErroELancar(erro) {
    // throw new Erro ('...')
    // throw 10
    // throw true
    // throw 'mensagem'
    throw {
        nome: erro.nome,
        msg: erro.message,
        date: new Date
    }
    
}

function imprimirNomeGritado(obj) {
    try {
    console.log(obj.nome.toUpperCase() + '!!!') //execultar a função
    } catch (e) { //caso der erro exibe essa mensage(tratamento de erro)
        tratarErroELancar(e)
    } finally { //caso der certo ou não, vai ser exibido essa mensagem
        console.log('Final')
    }
}

const obj = { name: 'Roberto' }
imprimirNomeGritado(obj)