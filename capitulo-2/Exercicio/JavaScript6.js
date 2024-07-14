function jurosSimples(capital, juros, temp){
    juros = juros / 100
    total = capital * (juros * temp)
    return 'Capital = R$' + capital + ' \nJuros Simples = R$' + total + '\nTotal = R$' + (total + capital)
}
function jurosComposto(capital, juros, temp){
    let calc = 0
    juros = juros / 100
        if(temp > 1){
            let calc = juros
            for (let i = temp; i > 1; i--)
                calc = (juros + 1) * temp
        }
        console.log(calc)
    total = capital * (juros * temp)
    return 'Capital = R$' + capital + ' \nJuros Composto = R$' + total + '\nTotal = R$' + (total + capital)
}
console.log(jurosSimples(1000, 10, 2))
console.log(jurosComposto(1000, 10, 2))