let num1; let num2; let operador;
const calculadora = (num1, operador, num2) => {
    switch(operador){
        case '+':
            console.log(`${num1} ${operador} ${num2} = ${num1 + num2}`)
            break;
        case '-':
            console.log(`${num1} ${operador} ${num2} = ${num1 - num2}`)
            break;
        case '*':
            console.log(`${num1} ${operador} ${num2} = ${num1 * num2}`)
            break;
        case '/':
            console.log(`${num1} ${operador} ${num2} = ${num1 / num2}`)
            break;
        default:
            console.log(`${operador} não é válido como um operador de calculo!`)
    }
}
calculadora(2, '+', 2)
calculadora(8, '-', 4)
calculadora(10, '*', 5)
calculadora(50, '/', 5)
calculadora(2, '%', 3)