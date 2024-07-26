function criarFuncionario(nome, salarioBase, faltas){
    return {
        nome,
        salarioBase,
        faltas,
        getSalarioBruto(){
            return ((salarioBase / 30) * (30 - faltas)).toFixed(2)
        },
        getSalarioLiquido(){
            return (((salarioBase / 30) * (30 - faltas)) - ((salarioBase / 100) * 14)).toFixed(2)
        }
    }
}
const f1 = new criarFuncionario('João', 1250.58, 0)
const f2 = new criarFuncionario('Ana', 1450.98, 0)
const f3 = new criarFuncionario('Paul', 1350.50, 0)
const f4 = new criarFuncionario('Marcos', 1400.47, 0)
const f5 = new criarFuncionario('José', 1980.35, 0)
console.log('Funcionario: ' + f1.nome + ' Salario Bruto: R$' + f1.getSalarioBruto() + ' Salario Líquido: R$' + f1.getSalarioLiquido())
console.log('Funcionario: ' + f2.nome + ' Salario Bruto: R$' + f2.getSalarioBruto() + ' Salario Líquido: R$' + f2.getSalarioLiquido())
console.log('Funcionario: ' + f3.nome + ' Salario Bruto: R$' + f3.getSalarioBruto() + ' Salario Líquido: R$' + f3.getSalarioLiquido())
console.log('Funcionario: ' + f4.nome + ' Salario Bruto: R$' + f4.getSalarioBruto() + ' Salario Líquido: R$' + f4.getSalarioLiquido())
console.log('Funcionario: ' + f5.nome + ' Salario Bruto: R$' + f5.getSalarioBruto() + ' Salario Líquido: R$' + f5.getSalarioLiquido())