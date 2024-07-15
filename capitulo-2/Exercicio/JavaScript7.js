function Bhaskara(ax2, bx, c) {
    let delta = (bx ** 2) - (4 * ax2 * c)
    if (delta >= 0){
        delta = Math.sqrt(delta)
        // let resultado = [] tambem podemos atribuir uma array vazia
        // resultado.push(x1) e no final setar os valores de x1 a array 
        // resultado.push(x2) e tambem o valor de x2 a array
        let baskara = [
            ((-(bx)) + delta) / (2 * ax2),
            ((-(bx)) - delta) / (2 * ax2)
        ]
        return `Resultado da Baskara:\nx1 = ${baskara[0]}\nx2 = ${baskara[1]}`
    } else {
        return deltanegativo = 'Delta é negativo'
    }
}

console.log(Bhaskara(3, -5, 12))
console.log(Bhaskara(1, -8, 16))
console.log(Bhaskara(1, -3, -54))
console.log(Bhaskara(2, -5, 3))