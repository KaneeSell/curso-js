//entradas
const entradas = {
    nome: 'Salario',
    valor: 5000
}
console.log(entradas)
console.log(Object.keys(entradas))
console.log(Object.values(entradas))
console.log(Object.entries(entradas))
Object.entries(entradas).forEach(e => {console.log(`${e[0]} = ${e[1]}`)})
//saidas
function criarSaidas(nome, valor){
    return {
        n: nome,
        v: valor
    }
}
const luz = criarSaidas('Luz', 120)
console.log(luz)
console.log(luz.n)
console.log(luz.v)
const agua = criarSaidas('agua', 97)
console.log(agua)
console.log(agua.n)
console.log(agua.v)
