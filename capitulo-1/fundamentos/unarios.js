let num1 = 1
let num2 = 2


num1++ //Prioridade de somar menor que o numero
console.log(num1)
--num1 //Prioridade de subtrair maio que o numero
console.log(num1)

console.log(++num1 === num2--) //resultado true, pois fez a comparação antes de subtrair
console.log(num1 === num2) //resultado false, pois logo apos a comparação acima, foi decrementado num2