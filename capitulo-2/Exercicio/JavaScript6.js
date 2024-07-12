function jurosSimples(capital, juros, temp){
    juros = juros / 100
    total = capital * (juros * temp)
    return 'Capital = R$' + capital + ' \nJuros Simples = R$' + total + '\nTotal = R$' + (total + capital)
}
function jurosComposto(capital, juros, temp){
    let calc = 0
    juros = juros / 100
    for (let i = 1; temp >= i; i++){
        console.log(calc)
        calc = calc + (juros + i)
        }
    total = capital * (juros * temp)
    return 'Capital = R$' + capital + ' \nJuros Composto = R$' + total + '\nTotal = R$' + (total + capital)
}
console.log(jurosSimples(1000, 10, 2))
console.log(jurosComposto(1000, 10, 2))