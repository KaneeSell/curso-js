function calcularDias(data){
    let strNiver = data.split("/")
    for(let i = 0; i < strNiver.length; i++){ strNiver[i] = Number(strNiver[i]) }
    let strHoje = [new Date().getDate(), new Date().getMonth()+1, new Date().getFullYear()]
    let dia = strHoje[0]; let mes = strHoje[1]; let ano = strHoje[2]
    if(strHoje[0] != strNiver[0] && strHoje[1] != strNiver[0]){
        let i = 0
        for(let loop = true; loop == true; ){
            if(dia != strNiver[0] || mes != strNiver[1]){
                if(mes == 1){
                    if(dia == 1){
                        dia = 31; mes = 12; i++
                    }
                    else { dia--; i++}
                }
                if(mes == 3){
                    if(dia == 1){
                        if(ano % 4 == 0){dia = 29; mes = 2; i++}
                        else{ dia = 28; mes = 2;ano--; i++}
                    }
                    else { dia--; i++}
                }
                if(mes == 12 || mes == 10 || mes == 7 || mes == 5){
                    if(dia == 1){
                        dia = 30; mes--; i++
                    }
                    else { dia--; i++}
                }
                if(mes == 11 || mes == 9 || mes == 6 || mes == 4 || mes == 2){
                    if(dia == 1){
                        dia = 31; mes--; i++
                    }
                    else { dia--; i++}
                }
                if(mes == 8){
                    if(dia == 1){
                        dia = 31; mes--; i++
                    }
                    else { dia--; i++}
                }
            }
            else{loop = false}
        }
        console.log(`ultimo aniversario ${dia}/${mes}/${ano}, fazem ${i} dias`)
        let x = 0;
        for(let loop = true; loop == true; ){
            if(ano != strNiver[2]){
                if(ano % 4 == 0){
                    ano--; x += 366
                }
                else{ano--; x += 365}
            }
            else{loop = false}
        }
        console.log(`${x + i} dias de vida`)
    }
    else{ console.log('Hoje é seu aniversario!') }
}
const criarData = (dia, mes, ano) => `${dia}/${mes}/${ano}`
const aniversario = criarData(10, 7, 1999)
console.log(aniversario)
calcularDias(aniversario)
