const utilOuNao = (dia) => {
    switch(dia){
        case 1: case 8: case 15: case 22: case 29:
            console.log(`${dia} é domingo!`)
            break;
        case 7: case 14: case 21: case 28:
            console.log(`${dia} é sábado!`)
            break;
        default:
            if(dia > 0 && dia < 32){ console.log(`${dia} é dia de semana`) }
            else { console.log(`${dia} é inválido!`) }
    }
}
for(let i = 1; i < 32; i++){
    utilOuNao(i)
}