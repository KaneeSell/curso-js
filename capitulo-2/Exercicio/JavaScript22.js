let mes; let x; let valor = 100; let juros = 5; let total
function calcularAnuidade(mes, juros){
    var jurosComposto = 0
    juros = juros / 100
    total = (valor * (juros + 1) ** mes).toFixed(2)
    console.log(total)
}
calcularAnuidade(5, 10)