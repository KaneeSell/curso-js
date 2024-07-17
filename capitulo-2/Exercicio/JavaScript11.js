const anoBissexto = (ano) => {
    if(ano != 0 && ano % 400 == 0){ return true }
    else if (ano % 100 == 0){ return false }
    else { return ano != 0 && ano % 4 === 0; }
}
for(let i = 0; i < 40001; i += 400){
    console.log(`${i} ano bissexto? R = ${anoBissexto(i)}`)
}
