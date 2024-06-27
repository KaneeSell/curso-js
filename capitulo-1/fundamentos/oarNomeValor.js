// par nome/valor
//Léxico - Atribui um local aonde vai ser armazenado o valor
const saudacao = 'Opa' // contexto léxico 1

function exec() {
    const saudacao = 'Falaaa' // contexto léxico 2
    return saudacao
}

// const saudacao = 'Epa!!!' //Erro, ja definiu um identificado para saudacao
// var funcionaria, mas sobrescreveria o valor de saudacao

// Objetos são grupos aninhados de pares nome/valor
const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereco: {
        logradouro: 'Rua Muito Legal',
        numero:123
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)
