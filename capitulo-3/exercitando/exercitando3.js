function criarValores(valores){
    return {
        valores,
        falar(){ return (valores).join(", ") }
    }
}
function criarNomes(nomes){
    return {
        nomes,
        falar(){ return (nomes).join(", ") }
    }
}
function nomeValor(nomes, valores){
    let nomesValores = []
    if (valores.length == nomes.length){
    for(let i = 0;i < valores.length; i++){nomesValores.push(nomes[i] + ' = ' + (valores[i]).toString())}}
    else {return 'Quantidade maior em nomes, ou em valores'}
    return nomesValores
}
const quebralinha = '-------------------------------------------'
//entradas
const nomeEntradas = criarNomes(['Salario', 'Vendas'])
const valorEntrada = criarValores([1200, 400])
const entradas = nomeValor(nomeEntradas.nomes, valorEntrada.valores)
//despesas
const nomeDespesa = criarNomes(['Luz', 'Agua', 'Internet'])
const valorDespesa = criarValores([250, 60, 150])
const despesas = nomeValor(nomeDespesa.nomes, valorDespesa.valores)
//console
console.log('Entradas:')
console.log(entradas)
console.log(quebralinha)
console.log('Despesas:')
console.log(despesas)