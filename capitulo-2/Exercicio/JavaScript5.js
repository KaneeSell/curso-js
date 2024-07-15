var result= 0.1 + 0.2
console.log(`Valor antes de formatar = ${result}`)
function emReal(num1){                                           //toFixed(2) pegando 2 casas apos a "," como valor fixo
    total = `R$ ${num1.toFixed(2).toString().replace(".", ",")}` //toString() retorna como valor string
    return total                                                 //replace(".", ",") substitui o "." por ","
}

console.log(emReal(result))