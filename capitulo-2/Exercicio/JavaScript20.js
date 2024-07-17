let total;let x;
const troco = (total) =>{
    total = total.toFixed(2)
    console.log(`Troco para R$ ${total}`)
        //Cédulas
        if(total >= 100){ for(x = 0;total >= 100;total -= 100){x = x + 1};console.log(`${x} x Notas de 100 R$`)}
        if(total >= 50){ for(x = 0;total >= 50;total -= 50){x = x + 1};console.log(`${x} x Notas de 50 R$`)}
        if(total >= 10){ for(x = 0;total >= 10;total -= 10){x = x + 1};console.log(`${x} x Notas de 10 R$`)}
        if(total >= 5){ for(x = 0;total >= 5;total -= 5){x = x + 1};console.log(`${x} x Notas de 5 R$`)}
        if(total >= 1){ for(x = 0;total >= 1;total -= 1){x = x + 1};console.log(`${x} x Notas de 1 R$`)}
        //Moedas
        if(total >= 0.5){ for(x = 0;total >= 0.5;total -= 0.5){x = x + 1};console.log(`${x} x Moeda de 0.50 R$`)}
        if(total >= 0.25){ for(x = 0;total >= 0.25;total -= 0.25){x = x + 1};console.log(`${x} x Moeda de 0.25 R$`)}
        if(total >= 0.10){ for(x = 0;total >= 0.10;total -= 0.10){x = x + 1};console.log(`${x} x Moeda de 0.10 R$`)}
        if(total >= 0.05){ for(x = 0;total >= 0.05;total -= 0.05){x = x + 1};console.log(`${x} x Moeda de 0.05 R$`)}
        if(total >= 0.01){ for(x = 0;total >= 0.009;total -= 0.01){x = x + 1};console.log(`${x} x Moeda de 0.01 R$`)}
}
troco(157.57)