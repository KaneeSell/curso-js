function paresEntre(num1, num2){
    let pares = []
    if(num1 < num2){for(let aux = num1; num1 < num2 + 1; num1++){ aux = num1 % 2; if(aux == 0){pares.push(num1)}};console.log(pares)}
    else if(num2 < num1){console.log(`Números de ${num1} até ${num2} São inválidos!`)}
}
paresEntre(1, 10)