function aumento(plano, salario){
    plano = plano.toUpperCase()
    switch(plano){
        case 'A':
            console.log(`Salario: R$ ${salario} no plano ${plano}, terá o aumento de: ${salario * 0.1} Total = ${salario + (salario * 0.1)}`)
            break;
        case 'B':
            console.log(`Salario: R$ ${salario} no plano ${plano}, terá o aumento de: ${salario * 0.15} Total = ${salario + (salario * 0.15)}`)
            break;
        case 'C':
            console.log(`Salario: R$ ${salario} no plano ${plano}, terá o aumento de: ${salario * 0.2} Total = ${salario + (salario * 0.2)}`)
            break;
        default:
            console.log(`${plano} não é um plano válido!`)
    }
}
aumento('a', 1700)
aumento('B', 2500)
aumento('c', 1800)
aumento('d', 2000)