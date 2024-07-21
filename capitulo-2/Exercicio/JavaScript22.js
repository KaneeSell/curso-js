let mes; let x; let valor = 100; let juros = 5; let total
function calcularAnuidade(mes){
    var jurosComposto = 0
    juros = juros / 100
    total = Math.floor(valor * (juros + 1) ** mes)
    console.log(total)
}
calcularAnuidade(1)