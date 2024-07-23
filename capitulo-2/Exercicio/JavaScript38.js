function contador(inicio, fim){
    if(inicio>fim&&fim>=0&&inicio<=100){for(let i=fim;i<=inicio;i++){console.log(i)}}
    else if(fim>inicio&&inicio>=0&&fim<=100){for(let i=inicio;i<=fim;i++){console.log(i)}}
    else{console.log('Inicio e fim inválidos!')}
}
// contador(50, 10)
// contador(10, 50)
contador(10, 10)
