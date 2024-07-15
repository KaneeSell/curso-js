function jurosSimples(capital, juros, temp){
    juros = juros / 100
    total = capital * (juros * temp)
    return 'Capital = R$' + capital + ' \nJuros Simples = R$' + total + '\nTotal = R$' + (total + capital)
}
function jurosComposto(capital, juros, temp){
    var jurosComposto = 0
    juros = juros / 100
    total = Math.floor(capital * (1 + juros) ** temp)
    
    return 'Capital = R$' + capital + ' \nJuros Composto = R$' + (total - capital) + '\nTotal = R$' + (total + capital)
}
console.log(jurosSimples(100, 10, 5))
console.log(jurosComposto(100, 10, 5))