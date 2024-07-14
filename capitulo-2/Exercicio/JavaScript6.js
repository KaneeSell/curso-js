function jurosSimples(capital, juros, temp){
    juros = juros / 100
    total = capital * (juros * temp)
    return 'Capital = R$' + capital + ' \nJuros Simples = R$' + total + '\nTotal = R$' + (total + capital)
}
function jurosComposto(capital, juros, temp){
    var jurosComposto = 0
    juros = juros / 100
    total = capital * (juros * temp)
    temp--
    total = total + temp
    
    return 'Capital = R$' + capital + ' \nJuros Composto = R$' + total + '\nTotal = R$' + (total + capital)
}
console.log(jurosSimples(1000, 10, 5))
console.log(jurosComposto(1000, 10, 5))