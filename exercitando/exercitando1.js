function criarFuncionario(nome, salarioBase, faltas){
    let salarioBruto = ((salarioBase / 30) * (30 - faltas)).toFixed(2)
    let salarioLiquido = (((salarioBase / 30) * (30 - faltas)) - ((salarioBase / 100) * 14)).toFixed(2)
    return {
        nome,
        salarioBase,
        faltas,
        getSalarioBruto(){
            return salarioBruto
        },
        getSalarioLiquido(){
            return salarioLiquido
        },
        falar(){console.log('Funcionario: ' + nome + ' Salario Bruto: R$' + salarioBruto + ' Salario Líquido: R$' + salarioLiquido)}
    }
}
const f1 = new criarFuncionario('João', 1250.58, 0)
const f2 = new criarFuncionario('Ana', 1450.98, 0)
const f3 = new criarFuncionario('Paul', 1350.50, 0)
const f4 = new criarFuncionario('Marcos', 1400.47, 0)
const f5 = new criarFuncionario('José', 1980.35, 0)
f1.falar();f2.falar();f3.falar();f4.falar();f5.falar()