console.log(soma(3, 4)) //podemos chamar antes de ser declarada

//function declaration
function soma(x, y){
    return x + y
}

//function expression
const sub = function(x, y){
    return x - y
}
console.log(sub(3, 4)) //chamar depois que foi declarada

//named function expression
const mult = function mult(x, y){
    return x * y
}

console.log(mult(3, 4)) //chamar depois que foi declarada