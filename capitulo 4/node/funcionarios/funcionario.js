const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

axios.get(url).then(response => {
    const funcionarios = response.data
    //Filtros
    const genero = funcionarios => funcionarios.genero == 'F'
    const pais = funcionarios => funcionarios.pais == 'China'
    const menorSalario = (func, funcAtual) => {
        return func.salario < funcAtual.salario? func: funcAtual
    }

    //Mulher Chinesa com menor Salario?
    const func = funcionarios
    .filter(genero)
    .filter(pais)
    .reduce(menorSalario)
    console.log(func)
})