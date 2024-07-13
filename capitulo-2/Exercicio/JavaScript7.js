function Bhaskara(ax2, bx, c) {
    let delta = (Math.pow(bx, 2)) - (4 * (ax2 * c))
    if (delta >= 0){
        delta = Math.sqrt(delta)
        let baskara = [
            ((-(bx)) + delta) / (2 * ax2),
            ((-(bx)) - delta) / (2 * ax2)
        ]
        let equacao = [
            (ax2 * Math.pow(baskara[0], 2)) + (bx * baskara[0]) + c,
            (ax2 * Math.pow(baskara[1], 2)) + (bx * baskara[1]) + c
        ]
        return 'Equação é = ' + equacao
    } else {
        return deltanegativo = 'Delta é negativo'
    }
}

console.log(Bhaskara(3, -5, 12))
console.log(Bhaskara(1, -8, 16))
console.log(Bhaskara(1, -3, -54))