const fatorial = (fator) => {
    let x = 1; let y = fator
    for(fator;fator != 1; fator--){ x = fator * x }
    console.log(`Fatorial de ${y} é = ${x}`)
}
fatorial(7)
fatorial(8)
fatorial(9)
fatorial(10)
fatorial(11)