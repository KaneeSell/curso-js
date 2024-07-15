function dividendoEDivisor(num1, num2){
    let divisao = num1 / num2
    let restDiv = num1 % num2
    return `Resultado da divisão = ${Math.floor(divisao)}\nResto divisão é = ${restDiv}`
}

console.log(dividendoEDivisor(5, 5))
console.log(dividendoEDivisor(2, 5))
console.log(dividendoEDivisor(10, 5))