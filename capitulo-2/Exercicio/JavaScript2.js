function triangulo(lado1, lado2, lado3) {
    if(lado1 == lado2 && lado2 == lado3) {
        return 'Equilátero'
    } else if(lado1 == lado2 || lado2 == lado3 || lado3 == lado1) {
        return 'Isósceles'
    } else {
        return 'Escaleno'
    }
}

console.log(triangulo(1, 1, 1))
console.log(triangulo(1, 2, 1))
console.log(triangulo(1, 2, 3))