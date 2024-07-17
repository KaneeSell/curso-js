let cod; let item; let quant;let x = 0;
const venda = (cod, quant) =>{
    switch(cod){
case 100:
    console.log(`${cod} - Cachorro Quente x ${quant} = R$ ${(quant * 3.00).toFixed(2)} (R$3.00/un)`)
    break;
case 200:
    console.log(`${cod} - Hambúrger Simples x ${quant} = R$ ${(quant * 4.00).toFixed(2)} (R$4.00/un)`)
    break;
case 300:
    console.log(`${cod} - Cheeseburger x ${quant} = R$ ${(quant * 5.50).toFixed(2)} (R$5.50/un)`)
    break;
case 400:
    console.log(`${cod} - Bauru x ${quant} = R$ ${(quant * 7.50).toFixed(2)} (R$7.50/un)`)
    break;
case 500:
    console.log(`${cod} - Refrigerante x ${quant} = R$ ${(quant * 3.50).toFixed(2)} (R$3.50/un)`)
    break;
case 600:
    console.log(`${cod} - Suco x ${quant} = R$ ${(quant * 2.80).toFixed(2)} (R$2.80/un)`)
    break;
default:
    console.log(`Produto não existe!`)
    }
}
for(let i = 100; i < 701; i += 100){
    venda(i, x = x + 1)
}